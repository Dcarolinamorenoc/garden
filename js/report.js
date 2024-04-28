import "./components/clock.js";


// -----------------------------Primera parte ----------------------------------------------------------------
// -----------------------------Ejercicio 1----------------------------------------------------------------

import { getAllOfficesCodeAndCity } from "./module/offices.js";
const queryAboutTable01 = document.querySelector("#queryAboutTable01");
queryAboutTable01.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable01.children
    if(!report__container.innerHTML){
        let data = await getAllOfficesCodeAndCity();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Oficinas</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo Oficina: </b>${val.codigo}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})



// -----------------------------Ejercicio 2----------------------------------------------------------------

import { getAllOfficesFromSpainCityAndMovil } from "./module/offices.js";
const queryAboutTable02 = document.querySelector("#queryAboutTable02");
queryAboutTable02.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable02.children
    if(!report__container.innerHTML){
        let data = await getAllOfficesFromSpainCityAndMovil();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Oficinas</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>ID: </b>${val.id}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                        <p><b>Telefono: </b>${val.telefono}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


// -----------------------------Ejercicio 3----------------------------------------------------------------

import { getAllEmployeesWithBossAndCodeSeven } from "./module/employees.js";
const queryAboutTable03 = document.querySelector("#queryAboutTable03");
queryAboutTable03.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable03.children
    if(!report__container.innerHTML){
        let data = await getAllEmployeesWithBossAndCodeSeven();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Empleados</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Email: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


// -----------------------------Ejercicio 4----------------------------------------------------------------

import { getBossFullNameAndEmail } from "./module/employees.js";
const queryAboutTable04 = document.querySelector("#queryAboutTable04");
queryAboutTable04.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable04.children
    if(!report__container.innerHTML){
        let data = await getBossFullNameAndEmail();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Empleados</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Email: </b>${val.email}</p>
                        <p><b>Posicion: </b>${val.posicion}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


// -----------------------------Ejercicio 5----------------------------------------------------------------

import { getAllNonSalesRepresentativeEmployees } from "./module/employees.js";
const queryAboutTable05 = document.querySelector("#queryAboutTable05");
queryAboutTable05.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable05.children;
    if (!report__container.innerHTML) {
        let data = await getAllNonSalesRepresentativeEmployees(); 
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Empleados</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Puesto: </b>${val.puesto}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
});


// -----------------------------Ejercicio 6----------------------------------------------------------------

import { getAllSpanishClientsNames } from "./module/clients.js";
const queryAboutTable06 = document.querySelector("#queryAboutTable06");
queryAboutTable06.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable06.children
    if(!report__container.innerHTML){
        let data = await getAllSpanishClientsNames();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Clientes</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


// -----------------------------Ejercicio 7----------------------------------------------------------------

import { getAllOrderStatuses } from "./module/requests.js";
const queryAboutTable07 = document.querySelector("#queryAboutTable07");
queryAboutTable07.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable07.children;
    if (!report__container.innerHTML) {
        let data = await getAllOrderStatuses();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Estados de Pedido</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Estado: </b>${val}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
});



// -----------------------------Ejercicio 8----------------------------------------------------------------

import { getUniqueClientCodesWithPaymentsIn2008 } from "./module/payments.js";
const queryAboutTable08 = document.querySelector("#queryAboutTable08");
queryAboutTable08.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable08.children;
    if (!report__container.innerHTML) {
        let data = await getUniqueClientCodesWithPaymentsIn2008();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Payments</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo: </b>${val.codigo}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
});

// -----------------------------Ejercicio 9----------------------------------------------------------------

import { getAllDelayedOrders } from "./module/requests.js";
const queryAboutTable09 = document.querySelector("#queryAboutTable09");
queryAboutTable09.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable09.children;
    if (!report__container.innerHTML) {
        let data = await getAllDelayedOrders();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Requests</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Pedido Codigo: </b>${val.Pedido_Codigo}</p>
                        <p><b>Cliente Codigo: </b>${val.Cliente_Codigo}</p>
                        <p><b>Fecha Esperada: </b>${val.Fecha_Esperada}</p>
                        <p><b>Fecha Entrega: </b>${val.Fecha_Entrega}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
});


// -----------------------------Ejercicio 10----------------------------------------------------------------

import { getDelayedOrdersList } from "./module/requests.js";
const queryAboutTable010 = document.querySelector("#queryAboutTable010");
queryAboutTable010.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable010.children;
    if (!report__container.innerHTML) {
        let data = await getDelayedOrdersList();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Requests</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Pedido Codigo: </b>${val.Pedido_Codigo}</p>
                        <p><b>Cliente Codigo: </b>${val.Cliente_Codigo}</p>
                        <p><b>Fecha Esperada: </b>${val.Fecha_Esperada}</p>
                        <p><b>Fecha Entrega: </b>${val.Fecha_Entrega}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
});



// -----------------------------Ejercicio 11----------------------------------------------------------------

import { getRejectedOrders2009 } from "./module/requests.js";
const queryAboutTable011 = document.querySelector("#queryAboutTable011");
queryAboutTable011.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable011.children;
    if (!report__container.innerHTML) {
        let data = await getRejectedOrders2009();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Requests</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Pedido Codigo: </b>${val.Pedido_Codigo}</p>
                        <p><b>Cliente Codigo: </b>${val.Cliente_Codigo}</p>
                        <p><b>Fecha Esperada: </b>${val.Fecha_Esperada}</p>
                        <p><b>Fecha Entrega: </b>${val.Fecha_Entrega}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
});


// -----------------------------Ejercicio 12----------------------------------------------------------------

import { getOrdersDeliveredInJanuary } from "./module/requests.js";
const queryAboutTable012 = document.querySelector("#queryAboutTable012");
queryAboutTable012.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable012.children;
    if (!report__container.innerHTML) {
        let data = await getOrdersDeliveredInJanuary();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Requests</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Pedido Codigo: </b>${val.Pedido_Codigo}</p>
                        <p><b>Cliente Codigo: </b>${val.Cliente_Codigo}</p>
                        <p><b>Fecha Esperada: </b>${val.Fecha_Esperada}</p>
                        <p><b>Fecha Entrega: </b>${val.Fecha_Entrega}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
});



// -----------------------------Segunda Parte----------------------------------------------------------------
// -----------------------------Ejercicio 7----------------------------------------------------------------

import { getClientsEmploy } from "./module/clients.js";
const queryAboutTable7 = document.querySelector("#queryAboutTable7");
queryAboutTable7.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable7.children
    if(!report__container.innerHTML){
        let data = await getClientsEmploy();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                        <p><b>Ciudad: </b>${val.city}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})