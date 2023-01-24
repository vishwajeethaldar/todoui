import React, { useEffect } from 'react'
import styles from '../style/modules/Header.module.css'
import {Link} from 'react-router-dom'
import Menus from './Menus'
import { Auth } from '../context/AuthContext'

const Header = () => {
  const [showMenus, setShowMenus] = React.useState(false);
  const {auth} = React.useContext(Auth);

  const toggleUserMenu = ()=>{
     setShowMenus(!showMenus);
  }

  const handleKeyPress = (e)=>{
    if(showMenus){
     { e.key==="Escape" && setShowMenus(false)}
    }
  }

 
  return (
    <header className={styles.header} tabIndex="0" onKeyUp={handleKeyPress}>
        <div>
           <Link to="/" className={styles.link}>  
              <h1>TODO</h1>
           </Link>
        </div>

        <div className={styles.avatarContainer}>
           {auth?
           <img className={styles.avatar} src={"https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"} alt="avatar" onClick={
              ()=>toggleUserMenu()
            }/>:
            <Link to="/login"> <h2>Login</h2> </Link>}
        </div>
        {showMenus&&<Menus/>}
        
    </header>
  )
}

export default Header