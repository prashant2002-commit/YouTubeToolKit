import React from 'react'
import VedioCard from './VedioCard'

const VedioSection = ({vedioData}) => {
  return (
    <div className='mt-[30px]'>
        <h3 className='text-[1.5rem] text-[#e2e8f0] mb-[20px] pb-[10px] border-b-2 border-[rgba(74,85,104,0.3)]'>
            Recent Vedios Performance
        </h3>
        <div className='grid grid-cols-[repeat(auto-fill,_minmax(300px,1fr))] gap-[20px]'>
            <VedioCard thumbnail={vedioData.thumbnail}
            title={vedioData.title}
            likes={vedioData.likes}
            views={vedioData.views}
            engagement={vedioData.engagement}
            url={vedioData.url}/>
            
        </div>
    </div>
  )
}

export default VedioSection

