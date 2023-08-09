import { useState } from 'react'

const NightModeButton = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
    <div>NightModeButton</div>
    <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
    </>
  )
}

export default NightModeButton