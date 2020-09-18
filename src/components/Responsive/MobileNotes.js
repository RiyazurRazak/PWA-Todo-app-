import React from 'react'
import "./MobileTodo.css"

import Notes from '../Notes'
import Sidebar from '../Sidebar'
import BottomNavigation from './BottomNavigation'


import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";



const MobileNotes = () =>{

    const history = useHistory()

    return(
        <div>
            <div className="mobile_back_btn">
              <IconButton onClick={()=> history.goBack()}>
                <ArrowBackIosIcon />
              </IconButton>
              <h2 className="mobile_todo_title">Notes</h2>
            </div>

            <section>
               <Notes />
            </section>
            <Sidebar 
            mobile={true} />

           
            <BottomNavigation />
          
        </div>
    )
}

export default MobileNotes