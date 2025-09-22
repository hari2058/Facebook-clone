
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './forms/login-form'
import RegisterForm from './forms/register-form'
import { Home } from './pages/home'
import { Content } from './pages/content'
import { BookMark } from './pages/bookmark'
import { UserRound } from './pages/userround'
import { Profile } from './pages/profile'
import { AddPost } from './components/addPost'
import { CreatePost } from './pages/createPost'

function App() {


  return (
    <>
      <BrowserRouter>
     
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route  path='/register' element={<RegisterForm />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/content' element={<Content />} />
          <Route  path='/bookmark' element={<BookMark />}/>
          <Route  path='/userround' element={<UserRound />}/>
          <Route  path='/profile' element={<Profile />}/>
          <Route  path='/addPost' element={<AddPost />}/>
          <Route path='/createPost' element={ <CreatePost />} />


        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
