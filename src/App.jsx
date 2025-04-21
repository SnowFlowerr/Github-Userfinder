import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import UserList from './components/UserList/UserList';
import UserDetails from './components/UserDetails/UserDetails';
import RepoList from './components/RepoList/RepoList';
import { searchUsers, getUserDetails, getUserRepos } from './services/githubService';
import styles from './App.module.css';
import Home from './components/Home/Home';

const SearchResults = () => {
  const { query } = useParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const results = await searchUsers(query);
        setUsers(results);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [query]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return <UserList users={users} />;
};

const UserProfile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reposLoading, setReposLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const [userData, reposData] = await Promise.all([
          getUserDetails(username),
          getUserRepos(username)
        ]);
        setUser(userData);
        setRepos(reposData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
        setReposLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <>
      <UserDetails user={user} />
      {!reposLoading && <RepoList repos={repos} />}
    </>
  );
};

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <SearchBar />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="/user/:username" element={<UserProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
