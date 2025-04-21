import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css';
import { searchUsers } from '../../services/githubService';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Debounced search function
  const debouncedSearch = useCallback(
    async (query) => {
      if (query.trim().length < 2) {
        setSuggestions([]);
        return;
      }

      setLoading(true);
      try {
        const results = await searchUsers(query);
        setSuggestions(results.slice(0, 5)); // Show only top 5 results
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Debounce effect
  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, debouncedSearch]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
      setIsFocused(false);
    }
  };

  const handleSuggestionClick = (username) => {
    setSearchQuery(username);
    navigate(`/user/${username}`);
    setIsFocused(false);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchContent}>
        <h1 className={styles.title}><Link to="/">GitHub User Finder</Link></h1>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <div className={styles.searchWrapper} ref={searchRef}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                placeholder="Search GitHub users..."
                className={styles.searchInput}
              />
              {loading && <div className={styles.loadingSpinner} />}
            </div>
            {isFocused && suggestions.length > 0 && (
              <div className={styles.suggestions}>
                {suggestions.map((user) => (
                  <div
                    key={user.id}
                    className={styles.suggestionItem}
                    onClick={() => handleSuggestionClick(user.login)}
                  >
                    <img src={user.avatar_url} alt={user.login} className={styles.suggestionAvatar} />
                    <div className={styles.suggestionInfo}>
                      <span className={styles.suggestionUsername}>{user.login}</span>
                      {user.name && <span className={styles.suggestionName}>{user.name}</span>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button type="submit" className={styles.searchButton}>
            <span className={styles.buttonText}>Search</span>
            <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar; 