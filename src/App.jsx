import { useContext, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Auth from './Pages/Auth'
import LandingPage from './Pages/LandingPage'
import Dashboard from './Pages/Dashboard'
import Header from './Components/Header'
import ViewAll from './Pages/ViewAll'
import { tokenAuthenticationContext } from './ContextAPI/TokenAuth'



function App() {
const{isAuthorised,setIsAuthorised}=useContext(tokenAuthenticationContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage insideHome/>}></Route>
        <Route path='/dashboard' element={isAuthorised?<Dashboard />:<LandingPage/>}></Route>
        <Route path='/login' element={<Auth/>}></Route>
        <Route path='/register' element={<Auth insideRegister/>}></Route>
        <Route path='/allreview' element={isAuthorised?<ViewAll/>:<LandingPage/>}></Route>
       
        <Route path='/*' element={<Navigate to={'/'}/>}></Route>
      </Routes>
    </>
  )
}

export default App
