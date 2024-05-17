// import "./components/clock.js";


// // -----------------------------Primera parte ----------------------------------------------------------------
// // -----------------------------Ejercicio 1----------------------------------------------------------------

// import { getAllOfficesCodeAndCity } from "./module/offices.js";
// const queryAboutTable01 = document.querySelector("#queryAboutTable01");
// queryAboutTable01.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable01.children
//     if(!report__container.innerHTML){
//         let data = await getAllOfficesCodeAndCity();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Oficinas</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo Oficina: </b>${val.codigo}</p>
//                         <p><b>Ciudad: </b>${val.ciudad}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })



// // -----------------------------Ejercicio 2----------------------------------------------------------------

// import { getAllOfficesFromSpainCityAndMovil } from "./module/offices.js";
// const queryAboutTable02 = document.querySelector("#queryAboutTable02");
// queryAboutTable02.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable02.children
//     if(!report__container.innerHTML){
//         let data = await getAllOfficesFromSpainCityAndMovil();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Oficinas</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>ID: </b>${val.id}</p>
//                         <p><b>Ciudad: </b>${val.ciudad}</p>
//                         <p><b>Telefono: </b>${val.telefono}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // -----------------------------Ejercicio 3----------------------------------------------------------------

// import { getAllEmployeesWithBossAndCodeSeven } from "./module/employees.js";
// const queryAboutTable03 = document.querySelector("#queryAboutTable03");
// queryAboutTable03.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable03.children
//     if(!report__container.innerHTML){
//         let data = await getAllEmployeesWithBossAndCodeSeven();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Empleados</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b>${val.nombre}</p>
//                         <p><b>Apellidos: </b>${val.apellidos}</p>
//                         <p><b>Email: </b>${val.email}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // -----------------------------Ejercicio 4----------------------------------------------------------------

// import { getBossFullNameAndEmail } from "./module/employees.js";
// const queryAboutTable04 = document.querySelector("#queryAboutTable04");
// queryAboutTable04.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable04.children
//     if(!report__container.innerHTML){
//         let data = await getBossFullNameAndEmail();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Empleados</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b>${val.nombre}</p>
//                         <p><b>Apellidos: </b>${val.apellidos}</p>
//                         <p><b>Email: </b>${val.email}</p>
//                         <p><b>Posicion: </b>${val.position}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // -----------------------------Ejercicio 5----------------------------------------------------------------

// import { getAllNonSalesRepresentativeEmployees } from "./module/employees.js";
// const queryAboutTable05 = document.querySelector("#queryAboutTable05");
// queryAboutTable05.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable05.children;
//     if (!report__container.innerHTML) {
//         let data = await getAllNonSalesRepresentativeEmployees(); 
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Empleados</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b>${val.nombre}</p>
//                         <p><b>Apellidos: </b>${val.apellidos}</p>
//                         <p><b>Puesto: </b>${val.puesto}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });


// // -----------------------------Ejercicio 6----------------------------------------------------------------

// import { getAllSpanishClientsNames } from "./module/clients.js";
// const queryAboutTable06 = document.querySelector("#queryAboutTable06");
// queryAboutTable06.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable06.children
//     if(!report__container.innerHTML){
//         let data = await getAllSpanishClientsNames();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Clientes</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b>${val.nombre}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // -----------------------------Ejercicio 7----------------------------------------------------------------

// import { getAllOrderStatuses } from "./module/requests.js";
// const queryAboutTable07 = document.querySelector("#queryAboutTable07");
// queryAboutTable07.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable07.children;
//     if (!report__container.innerHTML) {
//         let data = await getAllOrderStatuses();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Estados de Pedido</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Estado: </b>${val}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });



// // -----------------------------Ejercicio 8----------------------------------------------------------------

// import { getUniqueClientCodesWithPaymentsIn2008 } from "./module/payments.js";
// const queryAboutTable08 = document.querySelector("#queryAboutTable08");
// queryAboutTable08.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable08.children;
//     if (!report__container.innerHTML) {
//         let data = await getUniqueClientCodesWithPaymentsIn2008();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Payments</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo: </b>${val.codigo}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });

// // -----------------------------Ejercicio 9----------------------------------------------------------------

// import { getAllDelayedOrders } from "./module/requests.js";
// const queryAboutTable09 = document.querySelector("#queryAboutTable09");
// queryAboutTable09.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable09.children;
//     if (!report__container.innerHTML) {
//         let data = await getAllDelayedOrders();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Requests</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Pedido Codigo: </b>${val.Pedido_Codigo}</p>
//                         <p><b>Cliente Codigo: </b>${val.Cliente_Codigo}</p>
//                         <p><b>Fecha Esperada: </b>${val.Fecha_Esperada}</p>
//                         <p><b>Fecha Entrega: </b>${val.Fecha_Entrega}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });


