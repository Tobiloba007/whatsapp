import React, { useState } from 'react'
import './Head.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SearchIcon from '@mui/icons-material/Search';
import Status from '../Status/Status';
import ToggleButton from '../ToggleButton/ToggleButton';

const Head = () => {
  const [search, setSearch] = useState()
  const handleClick = () => {
    setSearch( <input className='search'
      type="text" 
     placeholder='search anything' /> )
  }
  return (
  <div className='wrapper'>
    <div className='top'>
     <div className="h-left">
       <p><WhatsAppIcon style={{color: "green"}} /> WhatsApp</p>
       <SearchIcon  onClick={handleClick} />
     </div>
    </div>
    <div className='search-bar'>{search}</div>
    <Status />
    <ToggleButton />
    </div>
  )
  }


  export default Head;