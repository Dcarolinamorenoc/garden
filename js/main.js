import {
    getAllOfficesCodeAndCity, 
    getAllOfficesFromSpainCityAndMovil,
    getOfficesWithClientsInFuenlabrada 

} from "./module/offices.js";

// console.log(await getAllOfficesCodeAndCity());
// console.log(await getAllOfficesFromSpainCityAndMovil());
// console.log(await getAllClientsFuenlabrada ());


import{
    getAllNonSalesRepresentativeEmployees,
    getAllEmployeesWithBossAndCodeSeven,
    getBossFullNameAndEmail,
    getEmployeesWithBossAndBossOfBoss,
    getEmployeesWithBossesAndBossesOfBosses,
    ListEmployeesWithoutAssociatedOffice,
    ListEmployeesWithoutAssociatedClient,
    listEmployeesWithoutAssociatedClientAndTheirOffices,
    listEmployeesWithoutAssociatedClientAndTheirBosses,
    ListEmployeesWithoutAssociatedOfficeAndClient  
    
} from "./module/employees.js";

// console.log(await getAllEmployeesWithBossAndCodeSeven());
// console.log(await getBossFullNameAndEmail());
// console.log(await getEmployeesWithBossAndBossOfBoss());
// console.log (await getAllNonSalesRepresentativeEmployees ())
// console.log(await getEmployeesWithBossesAndBossesOfBosses());
// console.log (await ListEmployeesWithoutAssociatedOffice ());
// console.log (await ListEmployeesWithoutAssociatedClient ());
// console.log (await listEmployeesWithoutAssociatedClientAndTheirOffices  ());
// console.log (await listEmployeesWithoutAssociatedClientAndTheirBosses ());
// console.log (await ListEmployeesWithoutAssociatedOfficeAndClient ());


import{
    getAllSpanishClientsNames,
    getClientsInMadridWithSalesRep11Or30,
    getClientsEmploy,
    getEmployeesCode,
    getClientsWithSalesRepresentatives,
    getClientsWithoutPayments,
    getClientsWithPaymentsAndSalesRepresentativesAndOfficeCity,
    getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCity,
    getDelayedOrdersPayPalClients,
    clientsNoPayments,
    clientsNoOrder,
    clientsNoPaymentsAndNoOrder,
    getOfficesClientsInFuenlabrada,
    clientsWithOrder,
    clientsWithOrderNoPayments  
} from "./module/clients.js";

// console.log(await getAllClientsFuenlabrada ());
// console.log(await getAllSpanishClientsNames());
// console.log(await getClientsInMadridWithSalesRep11Or30())
// console.log ( await getClientsEmploy ());
// console.log (await getEmployeesCode ());
// console.log (await getClientsWithSalesRepresentatives())
// console.log (await getClientsWithoutPayments ());
// console.log (await getClientsWithPaymentsAndSalesRepresentativesAndOfficeCity ());
// console.log (await getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCity ());
// console.log (await getDelayedOrdersPayPalClients ());
// console.log (await clientsNoPayments ());
// console.log (await clientsNoOrder ());
// console.log (await clientsNoPaymentsAndNoOrder ());
// console.log (await getOfficesClientsInFuenlabrada ());
// console.log (await findClientsWithUnpaidOrders ());
// console.log (await clientsWithOrder ());
// console.log (await clientsWithOrderNoPayments ());


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
    productsNeverOrdered,
    getAllProductsNeverOrderedWithDetails


} from "./module/products.js"

// console.log(await getOrnamentalProductsOver100StockByPrice ());
// console.log (await productsNeverOrdered  ());
console.log (await getAllProductsNeverOrderedWithDetails ());


import {
    lisOfProductRangesPurchasedByClient
} from "./module/request_details.js"

// console.log (await lisOfProductRangesPurchasedByClient ());