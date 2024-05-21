// 1. devuelve un listado con el codigo de oficina y la ciudad donde hay oficinas

export const getAllOfficesCodeAndCity = async  () => {
    let res = await fetch("http://172.16.101.146:5344/offices")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            codigo: val.code_office,
            ciudad: val.city
        })
    });
    return dataUpdate;
    }


// 2. devuelve un listado con la ciudad y el telefono de las oficinas de España.


export const getAllOfficesFromSpainCityAndMovil =  async() =>{
    let res = await fetch ("http://172.16.101.146:5344/offices?country=España")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            id: val.id,
            ciudad: val.city,
            telefono: val.movil
        })
    });
    return dataUpdate;
}





// ------------------------------------------------------------------------------




// Obtener la informacion de una oficina por su codigo
// 4.Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
// 7.Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
// 5. Devuelve el nombre de los clientes que no hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getOfficesByCode = async(code) =>{
    let res = await fetch(`http://172.16.101.146:5344/offices?code_office=${code}`);
    let dataClients = await res.json();
    return dataClients;
}



// Ejercicio aun no terminado esta en prueba

// 6. Lista la dirección de las oficinas que tengan clientes en Fuenlabrada.
// Fuenlambra es un municipio y una ciudad española que forma parte de la Comunidad de Madrid. Se encuentra dentro del área metropolitana de Madrid y está situada a diecisiete kilómetros al suroeste de la capital.​


export const getOfficesWithClientsInFuenlabrada = async () => {
    let res = await fetch("http://172.16.101.146:5344/offices?city=Fuenlabrada");
    let offices = await res.json();
    
    for (let i = 0; i < offices.length; i++) {
        let {
            country: countryOffice,
            region: regionOffice,
            postal_code: postal_codeOffice,
            movil,
            address1: address1Office,
            address2: address2Office,
            id: idOffice,
            city,
            ...officeUpdate
        } = offices[i];

        if (city === "Fuenlabrada") {
            let [client] = await getClientsFromFuenlabrada(city);

            if (client) {
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
                } = client;

                let data = { ...employUpdate, ...officeUpdate };
                data.name_employee = `${name} ${lastname1} ${lastname2}`;
                offices[i] = data;
            }
        }
    }
    
    return offices;
};


export const getOffices = async () => {
    let res = await fetch("http://172.16.101.146:5344/offices?code_office");
    let dataOffices = await res.json();
    return dataOffices;
}


export const getAllOffices = async() => {
    let res = await fetch("http://172.16.101.146:5344/offices");
    let data = await res.json()
    return data;
}

