import React from 'react'

const Loading = () => {
  return <>
    <div className="text-center p-10 text-[#667eea] text-lg" >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke="white"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          Fetching channel analytics...
        </div>
      </div>
  </>
}

export default Loading;