import React from 'react'
import { Link } from 'react-router-dom'
import { SignupForm, Template2 } from '../components'
import styles from '../style/modules/pages/Signup.module.css'

export default function Signup() {
  return (
    <div style={styles.container}>
     <Template2>
          <SignupForm/>
          <div className={styles.redirectSection}>
              <Link to={"/login"} className={styles.link}>
                Already Registered Login 
              </Link>

              <Link to={"/verifyEmail"} className={styles.link}>
                Verify Email 
              </Link>
          </div>
      </Template2>
      
    </div>
  )
}
