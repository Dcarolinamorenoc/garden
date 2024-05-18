
import {getAllOfficesCodeAndCity,
        getAllOfficesFromSpainCityAndMovil
} from "../module/offices.js"


import {
    getAllEmployeesWithBossAndCodeSeven,
    getBossFullNameAndEmail,
    getAllNonSalesRepresentativeEmployees,
    getEmployeesWithBossesAndBossesOfBosses,
    getEmployeesWithBossAndBossOfBoss,
    ListEmployeesWithoutAssociatedOffice,
    ListEmployeesWithoutAssociatedClient
} from "../module/employees.js"

import {
    getAllSpanishClientsNames,
    getClientsInMadridWithSalesRep11Or30,
    getEmployeesCode,
    getClientsWithSalesRepresentatives,
    getClientsWithoutPayments,
    getClientsWithPaymentsAndSalesRepresentativesAndOfficeCity,
    getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCity,
    getOfficesClientsInFuenlabrada,
    getClientsEmploy,
    getDelayedOrdersPayPalClients,
    clientsNoPayments,
    clientsNoOrder,
    clientsNoPaymentsAndNoOrder
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
    getPaypalPayments2008OrderedDescending,
    getAllUniquePaymentMethods
} from "../module/payments.js"

import {
    getOrnamentalProductsOver100StockByPrice
} from "../module/products.js"


