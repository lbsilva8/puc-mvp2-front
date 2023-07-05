import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Plantas from './pages/Plantas'

{/*import  Plantasdetails from './pages/Plantasdetails'*/}


export default function App() {
  return (
    <div>
      <BrowserRouter> 
        <Routes> 
          <Route path='/' element={<Home />}></Route> 
          <Route path='/plantas' element={<Plantas />}></Route>
          {/*<Route path='/plantas/:id' element={<Plantasdetails />}></Route>*/}
        </Routes>
      </BrowserRouter>
    </div>
  )
}