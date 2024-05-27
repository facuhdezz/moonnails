import Photos from "../json/photos.json"

const ImagenesNails = () => {
    return (
        <div className="bg-white mx-4 rounded">
            <div className="py-2 px-4">
                <h2 id="productos" className="text-xl">Imágenes</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {Photos.map(photo => (
                    <img className="border border-white" src={photo.url} />
                ))}
            </div>
            <div className="py-2 px-4">
                <h2 id="productos" className="text-xl">Ver más</h2>
            </div>
        </div>
    )
}

export default ImagenesNails