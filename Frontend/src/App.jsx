import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import StatsFinder from './pages/StatsFinder'
import TrendingVedios from './pages/TrendingVedios'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/stats'  element={<StatsFinder/>}/>
          <Route path='/trending'  element={<TrendingVedios/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App