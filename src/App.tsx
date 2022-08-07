import './assets/styles/custom.scss'
import './App.css'
import Navbar from './components/Navbar'
import CarList from './pages/CarList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<CarList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App