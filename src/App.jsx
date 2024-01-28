import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import MainPage from './Pages/MainPage'


function App() {
  return (
    <> 
    <BrowserRouter>
    <Routes>
      
      <Route exact path="/" element={<MainPage />} />
      <Route path='/Electronic-items' element={<MainPage />} />
      <Route path='/Fashion-items' element={<MainPage />} />
      <Route path='/Cart-items' element={<MainPage />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
