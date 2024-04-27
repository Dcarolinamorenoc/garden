// 6.Devuelve un listado con el nombre de los todos los clientes españoles.

export const getAllSpanishClientsNames =  async() =>{
    let res = await fetch ("http://localhost:5501/clients?country=Spain")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            nombre: val.client_name,
        })
    });
    return dataUpdate;

}
// 16.Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y cuyo representante de ventas tenga el código de empleado 11 o 30.

export const getClientsInMadridWithSalesRep11Or30 = async () => {
    let res = await fetch("http://localhost:5501/clients?city=Madrid");
    let data = await res.json();
    let dataUpdate = [];

    data.forEach(val => {
        if (val.code_employee_sales_manager === 11 || val.code_employee_sales_manager === 30){
            dataUpdate.push(val);    
        }
    });
    return dataUpdate;
}









// ------------------------------------------------------------------------------


// importes aqui

import { 
    getEmployByCode,
    getEmployeeData,
    getEmployeesSales
} from "./employees.js";

import { 
    getOfficesByCode
} from "./offices.js";

import {
    getPaymentsWithSales
} from "./payments.js"

import{
    getAllPaymentsStatus
} from "./requests.js"



// -------------------------------------------------------

// Consultas multitabla (Composición interna)

// 7. Devuelve el nombre de los clientes y el nombre de sus representantes 
// junto con la ciudad de la oficina a la que pertenece el representante.

export const getClientsEmploy = async() =>{
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1:address1Client,
            address2:address2Client,
            city,
            region:regionClients,
            country:countryClients,
            postal_code:postal_codeClients,
            limit_credit,
            id:idClients,
            ...clientsUpdate
        } = clients[i];

        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            extension,
            email,
            code_boss,
            position,
            id:idEmploy,
            name,
            lastname1,
            lastname2,
            employee_code,
            ...employUpdate
        } = employ

        let [office] = await getOfficesByCode(employUpdate.code_office)

        let {
            country:countryOffice,
            region:regionOffice,
            postal_code:postal_codeOffice,
            movil,
            address1:address1Office,
            address2:address2Office,
            id:idOffice,
            ...officeUpdate
        } = office


        let data = {...clientsUpdate, ...employUpdate, ...officeUpdate};
        let {
            code_employee_sales_manager,
            code_office,
            ...dataUpdate       
        }=data;

        dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`
        clients[i] = dataUpdate
    }
    // [
    //     {
    //         city: "San Francisco"
    //         client_name : "GoldFish Garden"
    //         name_employee: "Walter Santiago Sanchez Lopez"
    //     }
    // ]
    return clients;
}

// 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.

export const getEmployeesCode = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1:address1Client,
            address2:address2Client,
            city,
            region:regionClients,
            country:countryClients,
            postal_code:postal_codeClients,
            limit_credit,
            id:idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];

        let [employ] = await getEmployeeData(code_employee_sales_manager);
        let {
            extension,
            email,
            code_boss,
            position,
            id: idEmploy,
            name,
            lastname1,
            lastname2,
            code_office,
            employee_code,
            ...employUpdate
        } = employ;

        let data = {...clientsUpdate, ...employUpdate};
        let {
            code_employee_sales_manager: codeEmployeeSalesManager,
            ...dataUpdate       
        } = data;

        dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`;
        clients[i] = dataUpdate;
    }
    return clients;
};


// 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getClientsWithSalesRepresentatives = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsWithPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];


        let [pay] = await getPaymentsWithSales(client_code);

        // Si hay pagos asociados, incluir al cliente en la lista de clientes con pagos
        if (pay) {
            let [employ] = await getEmployeesSales(code_employee_sales_manager);
            let {
                client_code,
                extension,
                email,
                code_boss,
                position,
                id: idEmploy,
                name,
                lastname1,
                lastname2,
                code_office,
                employee_code,
                ...employUpdate
            } = employ;

            let {
                code_client,
                payment: paymentClients,
                id_transaction: transactionClients,
                date_payment,
                total,
                id: idPayments,
                ...paymentsUpdate
            } = pay;

            let dataUpdate = {
                ...clientsUpdate,
                ...employUpdate,
                ...paymentsUpdate
            };

            dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`;
            clientsWithPayments.push(dataUpdate);
        }
    }
    return clientsWithPayments;
};




// 3. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getClientsWithoutPayments = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsWithoutPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];

        // Obtener los pagos asociados al cliente
        let [pay] = await getPaymentsWithSales(client_code);

        // Si no hay pagos asociados, incluir al cliente en la lista de clientes sin pagos
        if (!pay) {
            let [employ] = await getEmployeesSales(code_employee_sales_manager);
            let {
                extension,
                email,
                code_boss,
                position,
                id: idEmploy,
                name,
                lastname1,
                lastname2,
                code_office,
                employee_code,
                ...employUpdate
            } = employ;

            let dataUpdate = {
                ...clientsUpdate,
                ...employUpdate
            };

            dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`;
            clientsWithoutPayments.push(dataUpdate);
        }
    }
    return clientsWithoutPayments;
};




