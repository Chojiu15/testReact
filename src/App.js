

import {useState} from 'react'
import axios from 'axios'


const App = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('beef')

  let APP_ID = process.env.REACT_APP_API_ID
  let APP_KEY = process.env.REACT_APP_API_KEY

  const fetchData = () => {
    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(res => setData(res.data.hits))
    .catch(err => console.log(err))
  }

  return(
    <div style={{textAlign : 'center'}}> 
      <input onChange={(e) => setQuery(e.target.value)} /> 

      <button onClick={() => fetchData()}>
        Call me data
      </button>
      {data.map((element, index) => {
        return(
          <div key={index}>
            <h1>{element.recipe.label}</h1>
            <img src={element.recipe.image} />
          </div>
        )
      })}
    </div>
  )
}


export default App
