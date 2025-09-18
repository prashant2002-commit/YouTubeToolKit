import React from "react";

const StatsCard = ({value,label,icon}) => {
  return (
    <div
      className="bg-[rgba(45,55,72,0.5)] p-[25px] rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.1)] border-l-[4px] border border-[rgba(74,85,104,0.3)] transition-transform duration-300 
        hover:-translate-y-[5px] hover:bg-[rgba(45,55,72,0.7)] ease-in-out"
    >
      <div className="text-[2.2rem] font-bold text-[#e2e8f0] mb-[5px]">
        {value}
      </div>
      <div className="text-[#a0aec0] text-[14px] uppercase tracking-[1px]">
        {label}
      </div>
      <div className="text-[12px] mt-[8px] px-[8px] py-[4px] rounded-[20px] inline-block bg-[rgba(72,187,120,0.2)] text-[#68d391] border border-[rgba(72,187,120,0.3)]">
        {icon}
      </div>
    </div>
  );
};

export default StatsCard;
