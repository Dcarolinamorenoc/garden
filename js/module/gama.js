

const getProductDetails = async (code_product) => {
    let resGama = await fetch("http://localhost:5503/gama");
    let gama = await resGama.json();
    let productDetails = gama.find(item => item.code_product === code_product);

    // Verificar si se encontraron los detalles del producto
    if (productDetails) {
        return productDetails;
    } else {
        console.error("No se encontraron detalles para el producto con el código:", code_product);
        return {}; // Devolver un objeto vacío si no se encuentran detalles
    }
};