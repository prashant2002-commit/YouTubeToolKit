import React, { useState } from 'react'
import HeaderTwo from '../components/HeaderTwo'

const TrendingVedios = () => {
  const [channelInput,setChannelInput] = useState('');
  const[loading,setLoading] = useState(false);

  return (
    <div>
        <HeaderTwo setChannelInput={setChannelInput} channelInput={channelInput} loading={loading} />
    </div>
  )
}

export default TrendingVedios