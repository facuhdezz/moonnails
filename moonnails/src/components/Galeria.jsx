import Photos from "../json/photos.json"

const Galeria = () => {
    return (
        <div className="bg-white mx-4 rounded">
            <div className="py-2 px-4">
                <h2 id="productos" className="text-xl">Imágenes</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3">
                {Photos.map(photo => (
                    <div className="overflow-hidden border border-white"><img className="cursor-pointer hover:scale-105 duration-300" src={photo.url} /></div>
                ))}
            </div>
        </div>
    )
}

export default Galeria;