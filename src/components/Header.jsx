import React from 'react'
import styles from '../style/modules/Header.module.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
        <div>
           <Link to="/" className={styles.link}>
           <h1> TODO</h1>
           </Link>
        </div>
    </header>
  )
}

export default Header