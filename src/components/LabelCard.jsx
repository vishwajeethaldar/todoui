import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styles from '../style/modules/LabelCard.module.css'

export default function LabelCard({label}) {
  return (
    <div className={styles.card}>
      <Link to={`/todos/${label.id}`}>
        {label.title}
      </Link>
      <BsThreeDots className={styles.menu}/>
    </div>
  )
}
