import React from 'react'

const Container = (props) => {
  return (
    <div className="w-full mx-auto bg-[rgba(26,32,44,0.8)] rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden backdrop-blur-[10px] border border-[rgba(74,85,104,0.3)]">
        {props.children}
    </div>
  )
}

export default Container