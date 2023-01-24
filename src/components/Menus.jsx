import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style/modules/Menus.module.css';

export default function Menus() {
    
  return (
    <div className={styles.container}>
        <div className={styles.avatarContainer}>
            <img className={styles.avatar} alt="avatar" src={"https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"}/>
            <Link to="#">
                <p>Change Picture</p>
            </Link>
        </div>
        <Link to="#">
            <h2>Profile</h2>
        </Link>

        <Link to="#">
        <h2> Sign Out </h2>
        </Link>
    </div>
  )
}
