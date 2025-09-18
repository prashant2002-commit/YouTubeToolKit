import React from 'react'

const VedioCard = ({thumbnail,views,likes,title,engagement,url}) => {
  return (
    <div className="bg-[rgba(45,55,72,0.5)] rounded-[15px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] 
    transition-transform duration-300 ease-in-out border border-[rgba(74,85,104,0.3)] hover:translate-y-[-5px] hover:bg-[rgba(45,55,72,0.7)]">
        <img
        src={thumbnail}
        alt='vedio thumbnail'
        className='w-full h-[180px] object-cover cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-90'
        />
        <div className='p-[15px]'>
            <div className='text-[14px] font-semibold text-[#e2e8f0] mb-[10px] leading-[1.4]'>{title}</div>
            <div className='flex justify-between text-[12px] text-[#a0aec0] flex-wrap gap-[8px]'>
                <span className='bg-[rgba(26,32,44,0.8)] px-[8px] py-[4px] rounded-[6px] border border-[rgba(74,85,104,0.3)]'>{views} views</span>
                <span className='bg-[rgba(26,32,44,0.8)] px-[8px] py-[4px] rounded-[6px] border border-[rgba(74,85,104,0.3)]'>{likes} likes</span>
                <span className='bg-[rgba(26,32,44,0.8)] px-[8px] py-[4px] rounded-[6px] border border-[rgba(74,85,104,0.3)]'>{engagement}% engagement</span>
            </div>
            <a 
            href={url}
            target=''
            className='block mb-12 w-full text-center bg-[rgba(102,126,234,0.2)] text-[#667eea] p-2 rounded-[6px] mt-[10px] text-[12px] font-semibold no-underline border border-[rgba(102,126,234,0.3)] transition-all duration-300 ease-in-out hover:bg-[#667eea] hover:text-white'>
                Watch Vedio
            </a>
        </div>

    </div>
  )
}

export default VedioCard