import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Notes from "./components/Notes"
import Todo from './components/Todo'
import MobileHome from './components/Responsive/MobileHome'
import MobileTodo from './components/Responsive/MobileTodo'
import MobileNotes from './components/Responsive/MobileNotes'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';



function App() {
  return (
  <div>
    <div className="app">
    <div className="app__sidebar">
      <Sidebar />
    </div>

    <div className="app__body">
          <Notes/>
          <Todo />
      </div> 
      

    {window.screen.width <= 600 &&  <div className="app_mobile_body">
           <Router>
             <Switch>
               <Route exact path="/" component={MobileHome} />
               <Route exact path="/todo" component={MobileTodo} />
               <Route exact path="/notes" component={MobileNotes} />
             </Switch>
           </Router>



      </div>}
    </div>
  </div>
  );
}

export default App;
