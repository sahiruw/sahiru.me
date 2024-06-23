import React from 'react'
import Feedback from './Feedback'
import RecentWork from './RecentWork'
import Clients from './Clients'
import Projects from '../ProjectPage'

const Work = () => {
  return (
    <div id='work' className='mt-20'>
      <RecentWork />
      <Feedback />
      <Clients />
      
    </div>
  )
}

export default Work