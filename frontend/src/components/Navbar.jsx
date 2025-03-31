import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '../context/ContextProvider';

const Navbar = () => {
    const {user} = useAuth()
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='bg-gray-800 p-4 text-white flex justify-between items-center'>
            {/* Logo */}
            <div className='text-xl font-bold'>
                <Link to="/">NoteApp</Link>
            </div>

            {/* Search Input - Hidden on small screens */}
            <input 
                type="text"
                placeholder="Search notes..."
                className='bg-gray-600 px-4 py-2 rounded hidden md:block'
            />

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center'>
                {!user ?(
                    <>
                    <Link to="/login" className='bg-blue-500 px-4 py-2 rounded mr-4'>
                    Login
                </Link>
                <Link to="/register" className='bg-green-500 px-4 py-2 rounded mr-4'>
                    Signup
                </Link></>
                ) :(
                <>
                <span className='mr-4'>{user.name}</span>
                <button className='bg-red-500 px-4 py-2 rounded'>
                    Logout
                </button>
                </>
                )}
            </div>

            {/* Mobile Menu Button */}
            <button 
                className='md:hidden focus:outline-none' 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='absolute top-16 left-0 w-full bg-gray-800 text-center flex flex-col items-center py-4 space-y-4 md:hidden'>
                    <input 
                        type="text"
                        placeholder="Search notes..."
                        className='bg-gray-600 px-4 py-2 rounded w-3/4'
                    />
                    <Link to="/login" className='bg-blue-500 px-4 py-2 rounded w-3/4'>
                        Login
                    </Link>
                    <Link to="/register" className='bg-green-500 px-4 py-2 rounded w-3/4'>
                        Signup
                    </Link>
                    <button className='bg-red-500 px-4 py-2 rounded w-3/4'>
                        Logout
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
