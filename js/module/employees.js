// 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.


export const getAllEmployeesWithBossAndCodeSeven = async() =>{
    let rest = await fetch ("http://localhost:5342/employees?code_boss=7")
    let data = await rest.json();
    let dataUpdate = [];
    data.forEach(val => {
        let [email] = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)
        dataUpdate.push({
            nombre: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            email
        });
    });
    return dataUpdate;
}

// 4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.

export const getBossFullNameAndEmail = async () => {
    let res = await fetch("http://localhost:5342/employees");
    let data = await res.json();
    let filteredData = data.filter(val => val.code_boss == null);
    return filteredData.map(val => ({
        nombre: val.name,
        apellidos: `${val.lastname1} ${val.lastname2}`,
        email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0],
        position: val.position
    }));
};

// 5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.

export const getAllNonSalesRepresentativeEmployees = async () => {
    let res = await fetch("http://localhost:5342/employees?position_ne=Representante%20Ventas")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            nombre: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            puesto: val.position
        })
    });
    return dataUpdate;
}



// ------------------------------------------------------------------------------



// Consultas multitabla (Composición interna)

// 7. Devuelve el nombre de los clientes y el nombre de sus representantes 
// junto con la ciudad de la oficina a la que pertenece el representante.


// Obtener la informacion de un empleado por su codigo

export const getEmployByCode = async(code) =>{
    let res = await fetch(`http://localhost:5342/employees?employee_code=${code}`);
    let dataClients = await res.json();
    return dataClients;
}

// 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.

export const getEmployeeData = async (code) => {
    let res = await fetch(`http://localhost:5342/employees?employee_code=${code}`);
    let dataClients = await res.json();
    return dataClients;
}

// 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
// 3. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas.
// 4.Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
// 5. Devuelve el nombre de los clientes que no hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getEmployeesSales = async (code) => {
    let res = await fetch(`http://localhost:5342/employees?employee_code=${code}`);
    let dataClients = await res.json();
    return dataClients;
}



export const getAllEmploy = async() =>{
    let res = await fetch(`http://localhost:5342/employees`);
    let data = await res.json();
    return data;
}
//9. Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe.


export const getEmployeesWithBossAndBossOfBoss = async () => {
    let dataEmployees = await getAllEmploy();
    for (let i = 0; i < dataEmployees.length; i++) {
        let { code_boss, name, lastname1, lastname2 } = dataEmployees[i];
        let bossNames = [];
        let fullName = `${name} ${lastname1} ${lastname2}`; 
        if (!code_boss) {
            dataEmployees[i] = { fullName };
            continue; // Pasar al siguiente empleado si no tiene jefe
        }
        do {
            let [boss] = await getEmployByCode(code_boss);
            if (!boss) break;
            bossNames.push(boss.name); // Almacena el nombre del jefe en un array
            code_boss = boss.code_boss;
        } while (code_boss);
        dataEmployees[i] = { fullName, jefes: bossNames.reverse() }; // Invertir el orden para que estén en orden ascendente
    }
    return dataEmployees;
};


// 8.Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.

export const getEmployeesWithBossesAndBossesOfBosses = async () => {
    let dataEmployees = await getAllEmploy();
    for (let i = 0; i < dataEmployees.length; i++) {
        let { code_boss, name, lastname1, lastname2 } = dataEmployees[i];
        let bossName = null;
        if (code_boss) {
            let [boss] = await getEmployByCode(code_boss);
            if (boss) {
                bossName = boss.name; // Almacena el nombre del jefe
            }
        }
        dataEmployees[i] = { name, lastname1, lastname2, boss: bossName };
    }
    return dataEmployees;
};


// -------------------------------------------------------

// Consultas multitabla (Composición externa)

export const getEmployees = async () => {
    let res = await fetch("http://localhost:5342/employees");
    let dataOffices = await res.json();
    return dataOffices;
}



import {
    getOffices
} from './offices.js';



// 4. Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada.


export const ListEmployeesWithoutAssociatedOffice = async () => {
    let employees = await getEmployees(); // Obtener datos de empleados


    let offices = await getOffices(); // Obtener datos de oficinas

    // Verificar si hay al menos una oficina asociada
    if (offices.length > 0) {
        let officeCodes = offices.map(office => office.code_office); // Obtener solo los códigos de oficina

        // Filtrar empleados que no tienen una oficina asociada
        let employeesWithoutOffice = employees.filter(employee => !officeCodes.includes(employee.code_office));
        console.log("Empleados sin oficina:", employeesWithoutOffice); // Depuración: Verificar los empleados sin oficina

        // Retornar la lista filtrada de empleados
        return employeesWithoutOffice;
    } else {
        // Si no hay oficinas asociadas, retornar el mensaje
        console.log("No hay oficinas asociadas");
    }
};


