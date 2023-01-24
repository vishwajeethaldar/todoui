import { Link } from 'react-router-dom'
import styles from '../style/modules/Navbar.module.css'
import {IoMdAdd} from 'react-icons/io'

import {BsFillArrowRightCircleFill, BsFillArrowDownCircleFill} from 'react-icons/bs'
import Labels from './LabelsC'
import {IoMdClose} from 'react-icons/io'

const Navbar = ({setShowNav,setShowMenus,showNav})=>{

    return(
       <div className={styles.container}>
        <section className={styles.todosSection}>
           <div>
                {showNav&&<IoMdClose className={styles.cross} onClick={()=>{setShowNav(false);setShowMenus(false)}}/>} 
                <h3 className={styles.title}> Todos </h3> 
           </div>
           <IoMdAdd className={styles.addicon}/>
        </section>

        <section>
            <Labels />
        </section>
       </div>
    )
        
    
}

export default Navbar