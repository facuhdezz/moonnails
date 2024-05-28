import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage";
import GaleryPage from "./pages/GaleryPage";

function App() {

  return (
    <>
      <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/item/:id"} element={<ProductDetailPage />} />
          <Route path={"/galeria"} element={<GaleryPage />} />
        </Routes>
    </>
  )
}

export default App
