// backspace key press remove 
import React, { useEffect, useReducer, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import InputBox from '../../atoms/inputs/InputBox';
import { scrollToTop,removeToken } from '../../../utils/utils';
import Buttons from '../../atoms/buttons/Buttons';
import { initialValue, reducer } from '../../../store/reducer';
import { useSearch } from '../../../context/SearchContext';
import { aboutRoute, contactRoute, homeRoute, loginRoute } from '../../../constants/constants';
import { about, contact, home, login, logout } from '../../../strings/string';
import Toast from '../../atoms/Taost';
const Navbar = ({isOnline}) => {
  const { searchText, setSearch } = useSearch();
  const [showPopUp,setShowPopUp] =useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setShowPopUp(!showPopUp)
    },2000)
  },[isOnline])
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken('token')
    navigate(loginRoute);
  };

 const handleSearchChange = (e) => {
  setSearch(e.target.value);
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
              onChange={(e) => handleSearchChange(e)}
              className={`outline-none border-0 focus:outline-none focus:border-0`}
              isSearchBar={true}
              crossButtonRequired={true}
              onClickCross={() => setSearch("")}
            />
          </li>
          <li><Link to={homeRoute} className='links'>{home}</Link></li>
          <li><Link to={aboutRoute} className='links'>{about}</Link></li>
          <li><Link to={contactRoute} className='links'>{contact}</Link></li>
          <li><Buttons onClick={handleLogout} text={logout} /></li>
        </ul>
      </nav>
      {!isOnline ? <Toast text={"OOPS!! You are offline"} />:<Toast text={"Greate!! Back Online Again"} color={"bg-green-600"}/>} 
    </div>
  );
};

export default Navbar;
