
// Declarar una promesa

// export const example = async()=>{
//     let calculo = new Promise((resolve, reject)=>{
//         let res = ""
//         for (let i = 0; i < 10000000; i++){

//         }
//         resolve(res)
//     });
// }


export const getAllProductBill = async()=>{
     let conexion = await fetch ("http://localhost:5600/camper")
     let data = await conexion.json();
     return data;
}