import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    // <p>Mujib</p>
    <div className="w-full h-screen duration-200"
      style={{backgoundColor: color}}
    >
      {/* <p>khan</p> */}
    </div>
  )
}

export default App