// 4.Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.


export const getClientsWithPaymentsAndSalesRepresentativesAndOfficeCity = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsWithPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];

        let [pay] = await getPaymentsWithSales(client_code);

        // Si hay pagos asociados, incluir al cliente en la lista de clientes con pagos
        if (pay) {
            let [employ] = await getEmployeesSales(code_employee_sales_manager);
            let {
                extension,
                email,
                code_boss,
                position,
                id: idEmploy,
                name,
                lastname1,
                lastname2,
                code_office,
                employee_code,
                ...employUpdate
            } = employ;

            let {
                code_client,
                payment: paymentClients,
                id_transaction: transactionClients,
                date_payment,
                total,
                id: idPayments,
                ...paymentsUpdate
            } = pay;

            let [office] = await getOfficesByCode(code_office);

            if (office) {
                let {
                    country: countryOffice,
                    region: regionOffice,
                    postal_code: postal_codeOffice,
                    movil,
                    code_office,
                    address1: address1Office,
                    address2: address2Office,
                    id: idOffice,
                    ...officeUpdate
                } = office;

                let dataUpdate = {
                    ...clientsUpdate,
                    ...employUpdate,
                    ...paymentsUpdate,
                    ...officeUpdate
                };

                dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`;
                clientsWithPayments.push(dataUpdate);
            } 
        }
    }
    return clientsWithPayments;
};



// 5. Devuelve el nombre de los clientes que no hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCity = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsWithoutPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];

        // Obtener los pagos asociados al cliente
        let [pay] = await getPaymentsWithSales(client_code);

        // Si no hay pagos asociados, incluir al cliente en la lista de clientes sin pagos
        if (!pay) {
            let [employ] = await getEmployeesSales(code_employee_sales_manager);
            let {
                extension,
                email,
                code_boss,
                position,
                id: idEmploy,
                name,
                lastname1,
                lastname2,
                code_office,
                employee_code,
                ...employUpdate
            } = employ;

            // Obtener la información de la oficina a partir del código de la oficina del representante
            let [office] = await getOfficesByCode(code_office);
            if (office) {
                let {
                    country: countryOffice,
                    region: regionOffice,
                    postal_code: postal_codeOffice,
                    movil,
                    code_office,
                    address1: address1Office,
                    address2: address2Office,
                    id: idOffice,
                    ...officeUpdate
                } = office;

                let dataUpdate = {
                    ...clientsUpdate,
                    ...employUpdate,
                    ...officeUpdate
                };

                dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`;
                clientsWithoutPayments.push(dataUpdate);
            }
        }
    }
    return clientsWithoutPayments;
};


// 6. Lista la dirección de las oficinas que tengan clientes en Fuenlabrada.

// export const getClientsFromFuenlabrada = async (code) => {
//     let res = await fetch(`http://localhost:5501/clients?city=${code}`);
//     let dataClients = await res.json();
//     return dataClients;
// }




// 6. Lista la dirección de las oficinas que tengan clientes en Fuenlabrada.
// Fuenlambra es un municipio y una ciudad española que forma parte de la Comunidad de Madrid. Se encuentra dentro del área metropolitana de Madrid y está situada a diecisiete kilómetros al suroeste de la capital.​

// export const getAllClientsFuenlabrada = async () => {
//     let res = await fetch("http://localhost:5501/clients?city=Fuenlabrada")
//     let data = await res.json()
//     let dataUpdate = []
//     data.forEach(val =>{
//         dataUpdate.push({
//             nombre_cliente: val.client_name,
//             codigo_cliente: val.client_code,
//             ciudad: val.city
//         })
//     });
//     return dataUpdate
// }




// 10.Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.

export const getDelayedOrdersPayPalClients = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();

    for (let i = 0; i < clients.length; i++) {
        let client = clients[i];

        let payments = await getAllPaymentsStatus(client.code_client); // Suponiendo que la función getAllPaymentsStatus acepta un código de cliente como parámetro

        for (let j = 0; j < payments.length; j++) {
            let payment = payments[j];

            let dataUpdate = {
                client_name: client.client_name,
                status: payment.status, // Asegúrate de que status sea la propiedad correcta
            };

            clients[i] = dataUpdate;
        }
    }

    return clients;
};

// -------------------------------------------------------

// Consultas multitabla (Composición externa)

// 1. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago.

export const clientsNoPayments = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsWithoutPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];

        // Obtener los pagos asociados al cliente
        let [pay] = await getPaymentsWithSales(client_code);

        // Si no hay pagos asociados, incluir al cliente en la lista de clientes sin pagos
        if (!pay) {
            let [employ] = await getEmployeesSales(code_employee_sales_manager);
            let {
                extension,
                email,
                code_boss,
                position,
                id: idEmploy,
                name,
                lastname1,
                lastname2,
                code_office,
                employee_code,
                ...employUpdate
            } = employ;

            let dataUpdate = {
                ...clientsUpdate,
                ...employUpdate
            };


            clientsWithoutPayments.push(dataUpdate);
        }
    }
    return clientsWithoutPayments;
};


