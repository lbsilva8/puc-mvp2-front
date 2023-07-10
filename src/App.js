import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BarraNavegacao from './components/BarraNavegacao'
import Footer from './components/Footer'

import Home from './pages/Home'
import Plantas from './pages/Plantas'
import PlantasDetails from './pages/PlantasDetails'
import CalendarioPlantacao from './pages/CalendarioPlantacao'


export default function App() {
  return (
    <div>
        <BrowserRouter>
        <BarraNavegacao />
          <Routes>
            <Route path='/' element={<Home />}></Route> 
            <Route path='/plantas' element={<Plantas />}></Route>
            <Route path='/plantas/:id' element={<PlantasDetails />}></Route>
            <Route path='/calendarioplantacao' element={<CalendarioPlantacao />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  )
}