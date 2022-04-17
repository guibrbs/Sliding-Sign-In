import react, { useState } from 'react'
import './App.css'
import FormContainer from './components/Form-container'
import PanelsContainer from './components/Panels-container'

function App() {
  const [mode, setMode] = useState(0)
  return (
    <div className={mode ? "container sign-up-mode" : "container"}>
      <FormContainer />
      <PanelsContainer setProps={setMode}/>
    </div>
  )
}

export default App
