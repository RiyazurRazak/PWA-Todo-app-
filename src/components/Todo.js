import React, {useEffect ,useState} from "react"
import './Todo.css'
import TodoCard from './TodoCard'
import db from '../firebase/firebase'




 const Todo = ({mobile})=>{

    const [todos , setTodos]= useState([])

    useEffect(()=>{
        db.collection("todo-db").doc('ocs072JprWWOMpYwhoWW').collection("todo-collection").onSnapshot((snapshot)=>
            setTodos(snapshot.docs.map((doc)=> { return ([doc.data(), doc.id])}))
        )
     }, [])
    
    console.log(todos)

    return(
        <div className="todo">

            <div className="todo__header">
                <p>Todo-List</p>
            </div>  
            <div className="todo__body">
              
              {mobile ? todos.slice(0, 2).map((todo , index) =>{
                   return (
                    <TodoCard 
                    key={index}
                    id={todo[1]}
                    title={todo[0].Title}
                    content={todo[0].Content}
                    time={todo[0].time?.toDate().toDateString()}
                    color={todo[0].bgColor}
                    />
                  )
                   })
              
              :todos.map((todo , index) => {
                  return (
                    <TodoCard 
                    key={index}
                    id={todo[1]}
                    title={todo[0].Title}
                    content={todo[0].Content}
                    time={todo[0].time?.toDate().toDateString()}
                    color={todo[0].bgColor}
                    />
                  )
              })}
              
             
            </div>

        </div>
  
)}


export default Todo