import React from 'react'
import './Navbar.css'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {BrowserRouter as Router,
        Routes,
        Route,
        Link} from "react-router-dom"
import Chats from '../Chats/Chats';
import Calls from '../Calls/Calls';
import Settings from '../Settings/Setings';

const Navbar = () => {
  return (
    <Router>
    <div className='navbar'>
    <div className='nav-container'>
    <Link to="/"> <ForumOutlinedIcon className='button' /> </Link> 
    <Link to="/calls"> <CallOutlinedIcon className='button' /> </Link> 
    <Link to="/Contacts"> <PersonOutlinedIcon className='button' /> </Link> 
    <Link to="/Settings"> <SettingsOutlinedIcon className='button' /> </Link> 
    </div>
    </div>
    <Routes>
      <Route path='/' element={<Chats />} />
      <Route path='/Calls' element={<Calls />} />
      <Route path='/Settings' element={<Settings />} />
    </Routes>
    </Router>
  )
}

export default Navbar