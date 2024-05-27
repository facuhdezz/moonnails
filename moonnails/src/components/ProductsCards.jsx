import { Link } from "react-router-dom"

const ProductsCards = (producto) => {
  return (
    <div className="border-solid border border-gray-300 p-1">
      <Link to={"/item/"+ producto.link}><img className="w-full rounded" src={producto.foto} alt="Sunset in the mountains" /></Link> 
      <div className="px-2 py-2">
        <div className="font-bold text-xl mb-1">{producto.nombre}</div>
        <p className="text-gray-700 text-sm">
          {producto.marca}
        </p>
        <p className="text-base">
          <span>{producto.moneda}</span>
           {/* {producto.precio} */}500
        </p>
        <Link to={"/item/"+ producto.link}><button className="border-2 rounded-md border-solid border-orange-200 px-2 py-1 mt-2 mb-1 hover:bg-orange-100">Comprar</button></Link>
      </div>
      {/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div> */}
    </div>
  )
}

export default ProductsCards