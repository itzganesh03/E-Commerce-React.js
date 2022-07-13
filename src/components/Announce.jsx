import { Close } from '@material-ui/icons'
import React, { useState } from 'react'

function Announce() {

const[announceStyle, setAnnounceStyle] = useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center')

  const handleclose = ()=> {
    setAnnounceStyle(announceStyle + " hidden")
  }
  return (
    <div className={announceStyle}>
        <h2> Announcement</h2>
        <Close className='cursor-pointer' onClick={handleclose}/>
    </div>
  )
}

export default Announce