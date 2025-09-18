import React, { useState } from 'react';
import '../index.css'
import Container from '../components/Container';
import Header from '../components/Header';
import SearchSection from '../components/SearchSection';
import Loading from '../components/Loading';
import Dashboard from '../components/Dashboard';


function StatsFinder() {

  const [channelInput, setChannelInput] = useState("");
  const[loading, setLoading] = useState(false);
  const[error,setError] = useState('')

  return <>
    <Container>
      <Header/>
      <SearchSection channelInput={channelInput} 
      setChannelInput={setChannelInput}
      loading={loading}/>
      {loading && <Loading/>}
      {error && (                   // <-- Show error below loading
        <div className=" bg-[rgba(245,101,101,0.1)] text-[#fc8181] p-5 m-5 rounded-[10px] border border-[rgba(245,101,101,0.3)]">
          {error}
        </div>
      )}
      <Dashboard/>
    </Container>
  </>
}

export default StatsFinder
