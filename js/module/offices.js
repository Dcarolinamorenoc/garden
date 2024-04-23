// 1. devuelve un listado con el codigo de oficina y la ciudad donde hay oficinas

export const getAll = async  () => {
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