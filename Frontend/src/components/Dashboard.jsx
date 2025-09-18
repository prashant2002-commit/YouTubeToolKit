import React from 'react'
import ChannelInfo from './ChannelInfo'
import StatsGrid from './StatsGrid'
import EngagementInsights from './EngagementInsights'

const Dashboard = () => {
  return (
    <div className='p-[30px] '>
        <ChannelInfo/>
        <StatsGrid stats={{
            subscriber: '123M',
            view: '1.32k',
            vedios: 123,
            engagement: 1.3 + '%'
        }}/>
        <EngagementInsights insights={{
            avgLikes: '28.9k',
            avgComments: '1.6k',
            engagementScore: '3.0%',
            bestPerforming: "4.1%"
        }}/>
    </div>
  )
}

export default Dashboard