import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ModelS from "./pages/ModelS"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="models" element={<ModelS/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
