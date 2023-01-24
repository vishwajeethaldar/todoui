import styles from '../style/modules/LoginForm.module.css';
import React from 'react';
import { login } from '../lib';
import { handleChange } from '../lib';
const LoginForm = ()=>{
    const [loginCreds, setLoginCreads] = React.useState({email:"", password:''});

    // handle submission of form 
    const handleSubmit = (e)=>{
        e.preventDefault()
       
        if(loginCreds.email===""||loginCreds.password===""){
            return
        }
        login(loginCreds.email,loginCreds.password);
    }

    return (
        <main className={styles.container}>
            <h1 className={styles.title}> Login </h1>
            <form className={styles.loginForm} onSubmit={handleSubmit}>

                <div className={styles.loginForm}>
                    <label  className={styles.formLabel}>
                        Email :
                    </label>
                    <input type={"email"} name="email" placeholder='Email..' className={styles.input} onChange={(e)=>handleChange(e, loginCreds, setLoginCreads)}/>

                    <label  className={styles.formLabel}>
                        Password :
                    </label>
                    <input type={"password"} name="password" placeholder='Password..' className={styles.input} onChange={(e)=>handleChange(e, loginCreds, setLoginCreads)}/>

                    <input type="submit" value={"Login"} className={styles.loginBtn}/>
                    
                </div>
            </form>
        </main>
    )
}

export default LoginForm