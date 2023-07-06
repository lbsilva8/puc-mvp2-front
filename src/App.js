import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Plantas from './pages/Plantas'
import PlantasDetails from './pages/PlantasDetails'

{/*import  Plantasdetails from './pages/Plantasdetails'*/}


export default function App() {
  return (
    <div>
      <BrowserRouter> 
        <Routes> 
          <Route path='/' element={<Home />}></Route> 
          <Route path='/plantas' element={<Plantas />}></Route>
          <Route path='/plantas/:id' element={<PlantasDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}