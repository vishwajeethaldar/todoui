import React from 'react'
import styles from '../style/modules/SignupForm.module.css';
import { handleChange } from '../lib';
import { validatePassword } from '../lib';

export default function SignupForm() {
const [creadintials, setCreadintials] =  React.useState({name:"", email:"", password:"", confirmpassword:""})

const handleSubmit = (e)=>{
   
    e.preventDefault()
    
    if(!creadintials.confirmpassword||!creadintials.email||!creadintials.name||!creadintials.password){
        return
    }

    if(creadintials.password!==creadintials.confirmpassword){
        return
    }

   let isValidPassword =  validatePassword(creadintials.password)

   if(!isValidPassword){
        return 
   }


   
}
  return (
    <main className={styles.container}>
        <h1 className={styles.title}> Register </h1>
        <form className={styles.signupForm} onSubmit={handleSubmit}>

            <div className={styles.signupForm}>
                <label  className={styles.formLabel}>
                    Name :
                </label>
                <input type={"text"} name="name" placeholder='Full Name..' className={styles.input} onChange={(e)=>handleChange(e,creadintials, setCreadintials)}/>

                <label  className={styles.formLabel}>
                    Email :
                </label>
                <input type={"email"} name="email" placeholder='Email..' className={styles.input} onChange={(e)=>handleChange(e,creadintials, setCreadintials)}/>

                <label  className={styles.formLabel}>
                    Password :
                </label>
                <input type={"password"} name="password" placeholder='Password..' className={styles.input} onChange={(e)=>handleChange(e,creadintials, setCreadintials)}/>

                <label  className={styles.formLabel}>
                   Confirm Password :
                </label>
                <input type={"password"} name="confirmpassword" placeholder='Password..' className={styles.input} onChange={(e)=>handleChange(e,creadintials, setCreadintials)}/>

                <input type="submit" value={"Sign Up"} className={styles.signupBtn}/>
                
            </div>
        </form>
    </main>
  )
}
