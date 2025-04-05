import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import NoteModal from './NoteModal';
import axios from 'axios';

const Home = () => {
  const[isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  }
    
  const addNote = async (title, description)=>{
    try{
      const response = await axios.post(
        "http://localhost:5000/api/note/add",
        {title, description}
      );
        if(response.data.success){
            closeModal();
        }
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />

      <button 
      onClick={() => setIsModalOpen(true)}
      className='fixed bottom-4 right-4 text-2xl bg-teal-500 text-white font-bold p-4 rounded-full'>
        +
      </button>
        {isModalOpen && <NoteModal
        closeModal={closeModal}
        addNote={addNote}/>}
    </div>
  )
}

export default Home