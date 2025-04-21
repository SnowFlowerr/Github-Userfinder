import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserDetails.module.css';

const UserDetails = ({ user }) => {
  if (!user) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.userDetails}>
      <div className={styles.header}>
        <img src={user.avatar_url} alt={user.login} className={styles.avatar} />
        <div className={styles.userInfo}>
          <h1 className={styles.name}>{user.name || user.login}</h1>
          <p className={styles.login}>@{user.login}</p>
          {user.bio && <p className={styles.bio}>{user.bio}</p>}
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>{user.public_repos}</span>
          <span className={styles.statLabel}>Repositories</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>{user.followers}</span>
          <span className={styles.statLabel}>Followers</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>{user.following}</span>
          <span className={styles.statLabel}>Following</span>
        </div>
      </div>

      <div className={styles.links}>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          View on GitHub
        </a>
        <Link to="/" className={styles.backLink}>
          Back to Search
        </Link>
      </div>
    </div>
  );
};

export default UserDetails; 