import React from 'react';
import styles from '../style/modules/LabelMenus.module.css';
import {Link} from 'react-router-dom';

const LabelMenus = ({setShowAddLabel,setShowMenu}) => {

   return (
    <div className={styles.container} tabIndex={0}>
        <p> Completed </p>
        <p onClick={()=>{
          setShowAddLabel(true)
          setShowMenu(false);
        }}> Update </p>
        <p> Delete </p>
    </div>
  )
}


export default LabelMenus