import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import StatsFinder from './pages/StatsFinder'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/stats'  element={<StatsFinder/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App