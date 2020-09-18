import React from 'react'
import './BottomNavigation.css'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DescriptionIcon from '@material-ui/icons/Description';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link} from "react-router-dom"




const MobileBottomNavigation = () =>{

    return(
        <div>

        <p className="footer">Created by Riyazur Razak with <span><i className="fab fa-react"></i></span> </p>    
        
        <section className="bottom-navigation">
        <BottomNavigation className="btm-navigation">
         <Link to={"/"}><BottomNavigationAction label="Home" value="home" icon={<i className="fas fa-th-large"></i>}></BottomNavigationAction></Link> 
         <Link to={"/todo"}><BottomNavigationAction label="Todo" value="Todo" icon={<AssignmentIcon/>}></BottomNavigationAction></Link>
         <Link to={"/notes"}><BottomNavigationAction label="Notes" value="Notes" icon={<DescriptionIcon/>}></BottomNavigationAction></Link> 
        </BottomNavigation>
    </section>
    </div>
    )
}

export default MobileBottomNavigation