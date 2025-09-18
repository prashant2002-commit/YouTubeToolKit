import React from 'react'
import InsightsCard from './InsightsCard'

const EngagementInsights = ({insights}) => {
  return (
    <div className='bg-[rgba(45,55,72,0.5)] rounded-[15px] p-[25px] mb-[30px] border border-[rgba(74,85,104,0.3)]'>
        <div className='flex justify-between items-center mb-[20px]'>
            <h3 className='text-[1.5rem] text-[#e2e8f0] font-semibold'>Engagement Insights</h3>
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5'>
            <InsightsCard value={insights.avgLikes} label='Avg Likes per Vedios'/>
            <InsightsCard value={insights.avgComments} label='Avg Comments per Vedios'/>
            <InsightsCard value={insights.engagementScore} label='Engagement Score'/>
            <InsightsCard value={insights.bestPerforming} label='Best Performing Vedio'/>
        </div>
    </div>
  )
}

export default EngagementInsights

