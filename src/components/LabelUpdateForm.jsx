import React from 'react'
import styles from '../style/modules/LabelUpdateForm.module.css'
import { handleChange } from '../lib'
import {RxCross2} from 'react-icons/rx'

export default function LabelUpdateForm({setShowForm}) {
  const [labelInfo, setLabelInfo] =  React.useState({title:"",color:"#FFFFFF",user:""})
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(labelInfo);
  }

  return (
    <div className={styles.container}>
        <h2 className={styles.title}> New Group </h2>
       <form onSubmit={handleSubmit}>
          <div className={styles.labelForm}>
              <label> Title : </label>
              <input value={labelInfo.title}  className={styles.input} type="text" name="title" placeholder='labelTitle' onChange={(e)=>handleChange(e,labelInfo, setLabelInfo)}/>
              <label> Color : </label>
              <input value={labelInfo.color}  className={styles.input}  type="color" name="color"  onChange={(e)=>handleChange(e,labelInfo, setLabelInfo)}/>
              <input type="submit" value="Add" className={styles.button}/>
          </div>
       </form>
      <RxCross2 className={styles.closeIcon} onClick={()=>setShowForm(false)}/>
    </div>
  )
}
