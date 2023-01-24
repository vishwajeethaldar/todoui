
const validatePassword = (password)=>{

    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,12}$/
    let x = re.exec(password)
    return x?true:false;
}

export {validatePassword}