import{
    lisOfProductRangesPurchasedByClient
} from "../module/request_details.js"

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

        // 14.Devuelve un listado con todas las formas de pago que aparecen en la tabla `pago`. Tenga en cuenta que no deben aparecer formas de pago repetidas.


        async getAllUniquePaymentMethodsDesign(){
            let data = await getAllUniquePaymentMethods();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                    <div class="report__card">
                        <div class="card__title">
                            <div> Payments 3</div>
                        </div>
                        <div class="card__body">
                            <div class="body__marck">
                            <p><b>Método de Pago: </b>${val}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        // 15.Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.

        async getOrnamentalProductsOver100StockByPriceDesign(){
            let data = await getOrnamentalProductsOver100StockByPrice();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                    <div class="report__card">
                        <div class="card__title">
                            <div>Products 1</div>
                        </div>
                        <div class="card__body">
                            <div class="body__marck">
                            <p><b>Producto: </b>${val.name}</p>
                             <p><b>Precio: </b>${val.price_sale}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        // 16.Devuelve un listado con todos los clientes que sean de la ciudad de `Madrid` y cuyo representante de ventas tenga el código de empleado `11` o `30`.

        async getClientsInMadridWithSalesRep11Or30Design(){
            let data = await getClientsInMadridWithSalesRep11Or30();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                    <div class="report__card">
                        <div class="card__title">
                            <div>Clients 2</div>
                        </div>
                        <div class="card__body">
                            <div class="body__marck">
                            <p><b>Clientes: </b>${val.client_name}</p>
                             <p><b>Ciudad: </b>${val.city}</p>
                             <p><b>Codigo empleado:</b> ${val.code_employee_sales_manager}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }


        // Consultas multitabla (Composición interna)

        // 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.


        async getEmployeesCodeDesign(){
            let data = await getEmployeesCode();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                    <div class="report__card">
                        <div class="card__title">
                            <div>Clients 3</div>
                        </div>
                        <div class="card__body">
                            <div class="body__marck">
                            <p><b>Cliente Nombre: </b>${val.client_name}</p>
                             <p><b>Nombre empleado: </b>${val.name_employee }</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }


        // 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.


        async getClientsWithSalesRepresentativesDesign(){
            let data = await getClientsWithSalesRepresentatives();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                    <div class="report__card">
                        <div class="card__title">
                            <div>Clients 4</div>
                        </div>
                        <div class="card__body">
                            <div class="body__marck">
                            <p><b>Cliente Nombre: </b>${val.client_name}</p>
                             <p><b>Nombre empleado: </b>${val.name_employee }</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }


        // 3. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.

        async getClientsWithoutPaymentsDesign(){
            let data = await getClientsWithoutPayments();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                    <div class="report__card">
                        <div class="card__title">
                            <div>Clients 5</div>
                        </div>
                        <div class="card__body">
                            <div class="body__marck">
                            <p><b>Cliente Nombre: </b>${val.client_name}</p>
                            <p><b>Nombre empleado: </b>${val.name_employee }</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }


        // 4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

        async getClientsWithPaymentsAndSalesRepresentativesAndOfficeCityDesign(){
            let data = await getClientsWithPaymentsAndSalesRepresentativesAndOfficeCity();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                    <div class="report__card">
                        <div class="card__title">
                            <div>Clients 6</div>
                        </div>
                        <div class="card__body">
                            <div class="body__marck">
                            <p><b>Cliente Nombre: </b>${val.client_name}</p>
                            <p><b>Nombre empleado: </b>${val.name_employee }</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }


        // 5. Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

        async getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCityDesign(){
            let data = await getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCity();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                    <div class="report__card">
                        <div class="card__title">
                            <div>Clients 7</div>
                        </div>
                        <div class="card__body">
                            <div class="body__marck">
                            <p><b>Ciudad: </b>${val.city}</p>
                            <p><b>Nombre empleado: </b>${val.name_employee }</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }


        // Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.


        async getOfficesClientsInFuenlabradaDesign(){
            let data = await getOfficesClientsInFuenlabrada();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                    <div class="report__card">
                        <div class="card__title">
                            <div>Clients 8</div>
                        </div>
                        <div class="card__body">
                            <div class="body__marck">
                            <p><b>Codigo: </b>${val.codigo}</p>
                            <p><b>Direccion 1: </b>${val.direccion1}</p>
                            <p><b>Direccion 2: </b>${val.direccion2}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }


        // 7. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

        async getClientsEmployDesign(){
            let data = await getClientsEmploy();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                    <div class="report__card">
                        <div class="card__title">
                            <div>offices 3</div>
                        </div>
                        <div class="card__body">
                            <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                         <p><b>Ciudad: </b>${val.city}</p>
                         <p><b>Cliente: </b>${val.client_name}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        // 8. Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.

        async getEmployeesWithBossesAndBossesOfBossesDesign(){
                    let data = await getEmployeesWithBossesAndBossesOfBosses();
                    data.forEach(val => {
                        this.shadowRoot.innerHTML += /*html*/`
                            <div class="report__card">
                                <div class="card__title">
                                    <div>Employees 4</div>
                                </div>
                                <div class="card__body">
                                    <div class="body__marck">
                                    <p><b>Nombre: </b>${val.name} ${val.lastname1} ${val.lastname2}</p>
                                    <p><b>Nombre jefe: </b>${val.boss}</p>
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                }


            // 9. Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe.




            async getEmployeesWithBossAndBossOfBossDesign() {
                let data = await getEmployeesWithBossAndBossOfBoss();
                data.forEach(val => {
                    let bossNames = val.jefes ? val.jefes.join(', ') : '';
                    this.shadowRoot.innerHTML += /*html*/ `
                        <div class="report__card">
                            <div class="card__title">
                                <div>Employees 5</div>
                            </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Nombre del Empleado: </b>${val.fullName}</p>
                                    <p><b>Los jefes: </b>${bossNames}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
            

            // 10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.
            


            async getDelayedOrdersPayPalClientsDesign(){
                let data = await getDelayedOrdersPayPalClients();
                data.forEach(val => {
                    this.shadowRoot.innerHTML += /*html*/`
                        <div class="report__card">
                            <div class="card__title">
                                <div>Clients 9</div>
                            </div>
                            <div class="card__body">
                                <div class="body__marck">
                                <p><b>Nombre del cliente: </b>${val.client_name}</p>
                                <p><b>Estado: </b>${val.status}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }

            // 11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.


            async lisOfProductRangesPurchasedByClientDesign(){
                let data = await lisOfProductRangesPurchasedByClient();
                data.forEach(val => {
                    this.shadowRoot.innerHTML += /*html*/`
                        <div class="report__card">
                            <div class="card__title">
                                <div>Request Details 1</div>
                            </div>
                            <div class="card__body">
                                <div class="body__marck">
                                <p><b>Cliente: </b>${val.client_name}</p>
                                <p><b>Gama: </b>${val.gama}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }

            // 1. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago.


            async clientsNoPaymentsDesign(){
                let data = await clientsNoPayments();
                data.forEach(val => {
                    this.shadowRoot.innerHTML += /*html*/`
                        <div class="report__card">
                            <div class="card__title">
                                <div>Clients 10</div>
                            </div>
                            <div class="card__body">
                                <div class="body__marck">
                                <p><b>Cliente Nombre: </b>${val.client_name}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }

            // 2. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pedido.

            async clientsNoOrderDesign(){
                let data = await clientsNoOrder();
                data.forEach(val => {
                    this.shadowRoot.innerHTML += /*html*/`
                        <div class="report__card">
                            <div class="card__title">
                                <div>Clients 11</div>
                            </div>
                            <div class="card__body">
                                <div class="body__marck">
                                <p><b>Cliente Nombre: </b>${val.client_name}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }


            // 3. Devuelve un listado que muestre los clientes que no han realizado ningún pago y los que no han realizado ningún pedido.


            async clientsNoPaymentsAndNoOrderDesign(){
                let data = await clientsNoPaymentsAndNoOrder();
                data.forEach(val => {
                    this.shadowRoot.innerHTML += /*html*/`
                        <div class="report__card">
                            <div class="card__title">
                                <div>Clients 12</div>
                            </div>
                            <div class="card__body">
                                <div class="body__marck">
                                <p><b>Empleado sin Oficina: </b>${val.name}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }


            // 4. Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada.

            async ListEmployeesWithoutAssociatedOfficeDesign(){
                // Importar la función para obtener empleados sin oficina asociada
                const data = await ListEmployeesWithoutAssociatedOffice();
                
                // Verificar si no hay empleados sin oficina asociada
                if (data.length === 0) {
                    this.shadowRoot.innerHTML += /*html*/`
                        <div class="report__card">
                            <div class="card__title">
                                <div>Employees 6</div>
                            </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p>No hay empleados sin oficina asociada</p>
                                </div>
                            </div>
                        </div>
                    `;
                } else {
                    // Mostrar los datos en la interfaz
                    data.forEach(val => {
                        this.shadowRoot.innerHTML += /*html*/`
                            <div class="report__card">
                                <div class="card__title">
                                    <div>Employees 6</div>
                                </div>
                                <div class="card__body">
                                    <div class="body__marck">
                                        <p><b>Empleado sin Oficina: </b>${val.nombre} ${val.apellido}</p>
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                }
            }

            // 5. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado.


            async ListEmployeesWithoutAssociatedClientDesign(){
                let data = await ListEmployeesWithoutAssociatedClient();
                data.forEach(val => {
                    this.shadowRoot.innerHTML += /*html*/`
                        <div class="report__card">
                            <div class="card__title">
                                <div>Employees 7</div>
                            </div>
                            <div class="card__body">
                                <div class="body__marck">
                                <p><b>Nombre: </b>${val.name} ${val.lastname1} ${val.lastname2}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }

            // 6. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado junto con los datos de la oficina donde trabajan.
            


  
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

        if(name=="logic" && now=="payments_3") this.
        getAllUniquePaymentMethodsDesign()

        if(name=="logic" && now=="products_1") this.
        getOrnamentalProductsOver100StockByPriceDesign()

        if(name=="logic" && now=="client_2") this.
        getClientsInMadridWithSalesRep11Or30Design()

        if(name=="logic" && now=="client_3") this.
        getEmployeesCodeDesign()

        if(name=="logic" && now=="client_4") this.
        getClientsWithSalesRepresentativesDesign()

        if(name=="logic" && now=="client_5") this.
        getClientsWithoutPaymentsDesign()

        if(name=="logic" && now=="client_6") this.
        getClientsWithPaymentsAndSalesRepresentativesAndOfficeCityDesign()

        if(name=="logic" && now=="client_7") this.
        getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCityDesign()

        if(name=="logic" && now=="offices_3") this.
        getOfficesClientsInFuenlabradaDesign()

        if(name=="logic" && now=="client_8") this.
        getClientsEmployDesign()

        if(name=="logic" && now=="employees_4") this.getEmployeesWithBossesAndBossesOfBossesDesign()

        if(name=="logic" && now=="employees_5") this.getEmployeesWithBossAndBossOfBossDesign()

        if(name=="logic" && now=="client_9") this.
        getDelayedOrdersPayPalClientsDesign()

        if(name=="logic" && now=="requests_details_1") this.
        lisOfProductRangesPurchasedByClientDesign()

        if(name=="logic" && now=="client_10") this.
        clientsNoPaymentsDesign()

        if(name=="logic" && now=="client_11") this.
        clientsNoOrderDesign()

        if(name=="logic" && now=="client_12") this.
        clientsNoPaymentsAndNoOrderDesign()

        if(name=="logic" && now=="employees_6") this.ListEmployeesWithoutAssociatedOfficeDesign()

        if(name=="logic" && now=="employees_7") this.ListEmployeesWithoutAssociatedClientDesign()


        // if(name=="logic" && now=="client_16") this.getAllClientsFromSpainAndRepresentative11Or30Design()
        // if(name=="logic" && now=="employ_12") this.getAllEmployNotClientsDesign()
    }
}