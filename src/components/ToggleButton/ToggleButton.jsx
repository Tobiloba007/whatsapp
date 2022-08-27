import React, {useState} from 'react'
import './ToggleButton.css'
import Chats from '../Chats/Chats'
import Group from '../Group/Group'

const ToggleButton = () => {
  const [info, setInfo] = useState(<Chats />);
  const [active, setActive] = useState(false)

  const chatButton = () => {
    return(
      setInfo(<Chats />),
      setActive(true)
    )
  }
  function groupButton() {
    return (
      setInfo(<Group />),
      setActive(true)
    )
  }
 

  return (
    <div className='toggleButton'>
      <div className="toggle">
        <button className='t-btn'
        style={{
          backgroundColor: !active ? 'green': '',
          color: !active ? 'white': 'black'
          }} 
         onClick={chatButton}
         >Chats</button>
        <button className='t-btn' 
        style={{
          backgroundColor: !active ? 'white': 'green',
          color: !active ? 'black': 'white'
          }} 
          onClick={groupButton}
          >Groups</button>
      </div>
      {info}
    </div>
  )
}

export default ToggleButton