// // -----------------------------Ejercicio 10----------------------------------------------------------------

// import { getDelayedOrdersList } from "./module/requests.js";
// const queryAboutTable010 = document.querySelector("#queryAboutTable010");
// queryAboutTable010.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable010.children;
//     if (!report__container.innerHTML) {
//         let data = await getDelayedOrdersList();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Requests</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Pedido Codigo: </b>${val.Pedido_Codigo}</p>
//                         <p><b>Cliente Codigo: </b>${val.Cliente_Codigo}</p>
//                         <p><b>Fecha Esperada: </b>${val.Fecha_Esperada}</p>
//                         <p><b>Fecha Entrega: </b>${val.Fecha_Entrega}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });



// // -----------------------------Ejercicio 11----------------------------------------------------------------

// import { getRejectedOrders2009 } from "./module/requests.js";
// const queryAboutTable011 = document.querySelector("#queryAboutTable011");
// queryAboutTable011.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable011.children;
//     if (!report__container.innerHTML) {
//         let data = await getRejectedOrders2009();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Requests</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Pedido Codigo: </b>${val.Pedido_Codigo}</p>
//                         <p><b>Cliente Codigo: </b>${val.Cliente_Codigo}</p>
//                         <p><b>Fecha Esperada: </b>${val.Fecha_Esperada}</p>
//                         <p><b>Fecha Entrega: </b>${val.Fecha_Entrega}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });


// // -----------------------------Ejercicio 12----------------------------------------------------------------

// import { getOrdersDeliveredInJanuary } from "./module/requests.js";
// const queryAboutTable012 = document.querySelector("#queryAboutTable012");
// queryAboutTable012.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable012.children;
//     if (!report__container.innerHTML) {
//         let data = await getOrdersDeliveredInJanuary();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Requests</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Pedido Codigo: </b>${val.Pedido_Codigo}</p>
//                         <p><b>Cliente Codigo: </b>${val.Cliente_Codigo}</p>
//                         <p><b>Fecha Esperada: </b>${val.Fecha_Esperada}</p>
//                         <p><b>Fecha Entrega: </b>${val.Fecha_Entrega}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });


// // -----------------------------Ejercicio 13----------------------------------------------------------------

// import { getPaypalPayments2008OrderedDescending } from "./module/payments.js";
// const queryAboutTable013 = document.querySelector("#queryAboutTable013");
// queryAboutTable013.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable013.children;
//     if (!report__container.innerHTML) {
//         let data = await getPaypalPayments2008OrderedDescending();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Payments</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Codigo cliente: </b>${val.code_client}</p>
//                             <p><b>Payments: </b>${val.payment}</p>
//                             <p><b>ID Transaccion: </b>${val.id_transaction}</p>
//                             <p><b>Total: </b>${val.total}</p>
//                             <p><b>ID: </b>${val.id}</p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });


// // -----------------------------Ejercicio 14----------------------------------------------------------------

// import { getAllUniquePaymentMethods } from "./module/payments.js";
// const queryAboutTable014 = document.querySelector("#queryAboutTable014");
// queryAboutTable014.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable014.children;
//     if (!report__container.innerHTML) {
//         let data = await getAllUniquePaymentMethods();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Payments</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Método de Pago: </b>${val}</p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });


// // -----------------------------Ejercicio 15----------------------------------------------------------------

// import { getOrnamentalProductsOver100StockByPrice } from "./module/products.js";
// const queryAboutTable015 = document.querySelector("#queryAboutTable015");
// queryAboutTable015.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable015.children;
//     if (!report__container.innerHTML) {
//         let data = await getOrnamentalProductsOver100StockByPrice();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Productos</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Producto: </b>${val.name}</p>
//                             <p><b>Precio: </b>${val.price_sale}</p>

//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });


// // -----------------------------Ejercicio 16----------------------------------------------------------------

// import { getClientsInMadridWithSalesRep11Or30  } from "./module/clients.js";
// const queryAboutTable016 = document.querySelector("#queryAboutTable016");
// queryAboutTable016.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable016.children;
//     if (!report__container.innerHTML) {
//         let data = await getClientsInMadridWithSalesRep11Or30 ();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Clientes</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Clientes: </b>${val.client_name}</p>
//                             <p><b>Ciudad: </b>${val.city}</p>
//                             <p><b>Codigo empleado:</b> ${val.code_employee_sales_manager}</p>


