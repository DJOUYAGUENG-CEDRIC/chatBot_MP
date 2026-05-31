import './App.css'
import ChatBot from './ChatBot'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChatBot />} />
      </Routes>
    </>
  )
}

export default App