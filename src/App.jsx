import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Kalkulator from './components/Kalkulator/Kalkulator'
import Tentang from './components/tentang/Tentang'
import Home from './Home/Home'

function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Tentang' element={<Tentang/>} />
          <Route path='/Kalkulator' element={<Kalkulator/>} />
        </Routes>
      </div>
  )
}

export default App
