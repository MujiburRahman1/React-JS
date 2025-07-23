import "./App.css"
import MsgBox from "./MsgBox";

function Title() {
  return <h1>I am Mujib</h1>
}
function Description() {
  return <h3>I am Student</h3>
}
function App() {
  return (
    <>
      <MsgBox userName = "Mujib" textColor = "yellow" />
      <ProductTab />
    </>
  )
    
  
}

export default App;
