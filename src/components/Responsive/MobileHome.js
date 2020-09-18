import React from 'react'
import './MobileHome.css'
import Todo from '../Todo'
import Notes from '../Notes'
import BottomNavigation from './BottomNavigation'







const MobileHome = () => {

    return( 
        <div>
          <section>
        <h1 className="mobile__header">Hey Buddy</h1>
        <p className="mobile__date">{new Date("09/09/2020").toDateString()}</p>
        </section>  

        <section>
            <h1 className="mobile_title">On Going</h1>  
            <Todo 
            mobile={true}/>
        </section>
        <section className="mobile_home_last">
            <h1 className="mobile_title">My Notes</h1>
            <Notes 
            mobile={true}/>
        </section>

      

        <BottomNavigation />

      

       
        </div>
    )
}

export default MobileHome