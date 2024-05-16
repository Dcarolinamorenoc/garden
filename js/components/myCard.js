
import {getAllOfficesCodeAndCity,
        getAllOfficesFromSpainCityAndMovil
} from "../module/offices.js"


import {
    getAllEmployeesWithBossAndCodeSeven,
    getBossFullNameAndEmail,
    getAllNonSalesRepresentativeEmployees
} from "../module/employees.js"



export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myCard.css">  
        `
    }


// 1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.



    async getAllOfficesCodeAndCityDesign(){
        let data = await getAllOfficesCodeAndCity();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Oficces 1</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Codigo Oficina: </b>${val.codigo}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    

    // 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.

    async getAllOfficesFromSpainCityAndMovilDesign(){
        let data = await getAllOfficesFromSpainCityAndMovil();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Oficces 2</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>ID: </b>${val.id}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                         <p><b>Telefono: </b>${val.telefono}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }


    // 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.

    async getAllEmployeesWithBossAndCodeSevenDesign(){
        let data = await getAllEmployeesWithBossAndCodeSeven();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Employees 1</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Email: </b>${val.email}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }


    // 4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.

    async getBossFullNameAndEmailDesign(){
        let data = await getBossFullNameAndEmail();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Employees 2</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                         <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Email: </b>${val.email}</p>
                        <p><b>Posicion: </b>${val.position}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }


    // 5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.


    async getAllNonSalesRepresentativeEmployeesDesign(){
        let data = await getAllNonSalesRepresentativeEmployees();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Employees 3</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Puesto: </b>${val.puesto}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }




  
    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        if(name=="logic" && now=="offices_1") this.getAllOfficesCodeAndCityDesign() //1
        if(name=="logic" && now=="offices_2") this.getAllOfficesFromSpainCityAndMovilDesign() 

        if(name=="logic" && now=="employees_1") this.getAllEmployeesWithBossAndCodeSevenDesign()
        
        if(name=="logic" && now=="employees_2") this.getBossFullNameAndEmailDesign()

        if(name=="logic" && now=="employees_3") this.getAllNonSalesRepresentativeEmployeesDesign()
        // if(name=="logic" && now=="client_16") this.getAllClientsFromSpainAndRepresentative11Or30Design()
        // if(name=="logic" && now=="employ_12") this.getAllEmployNotClientsDesign()
    }
}