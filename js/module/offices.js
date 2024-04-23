// 1. devuelve un listado con el codigo de oficina y la ciudad donde hay oficinas

export const getAllOfficesCodeAndCity = async  () => {
    let res = await fetch("http://localhost:5504/offices")
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
    let res = await fetch ("http://localhost:5504/offices?country=España")
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