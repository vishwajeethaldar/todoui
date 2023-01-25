import React from 'react'
import {useParams } from 'react-router-dom'
import { AddTodoForm, Template, TodosList } from '../components'
import styles from '../style/modules/pages/Todos.module.css'
import {BiBookAdd} from 'react-icons/bi'

export default function Todos() {
  const {id}  = useParams()
  const [shoForm, setShowForm] = React.useState(false)
  
  return (
    <div>
      <Template>
          <div className={styles.addTodoIconContainer}  onClick={()=>setShowForm(!shoForm)}>
            <h3>New</h3>
            <BiBookAdd className={styles.addTodoIcon}/> 
          </div>
          {shoForm && <AddTodoForm setShowForm={setShowForm}/>}
          <TodosList/>  
      </Template>
    </div>
  )
}
