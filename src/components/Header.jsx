import React, { useEffect } from 'react'
import styles from '../style/modules/Header.module.css'
import {Link} from 'react-router-dom'
import Menus from './Menus'
import { Auth } from '../context/AuthContext'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react'
import {Navbar} from './'

const Header = () => {
  const [showMenus, setShowMenus] = React.useState(false);
  const {auth} = React.useContext(Auth);
  const [showNav, setShowNav] =  useState(false)

  const toggleUserMenu = ()=>{
     setShowMenus(!showMenus);
  }

  const handleKeyPress = (e)=>{
    if(showMenus){
     { e.key==="Escape" && setShowMenus(false)}
    }
  }

 
  return (
    <>
    <header className={styles.header} tabIndex="0" onKeyUp={handleKeyPress}>
       
       <div className={styles.brandSection}>
          
        {auth&&!showNav&&
        <FaBars className={styles.bars} onClick={()=>{setShowNav(!showNav);setShowMenus(false)}}/>
        }

           <Link to="/" className={styles.link}>  
              <h1>TODO</h1>
           </Link>
        </div>

        <div className={styles.avatarContainer}>
           {auth?
           <img className={styles.avatar} src={"https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"} alt="avatar" onClick={
              ()=>{toggleUserMenu();setShowNav(false)}
            }/>:
            <Link to="/login"> <h2>Login</h2> </Link>}
        </div>
        {showMenus&&<Menus/>}
        
    </header>

    {showNav&&<section className={styles.navsection}>
      <Navbar setShowNav={setShowNav} setShowMenus={setShowMenus} showNav={showNav}/>
    </section>}
    </>
  )
}

export default Header