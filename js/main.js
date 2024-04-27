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
    getAllSpanishClientsNames,
    getClientsInMadridWithSalesRep11Or30,
    getClientsEmploy,
    getEmployeesCode,
    getClientsWithSalesRepresentatives
} from "./module/clients.js";

// console.log(await getAllSpanishClientsNames());
// console.log(await getClientsInMadridWithSalesRep11Or30())
// console.log ( await getClientsEmploy ());
// console.log (await getEmployeesCode ());
console.log (await getClientsWithSalesRepresentatives())



import{
    getAllOrderStatuses,
    getAllDelayedOrders,
    getDelayedOrdersList,
    getRejectedOrders2009,
    getOrdersDeliveredInJanuary
} from "./module/requests.js"

// console.log (await getAllOrderStatuses());
// console.log (await getAllDelayedOrders());
// console.log(await getDelayedOrdersList());
// console.log(await getRejectedOrders2009());
// console.log(await getOrdersDeliveredInJanuary());

import{
    getUniqueClientCodesWithPaymentsIn2008,
    getPaypalPayments2008OrderedDescending,
    getAllUniquePaymentMethods
} from "./module/payments.js"


// console.log (await getUniqueClientCodesWithPaymentsIn2008 ());
// console.log (await getPaypalPayments2008OrderedDescending ())
// console.log(await getAllUniquePaymentMethods());

import{
    getOrnamentalProductsOver100StockByPrice,

} from "./module/products.js"

// console.log(await getOrnamentalProductsOver100StockByPrice ());