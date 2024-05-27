import ProductDetail from "../components/ProductDetail";
import ProductsContainer from "../components/ProductsContainer";
import VolverAtras from "../components/VolverAtras"

const ProductDetailPage = () => {
    return (
        <main className="flex flex-col gap-4 my-4">
            <VolverAtras />
            <ProductDetail />
            <ProductsContainer />
        </main>
    )
}

export default ProductDetailPage;