// 5.Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado.

import { getClientsOk } from './clients.js';

export const getEmployeesCodeOffice = async () => {
    let res = await fetch(`http://localhost:5342/employees`)
    let data = await res.json()
    return data
}

export const ListEmployeesWithoutAssociatedClient = async () => {
    let employees = await getEmployeesCodeOffice(); 
    let clients = await getClientsOk();

    if (clients.length > 0) {
        let clientEmployeeCodes = clients.map(client => client.code_employee_sales_manager); 
        let employeesWithoutClient = employees.filter(employee => !clientEmployeeCodes.includes(employee.employee_code));

        // Mapear los datos para devolver nombre, primer apellido, segundo apellido y código de oficina
        let simplifiedData = employeesWithoutClient.map(employee => ({
            name: employee.name,
            lastname1: employee.lastname1,
            lastname2: employee.lastname2,
            code_office: employee.code_office // Agregar código de oficina
        }));

        return simplifiedData;
    } 
};



// 6. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado junto con los datos de la oficina donde trabajan.

export const listEmployeesWithoutAssociatedClientAndTheirOffices = async () => {
    let employees = await getEmployeesCodeOffice(); 
    let clients = await getClientsOk();

    if (clients.length > 0) {
        let clientEmployeeCodes = clients.map(client => client.code_employee_sales_manager); 

        // Filtrar los empleados que no tienen cliente asociado
        let employeesWithoutClient = employees.filter(employee => {
            // Verificar si el código de empleado del empleado no está presente en los códigos de empleados de los clientes
            return !clientEmployeeCodes.includes(employee.employee_code);
        });

        // Obtener las oficinas de los empleados sin cliente asociado
        let offices = employeesWithoutClient.map(employee => {
            return {
                name: employee.name,
                lastname1: employee.lastname1,
                lastname2: employee.lastname2,
                code_office: employee.code_office
            };
        });

        return offices;
    } 
};


// 7. Devuelve un listado que muestre los empleados que no tienen una oficina asociada y los que no tienen un cliente asociado.

export const ListEmployeesWithoutAssociatedOfficeAndClient = async () => {
    let employees = await getEmployees(); // Obtener datos de empleados


    let offices = await getOffices(); // Obtener datos de oficinas

    // Verificar si hay al menos una oficina asociada
    if (offices.length > 0) {
        let officeCodes = offices.map(office => office.code_office); // Obtener solo los códigos de oficina

        // Filtrar empleados que no tienen una oficina asociada
        let employeesWithoutOffice = employees.filter(employee => !officeCodes.includes(employee.code_office));
        console.log("Empleados sin oficina:", employeesWithoutOffice); // Depuración: Verificar los empleados sin oficina

        // Retornar la lista filtrada de empleados
        return employeesWithoutOffice;
    } else {
        // Si no hay oficinas asociadas, retornar el mensaje
        console.log("No hay oficinas asociadas");
    }
};





// 12. Devuelve un listado con los datos de los empleados que no tienen clientes asociados y el nombre de su jefe asociado.

export const listEmployeesWithoutAssociatedClientAndTheirBosses = async () => {
    let employees = await getEmployeesCodeOffice(); 
    let clients = await getClientsOk();

    if (clients.length > 0) {
        let clientEmployeeCodes = clients.map(client => client.code_employee_sales_manager); 

        // Filtrar los empleados que no tienen cliente asociado
        let employeesWithoutClient = employees.filter(employee => {
            // Verificar si el código de empleado del empleado no está presente en los códigos de empleados de los clientes
            return !clientEmployeeCodes.includes(employee.employee_code);
        });

        // Obtener los datos de los empleados sin cliente asociado junto con el nombre de su jefe
        let employeesWithoutClientAndTheirBosses = employeesWithoutClient.map(employee => {
            // Buscar al jefe del empleado
            let boss = employees.find(emp => emp.employee_code === employee.code_boss);
            return {
                
                    name: employee.name,
                    lastname1: employee.lastname1,
                    lastname2: employee.lastname2,
                boss: boss ? boss.name + ' ' + boss.lastname1 : 'Sin jefe asignado'
            };
        });

        return employeesWithoutClientAndTheirBosses;
    } 
};