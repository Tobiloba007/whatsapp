import React from 'react'
import './Navbar.css'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {BrowserRouter as Router,
        Routes,
        Route,
        NavLink} from "react-router-dom";
import Calls from '../Calls/Calls';
import Settings from '../Settings/Setings';
import Group from '../Group/Group';
import Chats from '../Chats/Chats';
import Head from '../Head/Head';
import Status from '../Status/Status';
import Contacts from '../Contacts/Contacts';

const Navbar = () => {
 
  return (
    <Router>
    <div className='navbar'>
    <div className='nav-container'>
    <NavLink exact to="/"
     className='icon'
      style={({ isActive }) => isActive? {color: 'rgb(56, 105, 56)'}: {color: 'rgb(177, 170, 170)'}}>
       <ForumOutlinedIcon /> </NavLink> 
    <NavLink to="/Calls" 
    className='icon'
    style={({ isActive }) => isActive? {color: 'rgb(56, 105, 56)'}: {color: 'rgb(177, 170, 170)'}}> 
    <CallOutlinedIcon /> </NavLink> 
    <NavLink to="/Contacts"
     className='icon'
     style={({ isActive }) => isActive? {color: 'rgb(56, 105, 56)'}: {color: 'rgb(177, 170, 170)'}}> 
     <PersonOutlinedIcon /> </NavLink> 
    <NavLink to="/Settings"
     className='icon'
     style={({ isActive }) => isActive? {color: 'rgb(56, 105, 56)'}: {color: 'rgb(177, 170, 170)'}}> 
     <SettingsOutlinedIcon /> </NavLink> 
    </div>
    </div>
    <Routes>
      <Route path='/'  element={<Head />} />
      <Route path='/Status'  element={<Status />} />
      <Route path='/Calls' element={<Calls />} />
      <Route path='/group' element={<Group />} />
      <Route path='/Settings' element={<Settings />} />
      <Route path='/Chats' element={<Chats />} />
      <Route path='/Contacts' element={<Contacts />} />
    </Routes>
    </Router>
  )
}

export default Navbar