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