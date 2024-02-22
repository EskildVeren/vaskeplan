import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const chores = ["fellesarealet", "kjøkkenet", "badet"]
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const today = new Date()
  const month = today.getMonth()
  let dayYear = 0
  for (let index = 0; index < month; index++) {
    dayYear += daysInMonth[index]
  }
  dayYear += today.getDate()
  const weekNumber = Math.floor((10 + dayYear - today.getDay()) / 7)

  console.log(today);
  
  return (
    <>
      <h1>I dag er det uke {weekNumber}</h1>
      <h2>Forrige uke skulle du vaske {chores[weekNumber%3]} </h2>
      <h2>Denne uka skal du vaske {chores[(weekNumber+1)%3]}</h2>
      <h2>Neste uke skal du vaske {chores[(weekNumber+2)%3]}</h2>
    </>
  )
}

export default App
