import ReactDOM from 'react-dom/client'

 
import App from './App.jsx'
import React from 'react'

const reactelement = React.createElement('a', {href: 'https://google.com',target: '_blank'}, 'Google')

ReactDOM.createRoot(document.getElementById('root')).render(
 
    
    <App />
   
)
