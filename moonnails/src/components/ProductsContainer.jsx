import ProductsCards from "./ProductsCards"
import ProductList from "../json/products.json"

const ProductsContainer = () => {
    console.log('hola');
    return (
        <div className="my-10 bg-white mx-4 rounded">
            <div className="py-2 px-4">
                <h2 id="productos" className="text-xl">Productos destacados</h2>
            </div>            
            <div className="grid grid-cols-2">
                {ProductList.map(product => (
                    <ProductsCards key={product.id} nombre={product.nombre} foto={product.foto} descripcion={product.descripcion} moneda={product.moneda} precio={product.precio} />
                ))}
            </div>
            <div className="py-2 px-4">
                <h2 id="productos" className="text-xl">Ver más</h2>
            </div>            
        </div>
    )
}

export default ProductsContainer