import React from "react";
import styles from "./Profile.module.css"

const Profile = ({name, tag, location, avatar, stats}) => {

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>&#64;{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <p className={styles.label}>Followers</p>
          <p className={styles.quantity}>{stats.followers}</p>
        </li>
        <li>
          <p className={styles.label}>Views</p>
          <p className={styles.quantity}>{stats.views}</p>
        </li>
        <li>
          <p className={styles.label}>Likes</p>
          <p className={styles.quantity}>{stats.likes}</p>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
