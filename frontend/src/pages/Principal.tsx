import React from 'react'
import {Route, Routes} from "react-router-dom";
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import Citas from './Citas';

const Principal:React.FC = () => {
  return (
        <div className='principal'>
            <NavBar/>
              <Routes>
                  <Route path='/dashboard' element={<Dashboard/>}/>
                  <Route path='/citas' element={<Citas/>}/>
              </Routes>
        
        </div>
  )
}

export default Principal
