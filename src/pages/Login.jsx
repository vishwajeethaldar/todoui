import React from 'react'
import { Link } from 'react-router-dom'
import { LoginForm, Template2 } from '../components'
import styles from '../style/modules/pages/Login.module.css'

export default function Login() {
  return (
    <div style={styles.container}>
      <Template2>
          <LoginForm/>
          <div className={styles.redirectSection}>
              <Link to={"/signup"} className={styles.link}>
                Forget Password 
              </Link>

              <Link to={"/signup"} className={styles.link}>
                Not Registered Click Here 
              </Link>
          </div>
      </Template2>
    </div>
  )
}