//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });

// // -----------------------------Segunda Parte----------------------------------------------------------------

// // -----------------------------Ejercicio 1----------------------------------------------------------------

// import { getEmployeesCode  } from "./module/clients.js";
// const queryAboutTable1 = document.querySelector("#queryAboutTable1");
// queryAboutTable1.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable1.children;
//     if (!report__container.innerHTML) {
//         let data = await getEmployeesCode ();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Clientes</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Cliente Nombre: </b>${val.client_name}</p>
//                             <p><b>Nombre empleado: </b>${val.name_employee }</p>


//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });

// // -----------------------------Ejercicio 2----------------------------------------------------------------

// import { getClientsWithSalesRepresentatives  } from "./module/clients.js";
// const queryAboutTable2 = document.querySelector("#queryAboutTable2");
// queryAboutTable2.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable2.children;
//     if (!report__container.innerHTML) {
//         let data = await getClientsWithSalesRepresentatives ();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Clientes</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Cliente Nombre: </b>${val.client_name}</p>
//                             <p><b>Nombre empleado: </b>${val.name_employee }</p>


//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });


// // -----------------------------Ejercicio 3----------------------------------------------------------------

// import { getClientsWithoutPayments  } from "./module/clients.js";
// const queryAboutTable3 = document.querySelector("#queryAboutTable3");
// queryAboutTable3.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable3.children;
//     if (!report__container.innerHTML) {
//         let data = await getClientsWithoutPayments ();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Clientes</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Cliente Nombre: </b>${val.client_name}</p>
//                             <p><b>Nombre empleado: </b>${val.name_employee }</p>


//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });


// // -----------------------------Ejercicio 4----------------------------------------------------------------

// import { getClientsWithPaymentsAndSalesRepresentativesAndOfficeCity  } from "./module/clients.js";
// const queryAboutTable4 = document.querySelector("#queryAboutTable4");
// queryAboutTable4.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable4.children;
//     if (!report__container.innerHTML) {
//         let data = await getClientsWithPaymentsAndSalesRepresentativesAndOfficeCity ();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Clientes</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Cliente Nombre: </b>${val.client_name}</p>
//                             <p><b>Ciudad: </b>${val.city}</p>
//                             <p><b>Nombre empleado: </b>${val.name_employee }</p>


//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });

// // -----------------------------Ejercicio 5----------------------------------------------------------------

// import { getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCity   } from "./module/clients.js";
// const queryAboutTable5 = document.querySelector("#queryAboutTable5");
// queryAboutTable5.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable5.children;
//     if (!report__container.innerHTML) {
//         let data = await getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCity  ();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Clientes</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Cliente Nombre: </b>${val.client_name}</p>
//                             <p><b>Ciudad: </b>${val.city}</p>
//                             <p><b>Nombre empleado: </b>${val.name_employee }</p>


//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });


// // -----------------------------Ejercicio 6----------------------------------------------------------------

// import { getOfficesClientsInFuenlabrada } from "./module/clients.js";
// const queryAboutTable6 = document.querySelector("#queryAboutTable6");
// queryAboutTable6.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable6.children
//     if(!report__container.innerHTML){
//         let data = await getOfficesClientsInFuenlabrada();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                 <div>Oficinas</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo: </b>${val.codigo}</p>
//                         <p><b>Direccion 1: </b>${val.direccion1}</p>
//                         <p><b>Direccion 2: </b>${val.direccion2}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })




// // -----------------------------Ejercicio 7----------------------------------------------------------------

// import { getClientsEmploy } from "./module/clients.js";
// const queryAboutTable7 = document.querySelector("#queryAboutTable7");
// queryAboutTable7.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable7.children
//     if(!report__container.innerHTML){
//         let data = await getClientsEmploy();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.client_name}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre del empleado: </b>${val.name_employee}</p>
//                         <p><b>Ciudad: </b>${val.city}</p>
//                         <p><b>Cliente: </b>${val.client_name}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // -----------------------------Ejercicio 8----------------------------------------------------------------

// import { getEmployeesWithBossesAndBossesOfBosses   } from "./module/employees.js";
// queryAboutTable8.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable8.children;
//     if (!report__container.innerHTML) {
//         let data = await getEmployeesWithBossesAndBossesOfBosses();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Empleados</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Nombre: </b>${val.name} ${val.lastname1} ${val.lastname2}</p>
//                             <p><b>Nombre jefe: </b>${val.boss}</p>
                            
