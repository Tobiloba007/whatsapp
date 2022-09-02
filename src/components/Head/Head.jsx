import React, { useState } from 'react'
import './Head.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SearchIcon from '@mui/icons-material/Search';
import Status from '../Status/Status';
import ToggleButton from '../ToggleButton/ToggleButton';
import { Input, InputAdornment } from '@mui/material';

const Head = () => {
  const [search, setSearch] = useState(false)

    const handleClick = event => {
    // 👇️ toggle shown state
    setSearch(current => !current);
    };

  return (
  <div className='wrapper'>
    <div className='top'>
     <div className="h-left">
       <p><WhatsAppIcon style={{color: "green"}} /> WhatsApp</p>
       <SearchIcon  onClick={handleClick} />
     </div>
    </div>
    <div className='search-bar'>{search ? (<Input
      className='search'
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon style={{color: 'rgb(56, 105, 56)'}} />
        </InputAdornment>
      }
      placeholder='search anything'
/>): null}

   </div>
    <Status />
    <ToggleButton />
    </div>
  )
  }


  export default Head;