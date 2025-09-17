import React from 'react'

const Button = (loading) => {


  return (
    <>
        <button className="px-[30px] py-[15px] 
    bg-gradient-to-br from-[#667eea] to-[#764ba2]
    text-white 
    border-0 
    rounded-[10px] 
    text-[16px] 
    font-[600] 
    cursor-pointer 
    transition-all 
    duration-300
    hover:translate-y-[-2px]
    hover:shadow-[0_10px_20px_rgba(102,126,234,0.3)]
    disabled:opacity-60 
    disabled:cursor-not-allowed 
    disabled:transform-none"
    disabled={loading}
    >
            Analyze Channel
        </button>
    </>
  )
}

export default Button