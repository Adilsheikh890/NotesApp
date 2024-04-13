"use client"

import React from 'react'
import { MdDelete } from "react-icons/md";
import { useState } from 'react';
import Header from "././Header";



 function App() {
    const [note, setNotes] = useState([]);
    const [State, setState] = useState({
    title : "",
    description : "",
    id : Math.random ()*10,

    });
    const handleDelete = (id) => {
      console.log(id)
      const LeftNotes = note.filter(note => note.id !== id);
      setNotes(LeftNotes)
    };

    const handleChange =(e) =>{
        setState({... State,[e.target.name]: e.target.value  });
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
       //console.log(State)
       setNotes([... note, State]);
       setState({
         title:"",
         note:"",
       })
    };
  return (
    

    <div className='  bg-teal-800 h-svh'>
    <Header/>
       <h1 className='text-5xl p-5 pl-10 font-extrabold'>NOTES</h1>
       <div className='create-note md:pl-8 md:w-[700px] text-center  justify-items-center '>
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <input type='text' placeholder='Title'  name='title' onChange={handleChange} value={State.title} required className=' border-2 pl-3 rounded-xl border-blue-300 p-2 '/>

            <textarea name='note' cols='30' rows='10' placeholder='Description' onChange={handleChange} value={State.note} required  className='border-2 rounded-xl mt-2 border-blue-200  '></textarea>
            <button type='submit' className=' hover:bg-red-800 px-5 py-3  text-white rounded-xl bg-orange-700 mt-4 '>Save Note</button>
        </form>
       </div>

       {/**second part */}

       <div className='notes-container  border-t-2 py-5 bg-teal-800 w-full  px-5 mt-10 flex flex-wrap'>
        
           { note.length >  0 ?   note.map((note,i) => {
                    return(
                        <div className='note bg-yellow-200 mr-5 mt-5 w-[300px] p-4  rounded-xl py-10  relative' key={i}> 
                        <button className='delete-note absolute right-2 top-0 pt-5 text-red-800' onClick={()=>handleDelete(note.id)}>< MdDelete size={25}/></button>
                  
                    
          <h3 className='text-black font-bold underline '>{note.title}</h3>
          <p className='text-black font-medium'>{note.note}</p>
          </div>
          
            );

                    
                    }): 
                    <p className=' font-medium'>Notes Not Avalible</p>}
        </div>
    

       </div>











    
  );
}
export default App;