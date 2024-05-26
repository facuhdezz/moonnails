// Importa todas las imágenes de la carpeta 'imagenes'
const importAll = (r) => r.keys().map(r);
const imagenes = importAll(require.context('../../ignorar/Photos/galeria', false, /\.(jpg)$/));


const Galeria = () => {
    console.log(imagenes);
    return (
        <>

        </>
    )
}

export default Galeria