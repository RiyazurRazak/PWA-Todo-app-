import React from "react"
import './NoteCard.css'
import './ColorPicker.css'


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider'
import db from '../firebase/firebase'






 const NoteCards = (props)=>{

   const deletedb = () =>{
       console.log(typeof(props.id))
    db.collection("todo-db").doc('aEYKqo23GSeTmylhjSRb').collection("notes-collection").doc(props.id).delete()
    .then(()=> console.log("Card Removed")).catch(function(error) {
        console.error("Error removing document: ", error);
    });
   }

    return(
    
        <Card className= {`card ${props.color}`} >
            <CardContent>
                <h1 className="notecard-title">{props.title}</h1>
                <Divider className="divider"/>
                <p className="notecard-content">{props.content}</p>
            </CardContent>
            <CardActions >
                <IconButton size="small" className="delete-icn" onClick={deletedb} >
              <DeleteIcon /> 
                </IconButton>
            </CardActions>
        </Card>
       
    
)}


export default NoteCards