import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import CaptainLogin from './pages/CaptainLogin'
import CaptainRegister from './pages/CaptainRegister'
import Home from './pages/Home'
import UserProtectionWrapper from './pages/UserProtectedWrapper'
import CaptainLogout from './pages/CaptainLogout'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectionWrapper from './pages/CaptainProtectionWrapper'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Start />} />

      {/* all user routes */}
      <Route path='/user/register' element={<UserRegister />} />
      <Route path='/user/login' element={<UserLogin />} />
      <Route path='/user/logout' element={<UserLogout />} />
      <Route path='/home' element={
        <UserProtectionWrapper>
          <Home />
        </UserProtectionWrapper>
      } />

      
      {/* all captain routes */}
      <Route path='/captain/register' element={<CaptainRegister />} />
      <Route path='/captain/login' element={<CaptainLogin />} />
      <Route path='/captain/logout' element={<CaptainLogout />} />
      <Route path='/captain/home' element={
        <CaptainProtectionWrapper>
          <CaptainHome />
        </CaptainProtectionWrapper>
      } />
    </Routes>
  )
}

export default App