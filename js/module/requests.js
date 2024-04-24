// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

// export const getAllOrderStatuses =  async() =>{
//     let res = await fetch ("http://localhost:5508/requests")
//     let data = await res.json();
//     let dataUpdate = [];
//     data.forEach(val => {
//         dataUpdate.push({
//             estado: val.status,
//         })
//     });
//     return dataUpdate;
// }

export const getAllOrderStatuses = async () => {
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let uniqueStatuses = new Set();

    data.forEach(val => {
        uniqueStatuses.add(val.status);
    });

    return Array.from(uniqueStatuses);
}

// 9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getAllDelayedOrders = async () =>{
    let res = await fetch("http://localhost:5508/requests?status=Rechazado");
    let data = await res.json();
    let dataUpdate = [];

    data.forEach(val => {
        dataUpdate.push({
            Pedido_Codigo: val.code_request,
            Cliente_Codigo: val.code_client,
            Fecha_Esperada: val.date_wait,
            Fecha_Entrega: val.date_delivery
        })
    });
    return dataUpdate;
}

// 10.Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

export const getAll = async () =>{
    let res = await fetch("http://localhost:5508/requests?status=Entregado");
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let date_wait = new Date(val.date_wait);
        let date_delivery = new Date(val.date_delivery);

        let difference = date_wait.getTime() - date_delivery.getTime();
        let differenceInDays = difference / (1000 * 3600 * 24);

        if (differenceInDays >= 2){
            dataUpdate.push({
                Pedido_Codigo: val.code_request,
                Cliente_Codigo: val.code_client,
                Fecha_Esperada: val.date_wait,
                Fecha_Entrega: val.date_delivery
            })
        }
    })
    return dataUpdate;
} 