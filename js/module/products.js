// 15. Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
export const getOrnamentalProductsOver100StockByPrice = async () => {
    let res = await fetch("http://172.16.101.146:5346/products?gama=Ornamentales");
    let data = await res.json();
    let dataUpdate = [];

    data.forEach(val => {
        if (val.stock > 100){
            dataUpdate.push(val);
        }
    });
    dataUpdate.sort((a, b) => b.price_sale - a.price_sale);
    
    return dataUpdate;
}


export const getProductByCode = async (code) => {
    let res = await fetch(`http://172.16.101.146:5346/products?code_product=${code}`)
    let data = await res.json()
    return data
}



// 8.Devuelve un listado de los productos que nunca han aparecido en un pedido.

export const productsNeverOrdered = async () => {
    // Obtener la lista completa de productos
    let resProducts = await fetch("http://172.16.101.146:5346/products");
    let products = await resProducts.json();

    // Obtener la lista de productos en los detalles de pedido
    let resRequestDetails = await fetch("http://172.16.101.146:5348/request_details");
    let requestDetails = await resRequestDetails.json();

    // Obtener los códigos de productos que han aparecido en los detalles de pedido
    let orderedProductCodes = requestDetails.map(detail => detail.product_code);

    // Filtrar los productos que nunca han aparecido en un pedido
    let productsNeverOrdered = products.filter(product => !orderedProductCodes.includes(product.code_product));

    // Devolver solo los datos específicos de los productos que nunca han sido pedidos
    let relevantData = productsNeverOrdered.map(product => {
        return {
            code_product: product.code_product,
            name: product.name
        };
    });

    return relevantData;
};


// 9. Devuelve un listado de los productos que nunca han aparecido en un pedido. El resultado debe mostrar el nombre, la descripción y la imagen del producto.


export const getAllProductsNeverOrderedWithDetails = async () => {

        // Obtener la lista completa de productos
        let resProducts = await fetch("http://172.16.101.146:5346/products");
        let products = await resProducts.json();
    
        // Obtener la lista de productos en los detalles de pedido
        let resRequestDetails = await fetch("http://172.16.101.146:5348/request_details");
        let requestDetails = await resRequestDetails.json();
    
        // Obtener los códigos de productos que han aparecido en los detalles de pedido
        let orderedProductCodes = requestDetails.map(detail => detail.product_code);
    
        // Filtrar los productos que nunca han aparecido en un pedido
        let productsNeverOrdered = products.filter(product => !orderedProductCodes.includes(product.code_product));
    
        // Obtener la información de la gama de productos
        let resGama = await fetch("http://172.16.101.146:5343/gama"); // Reemplaza "ruta/a/tu/gama.json" con la ruta correcta a tu archivo gama.json
        let gamaData = await resGama.json();
    
        // Obtener los productos nunca pedidos con su información de gama
        let relevantData = productsNeverOrdered.map(product => {
            let gamaInfo = gamaData.find(gama => gama.gama === product.gama); // Buscar la información de la gama para el producto actual
            return {
                code_product: product.code_product,
                name: product.name,
                description: gamaInfo ? gamaInfo.description_text : "Descripción no disponible",
                image: gamaInfo ? gamaInfo.imagen : "Imagen no disponible"
            };
        });
    
        return relevantData;
    };