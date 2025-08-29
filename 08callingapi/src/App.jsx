import { useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {

  const [data, setData] = useState([])

   const getData = async () => { 
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30')
    setData(response.data)
    console.log(data)

   }

  return (
    <>
      <h1>Calling API</h1>
      <div>
        <button onClick={getData}>Get Data</button>
       <div> {
          data.map(item => (
            <div key={item.id} className='card'>
              <img src={item.download_url} alt= "" />
              <h3>{item.author}</h3>
            </div>
          ))
        }
        </div>
      </div>
    </>
  )
}

export default App
