import Button from "./Button";

const SearchSection = ({channelInput, setChannelInput}) => {

    
  return (
    <>
      <div className="px-[30px] py-[30px] bg-[rgba(45,55,72,0.5)] border-b border-[rgba(74,85,104,0.3)]">
        <div className="flex gap-[15px] max-w-[600px] mx-auto">
          <input
            className="flex-1 px-[20px] py-[15px] border border-[rgba(74,85,104,0.5)] 
            rounded-[10px] text-[16px] transition-all duration-300 ease-in-out 
            bg-[rgba(26,32,44,0.8)] text-[#e2e8f0] focus:outline-none
            focus:border-[#667eea]
            focus:shadow-[0_0_0_3px_rgba(102,126,234,0.2)]
            focus:bg-[rgba(26,32,44,0.9)]
            placeholder:text-[#a0aec0] "
            type="text"
            value={channelInput}
            onChange={(e) => {
                setChannelInput(e.target.value);
            }}
            placeholder="Enter YouTube channel URL, @handle, or channel ID"
            required
          />
          <Button channelInput={channelInput}/>
        </div>
        <div className="mt-4 text-center text-gray-400 text-sm">
          Supports: youtube.com/@channelname, @handle, or channel ID (UC...)
        </div>
      </div>
    </>
  );
};

export default SearchSection;
