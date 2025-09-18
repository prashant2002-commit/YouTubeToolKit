import React from 'react'

const InsightsCard = ({value,label}) => {
  return (
    <div className='bg-[rgba(26,32,44,0.8)] p-5 rounded-[12px] text-center border border-[rgba(74,85,104,0.3)]'>
        <div className="text-[1.8rem] font-bold text-[#e2e8f0] mb-2">{value}</div>
        <div className="text-[14px] text-[#a0aec0]">{label}</div>
    </div>
  )
}

export default InsightsCard