import React, { useState } from "react"
import './Sidebar.css'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import DatePicker from './DatePicker'


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Checkbox from '@material-ui/core/Checkbox';
import DialogTitle from '@material-ui/core/DialogTitle';

import db from '../firebase/firebase'






 const Sidebar = ({mobile})=>{


    const Colors = {
        default:"#ffffff",
        black: "#212121",
        lightgreen:"#03B2A2",
        violet:"#8053AE",
        pink:"#ED5B8C"
    }


    const [color , setColor]= useState("default");
    const [open , setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [check , setCheck]= useState({notes:false,todo:false})
    const [selectedTime , setSelectedTime] = useState(new Date())
    console.log(selectedTime)

    console.log(check)

    console.log(color)

    function change(selectedDate){
      setSelectedTime(selectedDate)
    }

    const iconClicked = ()=> {
        setOpen(true)
    }
    const handleClose = ()=> {
        setOpen(false)
    }
    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(title , content , check)
      check.notes && db.collection("todo-db").doc('aEYKqo23GSeTmylhjSRb').collection("notes-collection").add({
          Title:title,
          Content: content,
          bgColor: color
        })

      check.todo && db.collection("todo-db").doc('ocs072JprWWOMpYwhoWW').collection("todo-collection").add({
          Title:title,
          Content: content,
          bgColor: color,
          time:selectedTime
        })  
        setOpen(false)
    }
    const handleCheckChange = (e)=>{
         setCheck({ ...check ,[e.target.name]:e.target.checked}) 
      
    }


    return(
       
    <div className="sidebar">
      {!mobile && <div className="sidebar__top">
           <IconButton size="small" onClick={()=>setColor("default")}>
           <div style={{backgroundColor: Colors["default"] }}  className = {`color-btn ${color === 'default' && 'color-btn-selected'}`}   />
           </IconButton >
           <IconButton size="small" onClick={()=>setColor("black")}>
           <div style={{backgroundColor: Colors["black"]  }}  className = {`color-btn ${color === 'black' && 'color-btn-selected'}`} />
           </IconButton>
           <IconButton size="small" onClick={()=>setColor("lightgreen")}>
           <div style={{backgroundColor: Colors["lightgreen"] }}   className = {`color-btn ${color === 'lightgreen' && 'color-btn-selected'}`} />
           </IconButton>
           <IconButton size="small" onClick={()=>setColor("pink")}>
           <div style={{backgroundColor: Colors["pink"] }}   className = {`color-btn ${color === 'pink' && 'color-btn-selected'}`}  />
           </IconButton>
        
       </div>}

       <div className="sidebar__bottom">
           <Fab size="small" onClick={iconClicked}>
               <AddIcon />
           </Fab>
       </div>



       <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter the Details</DialogTitle>
        <form onSubmit={handleSubmit}>
        <DialogContent>

          <Checkbox 
          checked={check.notes}
          onChange={handleCheckChange}
          name="notes"
          />Notes

          <Checkbox 
          checked={check.todo}
          onChange={handleCheckChange}
          name="todo"
          />Todo-List
          <br />

          {check.todo && <DatePicker change={change}/>}

          {mobile && <div>
            <p className="dialog__color_selector">BackgroundColor</p> 
           <IconButton size="small" onClick={()=>setColor("default")}>
           <div style={{backgroundColor: Colors["default"] }}  className = {`color-btn ${color === 'default' && 'color-btn-selected'}`}   />
           </IconButton >
           <IconButton size="small" onClick={()=>setColor("black")}>
           <div style={{backgroundColor: Colors["black"]  }}  className = {`color-btn ${color === 'black' && 'color-btn-selected'}`} />
           </IconButton>
           <IconButton size="small" onClick={()=>setColor("lightgreen")}>
           <div style={{backgroundColor: Colors["lightgreen"] }}   className = {`color-btn ${color === 'lightgreen' && 'color-btn-selected'}`} />
           </IconButton>
           <IconButton size="small" onClick={()=>setColor("pink")}>
           <div style={{backgroundColor: Colors["pink"] }}   className = {`color-btn ${color === 'pink' && 'color-btn-selected'}`}  />
           </IconButton>
        
       </div>}
         
          <TextField
            margin="dense"
            id="title"
            label="Title"
            type="text"
            value={title}
            fullWidth
            onChange={(e)=>setTitle(e.target.value)}
          />

           <TextField
            margin="dense"
            id="content"
            label="Content"
            type="text"
            multiline
            rows={4}
            fullWidth
            value={content}
            onChange={(e)=>setContent(e.target.value)}
          />
         
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type={"submit"}  color="primary">
            Submit
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  

   
)}


export default Sidebar