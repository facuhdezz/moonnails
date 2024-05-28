import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage";
import GaleryPage from "./pages/GaleryPage";
import AdminPanel from "./pages/AdminPanel";

function App() {

  return (
    <>
      <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/item/:id"} element={<ProductDetailPage />} />
          <Route path={"/galeria"} element={<GaleryPage />} />
          <Route path={"/admin"} element={<AdminPanel />} />
        </Routes>
    </>
  )
}

export default App
