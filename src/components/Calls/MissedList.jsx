import React from 'react'
import './MissedList.css'
import missedData from '../../missedData'

const MissedList = () => {
  return (
    <div>
        {missedData.map((missed) => {
            return(
              <div className="missed-wrapper">
                <div className='missed-bottom'>
        <div>
            <img className='missed-img' src={missed.img} alt="Kwesi arthur" />
         </div>
         <div className="missed-name">
            <h4 className='name '>{missed.name}</h4>
            <p className='miss-desc'>{missed.icon}{missed.desc}</p>
         </div>
         <p className="time">{missed.time}</p>
       </div>
       </div>
            )
        })}
    </div>
  )
}

export default MissedList