import React from 'react'
import styles from '../style/modules/Header.module.css'
import {Link} from 'react-router-dom'
import Menus from './Menus'

const Header = () => {
  return (
    <header className={styles.header}>
        <div>
           <Link to="/" className={styles.link}>
              <h1> TODO</h1>
           </Link>
        </div>

        <div>
            <img className={styles.avatar} src={"https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"} alt="avatar"/>
        </div>
        <Menus/>
    </header>
  )
}

export default Header