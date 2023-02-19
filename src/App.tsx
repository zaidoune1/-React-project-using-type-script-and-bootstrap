import {Routes, Route} from "react-router-dom";
import { Container} from "react-bootstrap";
import Home from "./compounents/Home";
import About from "./compounents/About";
import Store from "./compounents/Store";
import Navbar from "./compounents/Navbar";
function App() {

  return (
    <>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/store" element={<Store/>}  />
      </Routes>
    </Container>
    </>
  )
}

export default App
