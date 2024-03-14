
import React,{Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router , Routes , Route , Link, useNavigate  } from 'react-router-dom';
import Login from './components/login/Login';
import Navbar from './components/NavBar/Navbar';
import { useLocation } from 'react-router-dom';
const ImageRenderer =lazy(()=>import('./components/imageRenderer/ImageRenderer'));
const About =lazy(()=>import('./components/pages/About'));
const Contact =lazy(()=>import('./components/pages/ContactUs'));
function App() {
  const [loaded,setLoaded] =useState(false)
  const [notLoggedIn,seNotLoggedin] =useState(false)
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate()
  const location = useLocation();
  const path = location.pathname;
  const token =localStorage.getItem('token');
  const authCheck =token?token.split(':')[1]:null;

  useEffect(()=>{
    if(token==null&&path !== '/login'){
      navigate('/login')
      seNotLoggedin(true)
    }
  },[path,token,navigate])
  useEffect(()=>{
    const fetching =async()=>{

      try{
        const data = await fetch('/api/getImages',);
      const jsonData =await data.json();
      setData(jsonData)
      setFilteredData(jsonData); 
      setLoaded(true)
      console.log(jsonData)
      }
      catch(error){
        console.log(error)
      }
      
    }
    fetching()
  },[])
  const handleSearch = (searchText) => {
    console.log('Search text:', searchText);
    const newData = data.filter((link) =>
      link.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(newData);
  };

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
    {path==='/login'?null:  <Navbar handleSearch={handleSearch} notLoggedIn={notLoggedIn}/>} 

    {/* //fix routes using outlets */}
      <Routes>
        <Route path="/getImages" exact element={<ImageRenderer data={filteredData} loaded={loaded} />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
