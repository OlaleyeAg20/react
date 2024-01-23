import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Body />
    <Footer />
  </React.StrictMode>,
)
