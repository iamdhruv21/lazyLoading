import {useEffect, useState} from 'react'
import "./App.css"
import Card from "./Card.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setData({
        title: "Dhruv",
        detail: "a full stack web developer with the proficient knowledge in backend and frontend technologies",
      })
      setIsLoading(false)
    }, 3000)
  }, []);

  return (
    <>
      {isLoading ? (<h1>Loading...</h1>) : <Card data={data}/>}
    </>
  )
}

export default App;