//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });

// // -----------------------------Ejercicio 9----------------------------------------------------------------

// import { getEmployeesWithBossAndBossOfBoss } from "./module/employees.js";

// const queryAboutTable9 = document.querySelector("#queryAboutTable9");

// queryAboutTable9.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable9.children;

//     if (!report__container.innerHTML) {
//         let data = await getEmployeesWithBossAndBossOfBoss();
//         let plantilla = "";
//         console.log(data);

//         data.forEach(val => {
//             let jefesHtml = "";
//             if (val.jefes) {
//                 jefesHtml = val.jefes.reverse().join(", "); // Revertir el array antes de unirlo en una cadena
//             }
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Empleado</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Nombre del Empleado: </b>${val.fullName} </p>
//                             <p><b>Los jefes: </b>${jefesHtml}</p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         });

//         report__container.innerHTML = plantilla;
//     }
// });

// // -----------------------------Ejercicio 10----------------------------------------------------------------

// import { getDelayedOrdersPayPalClients} from "./module/clients.js";
// const queryAboutTable10 = document.querySelector("#queryAboutTable10");
// queryAboutTable10.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable10.children
//     if(!report__container.innerHTML){
//         let data = await getDelayedOrdersPayPalClients();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.client_name}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre del cliente: </b>${val.client_name}</p>
//                         <p><b>Estado: </b>${val.status}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // -----------------------------Ejercicio 11----------------------------------------------------------------

// import { lisOfProductRangesPurchasedByClient} from "./module/request_details.js";
// const queryAboutTable11 = document.querySelector("#queryAboutTable11");
// queryAboutTable11.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable11.children
//     if (!report__container.innerHTML) {
//         let data = await lisOfProductRangesPurchasedByClient();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Gama</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                     <p><b>Cliente: </b>${val.client_name}</p>
//                     <p><b>Gama: </b>${val.gama}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })



// // -----------------------------Tercera Parte----------------------------------------------------------------

// // -----------------------------Ejercicio 1----------------------------------------------------------------

// import { clientsNoPayments  } from "./module/clients.js";
// const queryAboutTable001 = document.querySelector("#queryAboutTable001");
// queryAboutTable001.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable001.children;
//     if (!report__container.innerHTML) {
//         let data = await clientsNoPayments ();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Clientes</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Cliente Nombre: </b>${val.client_name}</p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });



// // -----------------------------Ejercicio 2----------------------------------------------------------------

// import { clientsNoOrder  } from "./module/clients.js";
// const queryAboutTable002 = document.querySelector("#queryAboutTable002");
// queryAboutTable002.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable002.children;
//     if (!report__container.innerHTML) {
//         let data = await clientsNoOrder ();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Clientes</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Cliente Nombre: </b>${val.client_name}</p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });


// // -----------------------------Ejercicio 3----------------------------------------------------------------

// import { clientsNoPaymentsAndNoOrder } from "./module/clients.js";
// const queryAboutTable003 = document.querySelector("#queryAboutTable003");
// queryAboutTable003.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable003.children;
//     if (!report__container.innerHTML) {
//         let data = await clientsNoPaymentsAndNoOrder ();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Clientes</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Cliente Nombre: </b>${val.client_name}</p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });


// // -----------------------------Ejercicio 4----------------------------------------------------------------

// import { ListEmployeesWithoutAssociatedOffice } from "./module/employees.js";
// const queryAboutTable004 = document.querySelector("#queryAboutTable004");

// queryAboutTable004.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable004.children;

//     if (!report__container.innerHTML) {
//         let data = await ListEmployeesWithoutAssociatedOffice();
//         console.log(data);

//         let plantilla = "";

//         if (data.length === 0) {
//             plantilla = `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Empleado</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p>No hay empleados sin oficina</p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         } else {
//             data.forEach(val => {
//                 plantilla += `
//                     <div class="report__card">
//                         <div class="card__title">
//                             <div>Empleado</div>
//                         </div>
//                         <div class="card__body">
//                             <div class="body__marck">
//                                 <p><b>Empleado sin Oficina: </b>${val.name}</p>
//                             </div>
//                         </div>
//                     </div>
//                 `;
//             });
//         }

//         report__container.innerHTML = plantilla;
//     }
// });


// // -----------------------------Ejercicio 5----------------------------------------------------------------

