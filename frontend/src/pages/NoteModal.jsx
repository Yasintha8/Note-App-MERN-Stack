import React, { useState } from 'react'

const NoteModal = ({closeModal, addNote}) => {
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');

    const handleSubmit =async (e) => {
        e.preventDefault()
        addNote(title, description)
      };
  return (
    <div className="fixed inset-0 bg-gray-800/75 flex justify-center items-center">
        <div className='bg-white p-8 rounded'>
            <h2 className='text-xl font-bold mb-4'>Add New Note</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder='Note Title'
                className='border border-gray-300 p-2 w-full mb-4 '
                />
                <textarea
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    placeholder='Note Description'
                    className='border border-gray-300 p-2 w-full mb-4 '
                />
                <button 
                    type='submit'
                    className='bg-blue-500 text-white px-4 py-2 rounded cursor-pointer'>
                    Add Note
                </button>
            </form>
            <button className='mt-4 text-red-500 rounded cursor-pointer' onClick={closeModal}>
                    Cancel
            </button>
        </div>
    </div>
  )
}

export default NoteModal