import React from 'react'
import './CallList.css'
import callsData from '../../callsData'

const CallList = () => {
  return (
    <div>
     {callsData.map((calls) => {
            return(
                <div className='call-bottom'>
        <div>
            <img className='call-img' src={calls.img} alt="Kwesi arthur" />
         </div>
         <div className="call-name">
            <h4 className='name'>{calls.name}</h4>
            <p className='description'>{calls.icon}{calls.desc}</p>
         </div>
         <div>
         <p className="time">{calls.time}</p>
         <p></p>
         </div>
       </div>
            )
        })}
    </div>
  )
}

export default CallList