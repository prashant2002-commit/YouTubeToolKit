import React from "react";
import avatar_img from '../assets/watsimg.jpg'

const ChannelInfo = ({avatar, name, description}) => {
  return (
    <div className="flex items-center gap-[20px] mb-[30px] p-[20px] bg-[rgba(45,55,72,0.5)] rounded-[15px] border border-[rgba(74,85,104,0.3)]">
      <img
        className="w-[80px] h-[80px] rounded-full object-cover border-2 border-[rgba(74,85,104,0.5)]"
        src={avatar || avatar_img}
        alt="Channel Avatar"
      />
      <div class="channel-details">
        <h2 className="text-[1.8rem] text-[#e2e8f0] mb-[5px]">{name || 'Channel Name'}</h2>
        <p className="text-[#a0aec0] text-[14px]">
            {description || 'Channel description will appear here'}
        </p>
      </div>
    </div>
  );
};

export default ChannelInfo;
