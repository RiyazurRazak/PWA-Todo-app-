import React,{useState , useEffect} from "react"
import './Notes.css'
import NoteCard from './NoteCard'
import db from "../firebase/firebase";




 const Notes = ({mobile})=>{

   
    const [notes , setNotes]= useState([])

    useEffect(()=>{
        db.collection("todo-db").doc('aEYKqo23GSeTmylhjSRb').collection("notes-collection").onSnapshot((snapshot)=>
            setNotes(snapshot.docs.map((doc)=> { return ([doc.data(), doc.id])}))
        )
     }, [])
    
    console.log(notes)

    return(
    <div className="notes">
        <div className="notes__header">
            <p>Notes</p>
        </div>
        <div className="notes__body">

            {mobile ? notes.slice(0,3).map((note , index) =>{

                 return(
                    <NoteCard 
                    key={index}
                    id={note[1]}
                    title={note[0].Title}
                    content={note[0].Content}
                    color={note[0].bgColor}
                    />
                )
            })
            
            
            
            
            :notes.map((note , index) =>{
                return(
                    <NoteCard 
                    key={index}
                    id={note[1]}
                    title={note[0].Title}
                    content={note[0].Content}
                    color={note[0].bgColor}
                    />
                )
            })}
           
         
        </div>
    </div>
)}


export default Notes