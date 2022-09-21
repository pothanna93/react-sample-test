import {useState, useEffect} from 'react'

import './index.css'

const MovieItems = () => {
  const [endPoint, setEndPoint] = useState('')
  const [container, setContainer] = useState([])

  useEffect(() => {
    const fetchMe = () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '19c68d9db6msh40d6bfb47745f0dp11eabfjsne2ace13e8b60',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
        },
      }

      fetch(
        `https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`,
        options,
      )
        .then(response => response.json())
        .then(data => {
          setContainer(data.d)
        })
        .catch(err => console.error(err))
    }
    fetchMe()
  }, [endPoint])

  const onChangeHandler = event => {
    setEndPoint(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()
  }

  return (
    <div className="app-container">
      <h1>MOVIES</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          onChange={onChangeHandler}
          value={endPoint}
          className="form-input"
        />
        <button type="submit" className="btn">
          submit
        </button>
      </form>
      <ul className="images-div">
        {container.map(item => (
          <li key={item.id} className="list-item">
            <img src={item.i.imageUrl} alt={item.l} className="image" />
            <p>{item.l}</p>
            <p>{item.s}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default MovieItems
