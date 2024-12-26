import React from 'react'
import Feedback from './Feedback'
import RecentWork from './RecentWork'
import Clients from './Clients'

const Work = () => {
  return (
    <div id='work' className=''>
      <RecentWork />
      <Feedback />
      <Clients />
      
    </div>
  )
}

export default Work