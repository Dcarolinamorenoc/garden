// 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.


export const getAllEmployeesWithBossAndCodeSeven = async() =>{
    let rest = await fetch ("http://localhost:5502/employees?code_boss=7")
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

export const getBossFullNameAndEmail = async() => {
    let res = await fetch ("http://localhost:5502/employees")
    let data = await res.json();
    let dataUpdate = [];

    data.forEach(val =>{
        if(val.code_boss == null){
            dataUpdate.nombre = val.name
            dataUpdate.apellidos = `${val.lastname1} ${val.lastname2}`
            dataUpdate.email = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
        }
    })
    return dataUpdate;
}

// 5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.

export const getAllNonSalesRepresentativeEmployees = async () => {
    let res = await fetch("http://localhost:5502/employees?position_ne=Representante%20Ventas")
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
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`);
    let dataClients = await res.json();
    return dataClients;
}