import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserList.module.css';

const UserList = ({ users }) => {
  if (!users || users.length === 0) {
    return <div className={styles.noResults}>No users found</div>;
  }

  return (
    <div className={styles.userList}>
      {users.map((user) => (
        <Link to={`/user/${user.login}`} key={user.id} className={styles.userCard}>
          <img src={user.avatar_url} alt={user.login} className={styles.avatar} />
          <div className={styles.userInfo}>
            <h3 className={styles.username}>{user.login}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UserList; 