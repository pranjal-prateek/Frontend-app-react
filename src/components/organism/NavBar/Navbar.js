// backspace key press remove 
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { aboutRoute, contactRoute, homeRoute, loginRoute } from '../../../constants/constants';
import { useSearch } from '../../../context/SearchContext';
import { about, contact, home } from '../../../strings/string';
import { removeToken, scrollToTop } from '../../../utils/utils';
import Toast from '../../atoms/Taost';
import InputBox from '../../atoms/inputs/InputBox';
import Modal from '../Modal';
import './Nav.css';
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
  const LogOutModal =()=>{
    return(
      <div>
        <p className='text-gray-400'>Are you sure you want to logout ?</p>
      </div>
    )
  }
  const handleOnKeyDown =(e)=>{
    if (e.keyCode === 8) {
      setSearch("")
  }
  }
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
              onKeyDown={(e)=>handleOnKeyDown(e)}
            />
          </li>
          <li><Link to={homeRoute} className='links'>{home}</Link></li>
          <li><Link to={aboutRoute} className='links'>{about}</Link></li>
          <li><Link to={contactRoute} className='links'>{contact}</Link></li>
          <li> <Modal buttonText={"Logout"} modalHeading={"Leaving Soon !!"} SubmitText={"Yes"} closeText={"No I don't"} onClickSubmit={handleLogout}>
        <LogOutModal />
      </Modal></li>
        </ul>
      </nav>
      {!isOnline ? <Toast text={"OOPS!! You are offline"} />:<Toast text={"Great!! Back Online Again"} color={"bg-green-600"}/>} 
    </div>
  );
};

export default Navbar;
