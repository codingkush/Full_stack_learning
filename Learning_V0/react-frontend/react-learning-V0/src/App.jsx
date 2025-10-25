import { BrowserRouter as Router , Routes , Route ,Link} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <div>
      
      <Router>

         <nav style={{display:"flex" ,justifyContent:"space-around", padding:"10px", backgroundColor:"red"}}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
         </nav>
         
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/contact' element={<Contact/>}/>
         </Routes>
      </Router>
    </div>
  )
}

export default App
