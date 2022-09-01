import React, {useState} from 'react'
import './ToggleButton.css'
import Chats from '../Chats/Chats';
import Group from '../Group/Group';

const ToggleButton = () => {
  const [info, setInfo] = useState(<Chats />);
  const [active, setActive] = useState(true)

      function chatButton(){
        return(
      setInfo(<Chats />),
      setActive(false)
    )
  }

  function groupButton() {
    return (
      setInfo(<Group />),
      setActive(false)
    )
  }
 

  return (
    <div className='toggleButton'>
       <div className="toggle">
         <button className='t-btn chat-btn'
        style={{
          backgroundColor: active && 'rgb(56, 105, 56)',
          color: active && 'white'
          }} 
         onClick={chatButton}
         >Chats</button>
        <button className='t-btn' 
          onClick={groupButton}
          >Groups</button>
      </div>
      {info} 
    </div>
  )
}

export default ToggleButton;