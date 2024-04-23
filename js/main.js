import {
    getAllOfficesCodeAndCity, 
    getAllOfficesFromSpainCityAndMovil
} from "./module/offices.js";

// console.log(await getAllOfficesFromSpainCityAndMovil());

import{
    getAll,
    getAllEmployeesWithBossAndCodeSeven,
    getBossFullNameAndEmail
} from "./module/employees.js";

// console.log(await getAllEmployeesWithBossAndCodeSeven());
// console.log(await getBossFullNameAndEmail());

console.log(await getAll());