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