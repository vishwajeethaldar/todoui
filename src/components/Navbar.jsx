import { Link } from 'react-router-dom'
import React from 'react'
import styles from '../style/modules/Navbar.module.css'
import {IoMdAdd} from 'react-icons/io'
// import {BsFillArrowRightCircleFill, BsFillArrowDownCircleFill} from 'react-icons/bs';
import {AddLabel} from '../components'
import Labels from './LabelsC'
import {IoMdClose} from 'react-icons/io'

const Navbar = ({setShowNav,setShowMenus,showNav})=>{
    const [showAddLabel, setShowAddLabel] = React.useState(false)
    const [labelInfo, setLabelInfo] =  React.useState({title:"",color:"#FFFFFF",user:""})
  
    const handleKeyPress = (e)=>{
        if(e.key==="Escape" && showAddLabel){
            setShowAddLabel(false);
        }
    }
    return(
       <>
        <div className={styles.container} tabIndex="0" onKeyUp={handleKeyPress}>
            <section className={styles.todosSection}>
            <div>
                    {showNav&&<IoMdClose className={styles.cross} onClick={()=>{setShowNav(false);setShowMenus(false)}}/>} 
                    <h3 className={styles.title}> Todos </h3> 
            </div>
            <IoMdAdd className={styles.addicon} onClick={()=>{
                setLabelInfo({title:"",color:"#FFFFFF",user:""})
                setShowAddLabel(true)
            }}/>
            </section>

            <section>
                <Labels setLabelInfo={setLabelInfo} labelInfo={labelInfo} setShowAddLabel={setShowAddLabel}/>
            </section>
        </div>
        {showAddLabel&&<AddLabel setShowForm={setShowAddLabel} setLabelInfo={setLabelInfo} labelInfo={labelInfo}/>}
       </>
    )
        
    
}

export default Navbar