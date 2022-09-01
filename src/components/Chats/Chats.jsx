import React from 'react'
import './Chats.css'
import messages from '../../messageData' 

const Chats = () => {

  return (
    <div>
    
      {messages.map((chat) => {
        return (
            <div>
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
          <p className='index'>{chat.index}</p>
          <p className='oldTime'>{chat.oldTime}</p>
         </div>
         </div>
         <hr className='line' />
         </div>
        )
      })}
      </div>
  )
}

export default Chats