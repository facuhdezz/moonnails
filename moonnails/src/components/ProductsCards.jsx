const ProductsCards = (producto) => {
  return (
    <div className="border-solid border border-gray-300 p-1">
      <img className="w-full" src={`./ignorar/Photos/productos/${producto.foto}`} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{producto.nombre}</div>
        <p className="text-gray-700 text-sm">
          {producto.descripcion}
        </p>
        <p className="text-base">
          <span>{producto.moneda}</span>
           {/* {producto.precio} */}500
        </p>
        <button className="border-2 rounded-md border-solid border-orange-200 px-2 py-1 mt-4 hover:bg-orange-100">Comprar</button>
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