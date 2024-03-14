import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../molecules/SearchBar';
import InputBox from '../atoms/inputs/InputBox';

const Navbar = ({ handleSearch, hideSearchBar }) => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  let searchTimeout;

  const debouncedSearch = (value) => {
    clearTimeout(searchTimeout); 
    if (value.length >= 3) { 
      searchTimeout = setTimeout(() => {
        handleSearch(value);
      }, 300); 
    }
  };

  const handleChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    debouncedSearch(text);
  };

  let onClickCross = () => {
    setSearchText('');
  };

  return (
    <div>
      <nav>
        <span className='logo' onClick={scrollToTop}><i>Image Bucket</i></span>
        <ul>
          <li>
            <InputBox
              type="text"
              id="search-bar"
              placeholder="Search"
              value={searchText}
              onChange={handleChange}
              className={`outline-none border-0 focus:outline-none focus:border-0`}
              isSearchBar={true}
              crossButtonRequired={true}
              onClickCross={onClickCross}
            />
          </li>
          <li><Link to={'/getImages'} className='links'>Home</Link></li>
          <li><Link to={'/about'} className='links'>About</Link></li>
          <li><Link to={'/contact'} className='links'>Contact Us</Link></li>
          <li><button onClick={handleLogout} className='logoutbutton'>Logout</button></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
