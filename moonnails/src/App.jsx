import NavBar from "./components/NavBar";
import Wpp from "./assets/icons/wpp.png"
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {

  return (
    <>
      <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/item/:id"} element={<ProductDetailPage />} />
        </Routes>
        <a href="https://wa.me/59892300884" target="_blank" rel="noopener noreferrer" className="wppbtn">
          <img src={Wpp} className="w-16"/>
        </a>
    </>
  )
}

export default App
