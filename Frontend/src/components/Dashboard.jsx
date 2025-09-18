import React from 'react'
import ChannelInfo from './ChannelInfo'
import StatsGrid from './StatsGrid'
import EngagementInsights from './EngagementInsights'
import VedioSection from './VedioSection'
import img from "../assets/watsimg.jpg"


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
        <VedioSection vedioData={{
            thumbnail: img,
            title: 'Title is here',
            views: '23.4K',
            likes: '6.5K',
            engagement: '4.5',
            url: 'https://www.youtube.com/watch?v=eILUmCJhl64&t=21903s'
        }}/>
    </div>
  )
}

export default Dashboard