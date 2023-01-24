import styles from '../style/modules/LoginForm.module.css';
import React from 'react';

const LoginForm = ({login})=>{

    const [loginCreds, setLoginCreads] = React.useState({email:"", password:''});

    const handleChange = (e)=>{
        const {name, value} = e.target.value;
        setLoginCreads({...loginCreds, [name]:value});
    }

    // handle submission of form 
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(loginCreds.email===""||loginCreds.password||loginCreds.password===""){
            return
        }
        login(loginCreds.email,loginCreds.password);
    }

    return (
        <main className={styles.container}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div className={styles.formContainer}>
                    <label for="email" className={styles.formLabel}>
                        Email :
                    </label>
                    <input type={"email"} name="email" placeholder='Email..' className={styles.input} onChange={handleChange}/>

                    <label for="email" className={styles.formLabel}>
                        Password :
                    </label>
                    <input type={"password"} name="password" placeholder='Password..' className={styles.input} onChange={handleChange}/>

                    <input type="submit" value={"Login"} className={styles.loginBtn}/>
                    
                </div>
            </form>
        </main>
    )
}

export default LoginForm