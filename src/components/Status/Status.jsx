import React from 'react'
import './Status.css'
import statusUpdate from '../../data' 
import AddIcon from '@mui/icons-material/Add';


const Status = () => {
   return (
       <div className='container'>
        <div className='con-top'>
            <p>Recent Status</p>
            <p>View all</p>
        </div>
        <div className='con-bottom'>
        <div>
        <div className='add-status'><AddIcon style={{margin: '23px 0px 0px 23px', color: 'green'}}/></div>
        <p className='status-name'>Add Status</p>
        </div>

      {statusUpdate.map((user, index) => {
        return (
            <div className='status-update'>
            <img className='status-img' key={index} id={user.id} src={user.img} alt="status update" />
            <p className='status-name'>{user.name}</p> 
            </div>
            
        )
      })}

       </div>
        </div>
    )
}


export default Status;

