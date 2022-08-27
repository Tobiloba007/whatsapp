import React, { useState } from 'react'
import './Head.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SearchIcon from '@mui/icons-material/Search';

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
    </div>
  )
  }


  export default Head;