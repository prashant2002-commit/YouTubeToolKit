import React from 'react'
import ChannelInfo from './ChannelInfo'
import StatsGrid from './StatsGrid'

const Dashboard = () => {
  return (
    <div className='p-[30px] '>
        <ChannelInfo/>
        <StatsGrid stats={{
            subscriber: '123M',
            view: '1.32k',
            vedios: 123,
            engagement: '1.3%'
        }}/>
    </div>
  )
}

export default Dashboard