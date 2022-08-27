import React, {useState} from 'react'
import CallList from './CallList';
import './Calls.css'
import MissedList from './MissedList';
import PhoneIcon from '@mui/icons-material/Phone';

const Calls = () => {
    const [info, setInfo] = useState(<CallList />);
  const [active, setActive] = useState(false)

  const callsButton = () => {
    return(
        setInfo(<CallList />),
      setActive(true)
    )
  }
  function missedButton() {
    return (
      setInfo(MissedList),
      setActive(true)
    )
  }
 

  return (
    <div className='calls'>
    <div className='call-head'>
    <PhoneIcon />
    <h3 className='call-heading'>Calls</h3>
    </div>
       <div className='fade'>
      <div className="toggle">
        <button className='t-btn'
        style={{
          backgroundColor: !active ? 'green': ' rgba(210, 214, 218, 0.164)',
          color: !active ? 'white': 'black'
          }} 
         onClick={callsButton}
         >All Calls</button>

        <button className='t-btn' 
        style={{
          backgroundColor: !active ? ' rgba(210, 214, 218, 0.164)': 'green',
          color: !active ? 'black': 'white'
          }} 
          onClick={missedButton}
          >Missed</button>
      </div>

            {info}

       </div>
    </div>
  )
}

export default Calls