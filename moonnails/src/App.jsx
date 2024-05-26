import Banner from "./components/Banner";
// import Galeria from "./components/Galeria";
import NavBar from "./components/NavBar";
import ProductsContainer from "./components/ProductsContainer";
import Wpp from "./assets/icons/wpp.png"

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Banner />
        <ProductsContainer />
        {/* <Galeria /> */}
        <a href="https://wa.me/59892300884" target="_blank" rel="noopener noreferrer" className="wppbtn">
          <img src={Wpp} className="w-16"/>
        </a>
      </main>
    </>
  )
}

export default App
