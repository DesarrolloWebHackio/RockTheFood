import { Route, Routes, useNavigate } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home/Home"
import Auth from "./pages/Auth/Auth"
import { useEffect } from "react"

const App = () => {

/*   const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      console.log("hola");
      
      navigate("/login");
    }
  }, []); */

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Auth/>}/>
        <Route path="/login" element={<Auth/>}/>
      </Routes>
    </>
  )
}

export default App