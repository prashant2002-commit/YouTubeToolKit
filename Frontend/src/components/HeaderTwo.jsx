import React from 'react'
import Button from './Button'

const HeaderTwo = ({channelInput,setChannelInput,loading}) => {
  return (
    <header className="w-full mx-0 bg-[linear-gradient(35deg,#2d3748_0%,#4a5568_100%)] text-white p-[0px] border-b border-[rgba(74,85,104,0.5)] rounded-t-xl">
      <div className="flex items-center  max-w-[2000px] mx-auto relative translate-x-4">
        {/* Logo + Title */}
        <div className="flex items-center gap-1">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 27 27"
              >
                <path d="M11 21h-1l1-7H5l9-12h1l-1 7h6l-9 12z" />
              </svg>
          <h1 className="text-xl  font-semibold text-white">
            Trending Vedios <span className='font-normal'><sup>IN</sup></span>
          </h1>
        </div>

        {/* Search Section */}
        <div className="flex flex-1 justify-center m-[10px] relative -translate-x-22">
            <div className="flex gap-[10px] w-full max-w-[600px]">
            <input
              className="flex-1 px-[14px] py-[10px] border border-[rgba(74,85,104,0.5)] 
              rounded-[8px] text-sm transition-all duration-300 ease-in-out 
              bg-[rgba(26,32,44,0.8)] text-[#e2e8f0] focus:outline-none
              focus:border-[#667eea]
              focus:shadow-[0_0_0_3px_rgba(102,126,234,0.2)]
              focus:bg-[rgba(26,32,44,0.9)]
              placeholder:text-[#a0aec0]"
              type="text"
              value={channelInput}
              onChange={(e) => setChannelInput(e.target.value)}
              placeholder="Search YouTube channel..."
              required
            />
            <Button loading={loading}  channelInput={channelInput} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderTwo