// const getAllProducts = async() =>{
//     let peticion = await fetch(import.meta.dirname + "/db/product.json");
//     let data = await peticion.json();
//     return data;
// }

// console.log(await getAllProducts());

// console.log (import.meta.dirname);


// solo mostrar la descripción

// import fs from 'node:fs';
// fs.readFile(import.meta.dirname + "/db/product.json",'utf8', (err, data) =>{
//     // console.log(data);
//     let json = JSON.parse(data);
//     // console.log(json.products);
//     let [producto1] = json.products
//     console.log(producto1.description);
// });




// import fs from 'node:fs';
// fs.readFile(import.meta.dirname + "/db/product.json",'utf8', (err, data) =>{
//     // console.log(data);
//     let json = JSON.parse(data);
//     // console.log(json.products);
//     let [producto1] = json.products
//     console.log(producto1);
// });


// import fs from 'node:fs';
// fs.readFile(import.meta.dirname + "/db/product.json",'utf8', (err, data) =>{

//     let json = JSON.parse(data);
//     let [producto1] = json.products
//     console.log(producto1);
// });



// import fs from 'node:fs';
// fs.readFile(import.meta.dirname + "/db/product.json",'utf8', (err, data) =>{

//     let json = JSON.parse(data);
//     let [producto1] = json.products
//     let {gama} = `${(producto1.gama != "Herramientas") ? producto1.gama : undefined}`
//     console.log(gama);
// });



import fs from 'node:fs';
fs.readFile(import.meta.dirname + "/db/product.json",'utf8', (err, data) =>{

    let json = JSON.parse(data);
    let [producto1] = json.products
    let {gama} = `${(producto1.gama != "Herramientas") ? producto1.gama : undefined}`
    console.log(gama);
});

