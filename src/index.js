/* Importing the React library from the node_modules folder. */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './layouts/Home'
import HomeClient from './layouts/HomeClient'
import HomeUser from './layouts/HomeUser'
import Status from './layouts/Status'
import Login from './layouts/Login'
import Register from './layouts/Register'

const Index = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Rendering the App component when the path is '/'. */}
          <Route path='/' element={<App />} />
          <Route path='/home' element={<Home />} />
          <Route path='/homeUser' element={<HomeUser />} />
          <Route path='/homeClient' element={<HomeClient />} />
          <Route path='/status' element={<Status />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Index />)
