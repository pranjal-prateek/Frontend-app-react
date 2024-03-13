import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = ({handleSearch,hideSearchBar}) => {
  const [searchText, setSearchText] = useState('');

  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
    const handleLogout=()=>{
        localStorage.removeItem('token')
        navigate('/login');
    }
    const handleChange = (e) => {
      const text = e.target.value;
      setSearchText(text);
      console.log('Search text:', text);
      handleSearch(text); 
    };
   
  return (
    <div>
      
    <nav>
        <span className='logo' onClick={scrollToTop}><i>Image Bucket</i></span>
        <ul >
        <li>
          <input 
            type="text" 
            placeholder="Search..." 
            className='search-input'
            value={searchText} 
            onChange={handleChange} 
          />
        </li>
            <li><Link to={'/getImages'} className='links'>Home</Link></li>
            <li><Link to={'/about'} className='links'>About</Link></li>
            <li><Link to={'/contact'} className='links'>Contact Us</Link></li>
           
            <li><button onClick={handleLogout} className='logoutbutton'>Logout</button></li>
        </ul>
    </nav>
    </div>
      
  )
}

export default Navbar
