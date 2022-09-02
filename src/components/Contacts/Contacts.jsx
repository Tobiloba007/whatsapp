import React from 'react'
import './Contacts.css'
import NoAccountsOutlinedIcon from '@mui/icons-material/NoAccountsOutlined'

const Contacts = () => {
  return (
    <div className='contacts'>
        <NoAccountsOutlinedIcon style={{height: '100px', width: '100px', marginTop: '200px', marginLeft: '160px', color: 'red'}}/>
        <p className='con-text'>There are no contacts at this time.</p>
    </div>
  )
}

export default Contacts