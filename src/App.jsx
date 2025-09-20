
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './forms/login-form'
import RegisterForm from './forms/register-form'
import { Home } from './pages/home'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route  path='/register' element={<RegisterForm />}/>
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
