import React from 'react'

const Header = () => {
  return <>
    <div className="bg-[linear-gradient(35deg,#2d3748_0%,#4a5568_100%)] text-white p-[30px] text-center border-b border-[rgba(74,85,104,0.5)]">
      <h1 className='text-[2.5rem] mb-[10px] font-bold text-white'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M12 2v10h10c0-5.5-4.5-10-10-10zM2 12c0 5.5 4.5 10 10 10v-10H2zm12 0v10c5.5 0 10-4.5 10-10h-10z" />
        </svg>
        YouTube Channel Stats
      </h1>
      <p className='text-[1.1rem] opacity-90 text-slate-300'>Get comprehensive analytics for any YouTube channel</p>
    </div>
  </>
}

export default Header