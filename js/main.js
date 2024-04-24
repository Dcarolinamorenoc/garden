import {
    getAllOfficesCodeAndCity, 
    getAllOfficesFromSpainCityAndMovil
} from "./module/offices.js";

// console.log(await getAllOfficesFromSpainCityAndMovil());

import{
    getAllNonSalesRepresentativeEmployees,
    getAllEmployeesWithBossAndCodeSeven,
    getBossFullNameAndEmail
} from "./module/employees.js";

// console.log(await getAllEmployeesWithBossAndCodeSeven());
// console.log(await getBossFullNameAndEmail());

// console.log (await getAllNonSalesRepresentativeEmployees ())


import{
    getAllSpanishClientsNames
} from "./module/clients.js";

// console.log(await getAllSpanishClientsNames());

import{
    getAllOrderStatuses,
    getAllDelayedOrders,
    getAll
} from "./module/requests.js"

// console.log (await getAllOrderStatuses());
// console.log (await getAllDelayedOrders());
console.log(await getAll());

import{
    getUniqueClientCodesWithPaymentsIn2008
} from "./module/payments.js"


// console.log (await getUniqueClientCodesWithPaymentsIn2008 ());