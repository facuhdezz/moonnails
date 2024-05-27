import { Link } from "react-router-dom";
import ProductList from "../json/products.json";
import Counter from "./Counter";
import ProductsCards from "./ProductsCards";
import { useEffect } from "react";

const ProductDetail = () => {

    const product = ProductList[0]
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
            <div className="bg-white border p-4">
                <Link to={"/"}><h1>Volver</h1></Link>
            </div>
            <div className="bg-white flex-col p-2">
                <img className="w-auto rounded-lg" src={product.foto} />
                <div className="mt-2">
                    <h1 className="text-2xl mb-2 ml-2">{product.nombre}</h1>
                    <div className="relative mb-4">
                        <ul className="h-32 overflow-scroll p-2 border pb-6">
                            {product.descripcion.map(punto => (
                                <li className="text-sm mb-1">- {punto}</li>
                            ))}
                        </ul>
                        <div className="transparent-div"></div> 
                    </div>
                    <div className="ml-2">
                        <p className="text-xl">Precio: <span>{product.moneda}</span>500</p>
                        <h1>Cantidad</h1>
                        <Counter />
                    </div>
                    
                </div>
            </div>
            <div className="bg-white border p-4">
                <div className="flex gap-2 justify-between">
                    <button className="text-xl border-2 rounded-md border-solid border-orange-200 px-2 py-1 mt-2 mb-1 hover:bg-orange-100 grow">Comprar</button>
                    <button className="text-xl border-2 rounded-md border-solid border-orange-200 px-2 py-1 mt-2 mb-1 hover:bg-orange-100 grow">Agregar al carrito</button>
                </div>
                <button className="text-xl w-full border-2 rounded-md border-solid border-orange-200 px-2 py-1 mt-2 mb-1 hover:bg-orange-100">Seguir explorando</button>
                <button className="text-xl w-full border-2 rounded-md border-solid border-orange-200 px-2 py-1 mt-2 mb-1 hover:bg-orange-100">Ir al inicio</button>
            </div>
            <div className="bg-white p-4">
                <h1 className="text-xl mb-2 ml-2">Productos relacionados</h1>
                <div className="grid grid-cols-2">
                    {ProductList.map(product => (
                        <ProductsCards key={product.id} link={product.id} nombre={product.nombre} foto={product.foto} marca={product.marca} moneda={product.moneda} precio={product.precio} />
                    ))}
                </div>
            </div>
        </>
    )   
}

export default ProductDetail;