import React, {useState} from 'react'
import CallList from './CallList';
import './Calls.css'
import MissedList from './MissedList';
import PhoneIcon from '@mui/icons-material/Phone';

const Calls = () => {
    const [info, setInfo] = useState(<CallList />);
    const [active, setActive] = useState(true);

  const callsButton = () => {
    return(
        setInfo(<CallList />),
        setActive(false)
    )
  }
  function missedButton() {
    return (
      setInfo(MissedList),
      setActive(false)
    )
  }
 

  return (
    <div className='calls'>
    <div className='call-head'>
    <PhoneIcon style={{color: 'rgb(56, 105, 56)'}} />
    <h3 className='call-heading'>Calls</h3>
    </div>
       <div className='fade'>
      <div className="toggle">
        <button className='t-btn'
         style={{
          backgroundColor: active && 'rgb(56, 105, 56)',
          color: active && 'white'
          }} 
         onClick={callsButton}
         >All Calls</button>

        <button className='t-btn' 
          onClick={missedButton}
          >Missed</button>
      </div>

            {info}

       </div>
    </div>
  )
}

export default Calls