// import { ListEmployeesWithoutAssociatedClient } from "./module/employees.js";
// const queryAboutTable005 = document.querySelector("#queryAboutTable005");
// queryAboutTable005.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable005.children;
//     if (!report__container.innerHTML) {
//         let data = await ListEmployeesWithoutAssociatedClient();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Empleados</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Nombre: </b>${val.name} ${val.lastname1} ${val.lastname2}</p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });


// // -----------------------------Ejercicio 6----------------------------------------------------------------

// import { listEmployeesWithoutAssociatedClientAndTheirOffices } from "./module/employees.js";
// const queryAboutTable006 = document.querySelector("#queryAboutTable006");
// queryAboutTable006.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable006.children;
//     if (!report__container.innerHTML) {
//         let data = await listEmployeesWithoutAssociatedClientAndTheirOffices();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Empleados</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Nombre: </b>${val.name} ${val.lastname1} ${val.lastname2}</p>
//                             <p><b>Oficina: </b>${val.code_office} </p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });


// // -----------------------------Ejercicio 7----------------------------------------------------------------

// import { ListEmployeesWithoutAssociatedOfficeAndClient } from "./module/employees.js";
// const queryAboutTable007 = document.querySelector("#queryAboutTable007");

// queryAboutTable007.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable007.children;

//     if (!report__container.innerHTML) {
//         let data = await ListEmployeesWithoutAssociatedOfficeAndClient();
//         console.log(data);

//         let plantilla = "";

//         if (data.length === 0) {
//             plantilla = `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Empleado</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p>No hay empleados sin oficina, Sin embargo si hay empleados que no tienen un cliente asociado.</p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         } else {
//             data.forEach(val => {
//                 plantilla += `
//                     <div class="report__card">
//                         <div class="card__title">
//                             <div>Empleado</div>
//                         </div>
//                         <div class="card__body">
//                             <div class="body__marck">
//                                 <p><b>Empleado sin Oficina: </b>${val.name}</p>
//                             </div>
//                         </div>
//                     </div>
//                 `;
//             });
//         }

//         report__container.innerHTML = plantilla;
//     }
// });



// // -----------------------------Ejercicio 8----------------------------------------------------------------

// import { productsNeverOrdered } from "./module/products.js";
// const queryAboutTable008 = document.querySelector("#queryAboutTable008");
// queryAboutTable008.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable008.children;
//     if (!report__container.innerHTML) {
//         let data = await productsNeverOrdered();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Productos</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Codigo Producto: </b>${val.code_product} </p>
//                             <p><b>Nombre: </b>${val.name} </p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });


// // -----------------------------Ejercicio 9----------------------------------------------------------------

// import { getAllProductsNeverOrderedWithDetails } from "./module/products.js";
// const queryAboutTable009 = document.querySelector("#queryAboutTable009");
// queryAboutTable009.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable009.children;
//     if (!report__container.innerHTML) {
//         let data = await getAllProductsNeverOrderedWithDetails();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Productos</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Codigo Producto: </b>${val.code_product} </p>
//                             <p><b>Name: </b>${val.name} </p>
//                             <p><b>Descripcion: </b>${val.description} </p>
//                             <p><b>Imagen: </b>${val.image} </p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });


// // -----------------------------Ejercicio 11----------------------------------------------------------------


// import { clientsWithOrderNoPayments } from "./module/clients.js";

// const queryAboutTable0011 = document.querySelector("#queryAboutTable0011");
// queryAboutTable0011.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable0011.children;
//     if (!report__container.innerHTML) {
//         let data = await clientsWithOrderNoPayments();
//         let plantilla = "";

//         if (typeof data === "string") {
//             // Si la respuesta es una cadena, significa que no hay clientes con pedidos no pagados
//             plantilla = `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Clientes</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p>${data}</p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         } else {
            
//             data.forEach(val => {
//                 plantilla += `
//                     <div class="report__card">
//                         <div class="card__title">
//                             <div>Cliente</div>
//                         </div>
//                         <div class="card__body">
//                             <div class="body__marck">
//                                 <p><b>Nombre: </b>${val.client_name}</p>
                                
//                             </div>
//                         </div>
//                     </div>
//                 `;
//             });
//         }
//         report__container.innerHTML = plantilla;
//     }
// });



// // -----------------------------Ejercicio 12----------------------------------------------------------------

