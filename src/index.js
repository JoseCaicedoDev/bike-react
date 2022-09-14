/* Importing the React library from the node_modules folder. */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './layouts/Home'
import HomeClient from './layouts/HomeClient'
import HomeUser from './layouts/HomeUser'
import StateReception from './layouts/StateReception'
import Login from './layouts/Login'
import Register from './layouts/Register'
import ClientMenu from './layouts/ClientMenu'
import Marketplacer from './layouts/MarketPlacer'

const Index = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Rendering the App component when the path is '/'. */}
          <Route path='/' element={<App />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home-user' element={<HomeUser />} />
          <Route path='/home-client' element={<HomeClient />} />
          <Route path='/status' element={<StateReception />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/client-menu' element={<ClientMenu />} />
          <Route path='/marketplace' element={<Marketplacer />} />
        </Routes>
      </Router>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Index />)
