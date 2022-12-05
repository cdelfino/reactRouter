import { useState } from 'react'
import './App.css'
import { Header } from "./Components/Header/Header"
import {Acercade} from './pages/Acercade/Acercade'
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/Acercade' element={<Acercade/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
