import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/signup"
import {BrowserRouter, Route, Routes} from "react-router-dom"
function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={ <h1>404 Error</h1>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
