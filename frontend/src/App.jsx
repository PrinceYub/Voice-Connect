import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/contact'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Navbar from './components/Navbar'
import RoleSelection from './pages/RoleSelection'
import RegisterPatient from './pages/RegisterPatient'
import RegisterNHS from './pages/RegisterNHS'

const App = () => {
  return (
    <div className = 'mx-4 sm:mx-[10%]'>
      <Navbar/>
     <Routes>
    <Route path='/' element= {<Home />}/>    
    <Route Path='/contact' element ={<Contact/>}/>
    <Route path='/about' element= {<About />}/> 
    <Route path='/login' element= {<Login />}/> 
    <Route path='/my-profile' element= {<MyProfile />}/> 
    <Route path='/my-appointments' element= {<MyAppointments/>}/> 
    <Route path='/register' element ={<RoleSelection/>} />
    <Route path='/register/patient' element ={<RegisterPatient/>}/>
    <Route path='/register/nhs' element ={<RegisterNHS/>}/>
     </Routes>
    </div>
  )
}

export default App
