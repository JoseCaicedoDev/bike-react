/* Importing the React library from the node_modules folder. */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Index = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Rendering the App component when the path is '/'. */}
          <Route path='/' element={<App />} />
        </Routes>
      </Router>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Index />)
