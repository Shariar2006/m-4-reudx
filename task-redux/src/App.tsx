import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
