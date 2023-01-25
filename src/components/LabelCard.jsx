import React from 'react'
import { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styles from '../style/modules/LabelCard.module.css'
import LabelMenus from './LabelMenus'

export default function LabelCard({label,setLabelInfo, labelInfo, setShowAddLabel}) {
  const [showMenu, setShowMenu] =  useState(false)

  const handleKeyPress = (e)=>{
    if(showMenu && e.key==="Escape"){
      setShowMenu(false);
    }
  }

  const handleMenuClick  = ()=>{
    setLabelInfo({...labelInfo, title:label.title, color:label.color, user:label.user})
    setShowMenu(!showMenu)
  }

  return (
    <div className={styles.card} tabIndex={0} onKeyUp={handleKeyPress}>
      <Link to={`/todos/${label.id}`}>
        {label.title}
      </Link>
      <BsThreeDots className={styles.menu} onClick={handleMenuClick}/>
      {showMenu && <LabelMenus setShowAddLabel={setShowAddLabel} setShowMenu={setShowMenu}/>}
    </div>
  )
}
