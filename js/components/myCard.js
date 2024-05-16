
import {getAllOfficesCodeAndCity,
        getAllOfficesFromSpainCityAndMovil
} from "../module/offices.js"


import {
    getAllEmployeesWithBossAndCodeSeven,
    getBossFullNameAndEmail,
    getAllNonSalesRepresentativeEmployees
} from "../module/employees.js"

import {
    getAllSpanishClientsNames
} from "../module/clients.js"

import {
    getAllOrderStatuses,
    getAllDelayedOrders,
    getDelayedOrdersList,
    getRejectedOrders2009,
    getOrdersDeliveredInJanuary
} from "../module/requests.js"

import {
    getUniqueClientCodesWithPaymentsIn2008,
    getPaypalPayments2008OrderedDescending
} from "../module/payments.js"


export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myCard.css">  
        `
    }


// 1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.



    async getAllOfficesCodeAndCityDesign(){
        let data = await getAllOfficesCodeAndCity();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Oficces 1</div>
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
    }
    

    // 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.

    async getAllOfficesFromSpainCityAndMovilDesign(){
        let data = await getAllOfficesFromSpainCityAndMovil();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Oficces 2</div>
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
    }


    // 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.

    async getAllEmployeesWithBossAndCodeSevenDesign(){
        let data = await getAllEmployeesWithBossAndCodeSeven();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Employees 1</div>
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
    }


    // 4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.

    async getBossFullNameAndEmailDesign(){
        let data = await getBossFullNameAndEmail();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Employees 2</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                         <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Email: </b>${val.email}</p>
                        <p><b>Posicion: </b>${val.position}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }


    // 5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.


    async getAllNonSalesRepresentativeEmployeesDesign(){
        let data = await getAllNonSalesRepresentativeEmployees();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Employees 3</div>
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
    }


    // 6. Devuelve un listado con el nombre de los todos los clientes españoles.

    async getAllSpanishClientsNamesDesign(){
            let data = await getAllSpanishClientsNames();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                    <div class="report__card">
                        <div class="card__title">
                            <div>Clients 1</div>
                        </div>
                        <div class="card__body">
                            <div class="body__marck">
                            <p><b>Nombre: </b>${val.nombre}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }


        // 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

        async getAllOrderStatusesDesign(){
            let data = await getAllOrderStatuses();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                    <div class="report__card">
                        <div class="card__title">
                            <div> Requests 1</div>
                        </div>
                        <div class="card__body">
                            <div class="body__marck">
                            <p><b>Estado: </b>${val}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        // 8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta:

        async getUniqueClientCodesWithPaymentsIn2008Design(){
            let data = await getUniqueClientCodesWithPaymentsIn2008();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                    <div class="report__card">
                        <div class="card__title">
                            <div> Payments 1</div>
                        </div>
                        <div class="card__body">
                            <div class="body__marck">
                            <p><b>Codigo: </b>${val.codigo}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }


        // 9.Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

        async getAllDelayedOrdersDesign(){
            let data = await getAllDelayedOrders();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                    <div class="report__card">
                        <div class="card__title">
                            <div> Requests 2</div>
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
        }



        // 10.Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

        async getDelayedOrdersListDesign(){
            let data = await getDelayedOrdersList();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                    <div class="report__card">
                        <div class="card__title">
                            <div> Requests 3</div>
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
        }

        // 11.Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`.


        async getRejectedOrders2009Design(){
            let data = await getRejectedOrders2009();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                    <div class="report__card">
                        <div class="card__title">
                            <div> Requests 4</div>
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
        }


        // 12.Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año.


        async getOrdersDeliveredInJanuaryDesign(){
            let data = await getOrdersDeliveredInJanuary();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                    <div class="report__card">
                        <div class="card__title">
                            <div> Requests 5</div>
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
        }

        // 13.Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor.


        async getPaypalPayments2008OrderedDescendingDesign(){
            let data = await getPaypalPayments2008OrderedDescending();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                    <div class="report__card">
                        <div class="card__title">
                            <div> Payments 2</div>
                        </div>
                        <div class="card__body">
                            <div class="body__marck">
                            <p><b>Codigo cliente: </b>${val.code_client}</p>
                             <p><b>Payments: </b>${val.payment}</p>
                             <p><b>ID Transaccion: </b>${val.id_transaction}</p>
                             <p><b>Total: </b>${val.total}</p>
                             <p><b>ID: </b>${val.id}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }



  
    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        if(name=="logic" && now=="offices_1") this.getAllOfficesCodeAndCityDesign() //1
        if(name=="logic" && now=="offices_2") this.getAllOfficesFromSpainCityAndMovilDesign() 

        if(name=="logic" && now=="employees_1") this.getAllEmployeesWithBossAndCodeSevenDesign()
        
        if(name=="logic" && now=="employees_2") this.getBossFullNameAndEmailDesign()

        if(name=="logic" && now=="employees_3") this.getAllNonSalesRepresentativeEmployeesDesign()

        if(name=="logic" && now=="client_1") this.
        getAllSpanishClientsNamesDesign()

        if(name=="logic" && now=="requests_1") this.
        getAllOrderStatusesDesign()

        if(name=="logic" && now=="payments_1") this.
        getUniqueClientCodesWithPaymentsIn2008Design()

        if(name=="logic" && now=="requests_2") this.
        getAllDelayedOrdersDesign()

        if(name=="logic" && now=="requests_3") this.
        getDelayedOrdersListDesign()

        if(name=="logic" && now=="requests_4") this.
        getRejectedOrders2009Design()

        if(name=="logic" && now=="requests_5") this.
        getOrdersDeliveredInJanuaryDesign()

        if(name=="logic" && now=="payments_2") this.
        getPaypalPayments2008OrderedDescendingDesign()


        // if(name=="logic" && now=="client_16") this.getAllClientsFromSpainAndRepresentative11Or30Design()
        // if(name=="logic" && now=="employ_12") this.getAllEmployNotClientsDesign()
    }
}