// import { listEmployeesWithoutAssociatedClientAndTheirBosses } from "./module/employees.js";
// const queryAboutTable0012 = document.querySelector("#queryAboutTable0012");
// queryAboutTable0012.addEventListener("click", async (e) => {
//     let [, report__container] = queryAboutTable0012.children;
//     if (!report__container.innerHTML) {
//         let data = await listEmployeesWithoutAssociatedClientAndTheirBosses();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                     <div class="card__title">
//                         <div>Empleados</div>
//                     </div>
//                     <div class="card__body">
//                         <div class="body__marck">
//                             <p><b>Nombre: </b>${val.name} ${val.lastname1} ${val.lastname2}</p>
//                             <p><b>Jefe: </b>${val.boss} </p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// });


// import "./components/clock.js";
import { Mycard } from "./components/myCard.js";
import { Mydetails } from "./components/myDetails.js";


let btn = document.querySelectorAll("button")
let report__menu = document.querySelectorAll(".report__menu button")
let report__details = document.querySelector(".report__details")
btn.forEach(val =>{
    val.addEventListener("click", (e)=>{
        for(let val of report__menu) val.classList.remove('report__active');
        e.target.classList.add("report__active")
        
        // if(e.target.innerHTML=="clients"){
        //     report__details.innerHTML = /*html*/`
        //         <my-details logic="client_6" text="6.Devuelve un listado con el nombre de los todos los clientes españoles."></my-details>
        //         <my-details logic="client_16" text="16.Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y cuyo representante de ventas tenga el código de empleado 11 o 30."></my-details>
        //     `
        // }

        // if(e.target.innerHTML=="employees"){
        //     report__details.innerHTML = /*html*/`
        //         <my-details logic="employ_12" text="12. Devuelve un listado con los datos de los empleados que no  tienen clientes asociados y el nombre de su jefe asociado"></my-details>
            
        //     `;
        // }
        if(e.target.innerHTML=="offices"){
            report__details.innerHTML = /*html*/`
                <my-details logic="offices_1" text="1.Devuelve un listado con el código de oficina y la ciudad donde hay oficinas."></my-details>


                <my-details logic="offices_2" text="2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España."></my-details>
            
            `;
        }

        if(e.target.innerHTML=="employees"){
            report__details.innerHTML = /*html*/`
                <my-details logic="employees_1" text="3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7."></my-details>

                <my-details logic="employees_2" text="4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa."></my-details>

                <my-details logic="employees_3" text="5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas."></my-details>
            
            `;
        }


        if(e.target.innerHTML=="clients"){
            report__details.innerHTML = /*html*/`
                <my-details logic="client_1" text="6. Devuelve un listado con el nombre de los todos los clientes españoles."></my-details>

                <my-details logic="client_2" text="16.Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y cuyo representante de ventas tenga el código de empleado 11 o 30."></my-details>

                <my-details logic="client_3" text="1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas."></my-details>

                <my-details logic="client_4" text="2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas."></my-details>

                <my-details logic="client_5" text="3. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas."></my-details>

                <my-details logic="client_6" text="4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante."></my-details>

                <my-details logic="client_7" text="5. Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante."></my-details>

                <my-details logic="client_8" text="6. Devuelve un listado con el nombre de los todos los clientes españoles."></my-details>


            `;
        }

        if(e.target.innerHTML=="requests"){
            report__details.innerHTML = /*html*/`
                <my-details logic="requests_1" text="7. Devuelve un listado con los distintos estados por los que puede pasar un pedido."></my-details>


                <my-details logic="requests_2" text="9.Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo."></my-details>

                <my-details logic="requests_3" text="10.Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada."></my-details>

                <my-details logic="requests_4" text="11.Devuelve un listado de todos los pedidos que fueron **rechazados** en 2009."></my-details>

                <my-details logic="requests_5" text="12.Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año."></my-details>
            `;
        }

        if(e.target.innerHTML=="payments"){
            report__details.innerHTML = /*html*/`
                <my-details logic="payments_1" text="8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos."></my-details>

                <my-details logic="payments_2" text="13.Devuelve un listado con todos los pagos que se realizaron en el año 2008 mediante Paypal. Ordene el resultado de mayor a menor."></my-details>

                <my-details logic="payments_3" text="14.Devuelve un listado con todas las formas de pago que aparecen en la tabla pago. Tenga en cuenta que no deben aparecer formas de pago repetidas."></my-details>


            `;
        }


        if(e.target.innerHTML=="products"){
            report__details.innerHTML = /*html*/`
                <my-details logic="products_1" text="15.Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio."></my-details>



            
            `;
        }

    })
})
let [clients] = report__menu
clients.click();
customElements.define("my-details", Mydetails)
customElements.define("my-card", Mycard)