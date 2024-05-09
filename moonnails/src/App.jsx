import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import ProductsContainer from "./components/ProductsContainer";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Banner />
        <ProductsContainer />
      </main>
    </>
  )
}

export default App
