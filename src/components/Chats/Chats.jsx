import React from 'react'
import './Chats.css'
import messages from '../../messageData'
import Status from '../Status/Status'
import Head from '../Head/Head'
// import ToggleButton from '../ToggleButton/ToggleButton'


const Chats = () => {

  return (
    <div>
    <Head />
    <Status />  
    {/* <ToggleButton /> */}

      {messages.map((chat) => {
        return (
            
            <div className="bottom">
         <div>
           <img className='chat-img' src={chat.img} alt=''/>
         </div>
         <div className='chat-name'>
           <h4>{chat.name}</h4>
           <p className='message'>{chat.message}</p>
         </div>
         <div>
          <p className='recentTime'>{chat.recentTime}</p>
          <p className='oldTime'>{chat.oldTime}</p>
         </div>
         </div>
        )
      })}
      <hr />
      </div>
  )
}

export default Chats