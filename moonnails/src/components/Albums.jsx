import AlbumsPic from "../json/albums.json";

const Albums = () => {
    return (
        <div className="bg-white mx-4 rounded divide-y-2 p-4">
            <div className="py-2 px-4">
                <h2 id="productos" className="text-xl">Albums</h2>
            </div>
            <div className="flex gap-2 pt-4 overflow-x-scroll">
                {AlbumsPic.map(album => (
                    <div key={album.id} className="flex flex-col gap-1 w-full mb-2">
                        <div className="overflow-hidden border border-white aspect-[3/4] min-w-[130px]">
                            <img className="w-full h-full rounded cursor-pointer hover:scale-105 duration-300 object-cover" src={album.url} />
                        </div>
                        <h1 className="ml-2 mr-4 text-sm">Nombre del album</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Albums;