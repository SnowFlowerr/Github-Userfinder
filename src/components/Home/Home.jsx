import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>GitHub User Finder</h1>
        <p className={styles.heroSubtitle}>
          Discover GitHub users and explore their repositories
        </p>
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔍</div>
            <h3>Quick Search</h3>
            <p>Find GitHub users instantly with live search</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>👤</div>
            <h3>Detailed Profiles</h3>
            <p>View comprehensive user information</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📦</div>
            <h3>Repository Explorer</h3>
            <p>Browse through user repositories</p>
          </div>
        </div>
      </div>

      <div className={styles.popularUsers}>
        <h2 className={styles.sectionTitle}>Popular Users</h2>
        <div className={styles.userGrid}>
          {[
            { login: 'torvalds', name: 'Linus Torvalds' },
            { login: 'gaearon', name: 'Dan Abramov' },
            { login: 'sindresorhus', name: 'Sindre Sorhus' },
            { login: 'yyx990803', name: 'Evan You' },
          ].map((user) => (
            <Link
              key={user.login}
              to={`/user/${user.login}`}
              className={styles.userCard}
            >
              <img
                src={`https://github.com/${user.login}.png`}
                alt={user.login}
                className={styles.userAvatar}
              />
              <div className={styles.userInfo}>
                <h3 className={styles.userName}>{user.name}</h3>
                <p className={styles.userLogin}>@{user.login}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 