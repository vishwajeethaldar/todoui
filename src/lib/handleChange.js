
export const handleChange = (e, val, setVal)=>{
    const {name, value} = e.target;
    setVal({...val, [name]:value});
    console.log(val);
}