import React from 'react';
import styles from './RepoList.module.css';

const RepoList = ({ repos }) => {
  if (!repos || repos.length === 0) {
    return <div className={styles.noRepos}>No repositories found</div>;
  }

  return (
    <div className={styles.repoList}>
      <h2 className={styles.sectionTitle}>Recent Repositories</h2>
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.repoCard}
        >
          <div className={styles.repoHeader}>
            <h3 className={styles.repoName}>{repo.name}</h3>
            {repo.private ? (
              <span className={styles.privateBadge}>Private</span>
            ) : (
              <span className={styles.publicBadge}>Public</span>
            )}
          </div>
          {repo.description && (
            <p className={styles.repoDescription}>{repo.description}</p>
          )}
          <div className={styles.repoStats}>
            <div className={styles.stat}>
              <span className={styles.statIcon}>⭐</span>
              <span className={styles.statValue}>{repo.stargazers_count}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statIcon}>👁️</span>
              <span className={styles.statValue}>{repo.watchers_count}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statIcon}>📦</span>
              <span className={styles.statValue}>{repo.forks_count}</span>
            </div>
            {repo.language && (
              <div className={styles.stat}>
                <span className={styles.statIcon}>💻</span>
                <span className={styles.statValue}>{repo.language}</span>
              </div>
            )}
          </div>
          <div className={styles.repoFooter}>
            <span className={styles.updatedAt}>
              Updated {new Date(repo.updated_at).toLocaleDateString()}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default RepoList; 