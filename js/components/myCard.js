
import {getAllOfficesCodeAndCity,
        getAllOfficesFromSpainCityAndMovil
} from "../module/offices.js"




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
                        <div>Oficinas codigo</div>
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
                        <div>La ciudad y el teléfono de las oficinas de España</div>
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


  
    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        if(name=="logic" && now=="offices_1") this.getAllOfficesCodeAndCityDesign() //1
        if(name=="logic" && now=="offices_2") this.getAllOfficesFromSpainCityAndMovilDesign() 
        // if(name=="logic" && now=="client_16") this.getAllClientsFromSpainAndRepresentative11Or30Design()
        // if(name=="logic" && now=="employ_12") this.getAllEmployNotClientsDesign()
    }
}