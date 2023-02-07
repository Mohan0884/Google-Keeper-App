import React,{useState} from 'react'

function CreateArea(props) {
    const [note,setNote]=useState({
        title:"",
        content:""
    })
    function handleChange(event){
        const {name,value}=event.target;
        
            setNote((prevNote)=>{
                return {
                    ...prevNote,
                    [name]:value
                }
            })
        
        
    }
    function submitNote(event){
        props.onAdd(note);
        setNote(()=>{
            return {
                title:"",
                content:""
            }
        })
        event.preventDefault();

    }
    
  return (
    <div className="create-area">
        <form className="keep-form">
            <input className="input1" spellCheck="false" name="title" onChange={handleChange} value={note.title} placeholder='Take a note' type="text" />
            <div className="note-down">
                <textarea className="input2" spellCheck="false" name="content" onChange={handleChange} value={note.content} placeholder='Content goes here' type="textArea" />
                <button onClick={submitNote} className="keep-button">+</button>
            </div>
            
        </form>
        </div>
    
  )
}

export default CreateArea