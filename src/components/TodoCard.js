import React from "react"
import './TodoCard.css'
import db from '../firebase/firebase'



import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider'






 const TodoCards = (props)=>{
     

    const deletetododb = () =>{
        console.log(typeof(props.id))
        db.collection("todo-db").doc('ocs072JprWWOMpYwhoWW').collection("todo-collection").doc(props.id).delete()
       .then(()=> console.log("Card Removed")).catch(function(error) {
         console.error("Error removing document: ", error);
     });
    }

    return(
    
        <Card className= {`todo__card ${props.color}`}>
            <CardContent>
                <h1 className="todo_header">{props.title}</h1>
                <Divider className="divider" />
                <p className="time">{props.time}</p>
                <Divider className="divider" />
                <p className="todo_content">{props.content}</p>
            </CardContent>
            <CardActions>
                <IconButton size="small" onClick={deletetododb} >
              <DeleteIcon /> 
                </IconButton>
            </CardActions>
        </Card>
       
    
)}


export default TodoCards