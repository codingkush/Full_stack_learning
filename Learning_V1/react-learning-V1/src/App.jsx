import {BrowserRouter as Router, Route,Routes,Link, Navigate} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import { useState } from 'react'

function App() {

  const [user,setUser] = useState(null);

  return (
     <div>
      {/* Hello, Kush Gupta */}

      <Router>

        <Navbar user={user}/>
       
       <Routes>
         <Route path='/' element={<Home user={user}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/testimonials' element={<Testimonials/>}/>
         <Route path='/signup' element={<Signup user={user}/>}/>
         <Route path='/signin' element={<Signin user={user}/>}/>
         <Route path='*' element={<Navigate to="/" />}/>
       </Routes>
      </Router>
     </div>
  )
}

export default App
