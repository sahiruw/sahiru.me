import React from 'react'
import Feedback from './Feedback'
import RecentWork from './RecentWork'
import Clients from './Clients'

const Work = () => {
  return (
    <div id='work' className='bg-gradient-to-b to-[#0A1020] from-neutral-800  pb-40'>
      <RecentWork />
      {/* <Feedback /> */}
      <Clients />
      
    </div>
  )
}

export default Work