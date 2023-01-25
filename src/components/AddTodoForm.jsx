import React from 'react'
import styles from '../style/modules/AddTodoForm.module.css'
import { IoMdClose} from 'react-icons/io'
export const AddTodoForm = ({setShowForm}) => {

  const handleSubmit = (e)=>{
        e.preventDefault()
  }  
  return (
    <div className={styles.addTaskContainer}>
        <IoMdClose className={styles.hideForm} onClick={()=>setShowForm(false)}/>
        <form onSubmit={handleSubmit}>
            <div className={styles.addTaskForm}>
                <h2 className={styles.title}> Add New Task</h2>
                <label> Title : </label>
                <input className={styles.input} type="text" name='title'  placeholder='Todo Title'/>
                <label> Description : </label>
                <textarea className={styles.input}  name='description'  placeholder='Todo Description'/>
                <label> Color : </label>
                <input className={styles.input} type="color" name='color' aria-rowcount={5} placeholder='Select Color'/>
                <input className={styles.button} type="submit" value={"Add Task"}/>
            </div>
        </form>
    </div>
  )
}
