import React,{useState} from 'react';
import Notes from './Notes';
import CreateArea from './CreateArea';
import Footer from './Footer';

export default function Home(){
    const [notes,setNotes]=useState([]);
  function addNote(newNote){
    if(newNote.title===""){
      alert("Empty note cannot be added");
    }else{
      setNotes(prevnotes=>{
        return  [...prevnotes,newNote];
       });
    }
    
  }
  function deleteNote(id){
    setNotes(prevNotes=>{
    
    return (  prevNotes.filter((noteItem,index)=>{
        return index!==id;
      }))
    })
  }
    return (
        <div className="App">
      
      <CreateArea onAdd={addNote}/>
      <div className="notes">
        {notes.map((noteItem,index)=>{
            return (
              <Notes key={index} id={index}  title={noteItem.title} onDelete={deleteNote} content={noteItem.content}/>
            )
        })}
      </div>
      <Footer />
    </div>
    )
}