import React from 'react'
import './Group.css'
import groupData from '../../groupData'

const Group = () => {

  return (
      <div>
       {/* <div className="toggle">
        <button className='t-btn'>Chats</button>
        <button className='t-btn group-btn'>Groups</button>
      </div>    */}
  
      {groupData.map((group) => {
        return (
            <div className="bottom">
         <div>
           <img className='chat-img' src={group.img} alt=''/>
         </div>
         <div className='chat-name'>
           <h4>{group.name}</h4>
           <p className='message'>{group.message}</p>
         </div>
         <div>
          <p className='recentTime'>{group.recentTime}</p>
          <p className='oldTime'>{group.oldTime}</p>
         </div>
         <hr />
         </div>
        )
      })}
    </div>
  )
}

export default Group