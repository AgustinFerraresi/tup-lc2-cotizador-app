"use strict";

let datos = JSON.parse(localStorage.getItem("monedas"));

//console.log("datos")
//console.log(datos)

let fechasDuplicadas = []; //aca se guardan todas la fechas aunque sean repetidas
let favs = []; // aca se guardaran las monedas seleccionadas como favoritas

datos.forEach(cotizacion => {
    if (cotizacion.estado) {
        favs.push(cotizacion);
    }
});

//console.log("favs")
//console.log(favs)

/*recorro el array datos tomando las fechas de cada item y guardandolas en fechasDuplicadas */
for (let i = 0; i < favs.length; i++) {
    
    let favsFecha = favs[i].fecha
    
    let fecha = favsFecha.slice(0,10);
    fechasDuplicadas.push(fecha);
}

//elimino los los duplicados de fechasDuplicadas gracias a que lo convierto en un set (conjunto)
let setFechas = new Set(fechasDuplicadas);

//transformo el set setFechas en array nuevamente
let fechas = Array.from(setFechas).sort();

//console.log("fechas")
//console.log(fechas)
 
//---------------PREPARO LOS DATOS DEL BLUE---------------
let blue = favs.filter(cotizacion => cotizacion.nombre == "Blue"); //la comparacion tiene que ser con el nombre del objeto que este en local storage

//console.log("dolar blue")
//console.log(blue)

let compraBlue = []
let ventaBlue = []
let fechasBlue = []

blue.forEach(cotizacion => {
    //guardo las fechas del dolar blue
    fechasBlue.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    //guardo los valores de compra/venta del blue en su array correspondiente
    compraBlue.push(compra);
    ventaBlue.push(venta);
});

//elimino repetidos
let fechasBlueSet = new Set(fechasBlue);

//fechasBlueSR = fechas blue sin repetir
let fechasBlueSR = Array.from(fechasBlueSet);

//console.log("fechas dolar blue SR")
//console.log(fechasBlue)

//---------------PREPARO LOS DATOS DEL OFICIAL---------------

let oficial = favs.filter(cotizacion => cotizacion.nombre == "Oficial");

//console.log("dolar blue")
//console.log(blue)

let compraOficial = []
let ventaOficial = []
let fechasOficial = []

oficial.forEach(cotizacion => {
    //guardo las fechas del Oficial
    fechasOficial.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    //guardo los valores de compra/venta del Oficial en su array correspondiente
    compraOficial.push(compra);
    ventaOficial.push(venta);
});

//elimino repetidos
let fechasOficialSet = new Set(fechasOficial);

//fechasOficialSR = fechas oficial sin repetir
let fechasOficialSR = Array.from(fechasOficialSet);

console.log("fechas dolar oficial SR")
console.log(fechasOficialSR)

//---------------PREPARO LOS DATOS DEL LLC---------------

// en todos lados me equivoque y puse LLC en lugar de CCL (contado con luquidacion) y asi se va a quedar :)

let lcc = favs.filter(cotizacion => cotizacion.nombre == "Contado con liquidación");

let compraLCC = []
let ventaLCC = []
let fechasLCC = []

lcc.forEach(cotizacion => {
    //guardo las fechas del LCC
    fechasLCC.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    //guardo los valores de compra/venta del LCC en su array correspondiente
    compraLCC.push(compra);
    ventaLCC.push(venta);
});

//elimino repetidos
let fechasLCCSet = new Set(fechasLCC);

//fechasOficialSR = fechasLCC/ sin repetir
let fechasLCCSR = Array.from(fechasLCCSet);

//---------------PREPARO LOS DATOS DEL BOLSA---------------

let bolsa = favs.filter(cotizacion => cotizacion.nombre == "Bolsa");

let comprabolsa = []
let ventabolsa = []
let fechasbolsa = []

bolsa.forEach(cotizacion => {
    //guardo las fechas del bolsa
    fechasbolsa.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    //guardo los valores de compra/venta del bolsa en su array correspondiente
    comprabolsa.push(compra);
    ventabolsa.push(venta);
});

//elimino repetidos
let fechasbolsaSet = new Set(fechasbolsa);

//fechasOficialSR = fechas bolsa sin repetir
let fechasbolsaSR = Array.from(fechasbolsaSet);

//---------------PREPARO LOS DATOS DEL CRIPTO---------------
let cripto = favs.filter(cotizacion => cotizacion.nombre == "Cripto");

let compracripto = []
let ventacripto = []
let fechascripto = []

cripto.forEach(cotizacion => {
    //guardo las fechas del cripto
    fechascripto.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    //guardo los valores de compra/venta del cripto en su array correspondiente
    compracripto.push(compra);
    ventacripto.push(venta);
});

//elimino repetidos
let fechascriptoSet = new Set(fechascripto);

//fechasOficialSR = fechas cripto sin repetir
let fechascriptoSR = Array.from(fechascriptoSet);

//---------------PREPARO LOS DATOS DEL TARJETA---------------

let tarjeta = favs.filter(cotizacion => cotizacion.nombre == "Tarjeta");
let compratarjeta = []
let ventatarjeta = []
let fechastarjeta = []

tarjeta.forEach(cotizacion => {
    fechastarjeta.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    compratarjeta.push(compra);
    ventatarjeta.push(venta);
});

let fechastarjetaSet = new Set(fechastarjeta);
let fechastarjetaSR = Array.from(fechastarjetaSet);

//---------------PREPARO LOS DATOS DEL EURO---------------

let euro = favs.filter(cotizacion => cotizacion.nombre == "Euro");
let compraeuro = []
let ventaeuro = []
let fechaseuro = []

euro.forEach(cotizacion => {
    fechaseuro.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    compraeuro.push(compra);
    ventaeuro.push(venta);
});

let fechaseuroSet = new Set(fechaseuro);
let fechaseuroSR = Array.from(fechaseuroSet);

//---------------PREPARO LOS DATOS DEL EURO---------------
let pesoChileno = favs.filter(cotizacion => cotizacion.nombre == "Peso Chileno");
let comprapesoChileno = []
let ventapesoChileno = []
let fechaspesoChileno = []

pesoChileno.forEach(cotizacion => {
    fechaspesoChileno.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    comprapesoChileno.push(compra);
    ventapesoChileno.push(venta);
});

let fechaspesoChilenoSet = new Set(fechaspesoChileno);
let fechaspesoChilenoSR = Array.from(fechaspesoChilenoSet);














let grafico;
let etiquetas;
 
//Axis X 
etiquetas = fechas; //aca estaran todas las fechas en las que se marco el blue como una moneda favorita sin repetir fechas

//Datos
let datosLinea1 = compraBlue;
let datosLinea2 = ventaBlue;

let oficialCompra = compraOficial
let oficialVenta = ventaOficial;

let lccCompra = compraLCC;
let lccVenta = ventaLCC;

let bolsaCompra = comprabolsa;
let bolsaVenta = ventabolsa;

let criptoCompra = compracripto;
let criptoVenta = ventacripto;

let tarjetaCompra = compratarjeta;
let tarjetaVenta = ventatarjeta;

let euroCompra = compraeuro;
let euroVenta = ventaeuro;

let pesoChilenoCompra = compraeuro;
let pesoChilenoVenta = ventaeuro;

const ctx = document.getElementById("miGrafica").getContext("2d");

grafico = new Chart(ctx, {
    type: "line",
    data: {
        labels: etiquetas,
        datasets: [
            //BLUE 0 y 1
            { 
                label: "Dolar Blue (compra)",
                data: datosLinea1,
                borderColor: "green",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            {
                label: "Dolar Blue (venta)",
                data: datosLinea2,
                borderColor: "red",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            //OFICIAL 2 y 3
            { 
                label: "Dolar Oficial (compra)",
                data: oficialCompra,
                borderColor: "orange",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            {
                label: "Dolar Oficial (venta)",
                data: oficialVenta,
                borderColor: "pink",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },

            //LCC 4 y 5
            { 
                label: "CCL (compra)",
                data: lccCompra,
                borderColor: "blue",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            {
                label: "CCL (venta)",
                data: lccVenta,
                borderColor: "yellow",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },

            //BOLSA 6 y 7
            { 
                label: "Bolsa (compra)",
                data: bolsaCompra,
                borderColor: "aqua",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            {
                label: "Bolsa (venta)",
                data: bolsaVenta,
                borderColor: "beige",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },

            //BOLSA 8 y 9 a dia de 5/7 solo hay una cotizacion guardada del dolar cripto en true asi que en la grafica solo aparecen 2 puntos para el dolar cripto
            { 
                label: "Cripto (compra)",
                data: criptoCompra,
                borderColor: "blueviolet",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            {
                label: "Cripto (venta)",
                data: criptoVenta,
                borderColor: "cadetblue",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },

            //BOLSA 10 y 11
            { 
                label: "Tarjeta (compra)",
                data: tarjetaCompra,
                borderColor: "brown",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            {
                label: "Tarjeta (venta)",
                data: tarjetaVenta,
                borderColor: "white",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },

            //BOLSA 12 y 13
            { 
                label: "Euro (compra)",
                data: euroCompra,
                borderColor: "gold",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            {
                label: "Euro (venta)",
                data: euroVenta,
                borderColor: "goldenrod",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },



        ]
    }
});


let selectorMonedas = document.getElementById("selector-monedas");

selectorMonedas.onchange = main;

function main() {
    if (selectorMonedas.value == "dolar-blue") {
        //blue
        grafico.data.datasets[0].hidden = false;
        grafico.data.datasets[1].hidden = false;
        //oficial
        grafico.data.datasets[2].hidden = true;
        grafico.data.datasets[3].hidden = true;
        //lcc
        grafico.data.datasets[4].hidden = true;
        grafico.data.datasets[5].hidden = true;
        //bolsa
        grafico.data.datasets[6].hidden = true;
        grafico.data.datasets[7].hidden = true;
        //cripto
        grafico.data.datasets[8].hidden = true;
        grafico.data.datasets[9].hidden = true;
        //tarjeta
        grafico.data.datasets[10].hidden = true;
        grafico.data.datasets[11].hidden = true;
        //euro
        grafico.data.datasets[12].hidden = true;
        grafico.data.datasets[13].hidden = true;

        grafico.data.labels = fechasBlueSR

    }else if (selectorMonedas.value == "dolar-oficial"){
        //blue
        grafico.data.datasets[0].hidden = true;
        grafico.data.datasets[1].hidden = true;
        //oficial
        grafico.data.datasets[2].hidden = false;
        grafico.data.datasets[3].hidden = false;
        //ccl
        grafico.data.datasets[4].hidden = true;
        grafico.data.datasets[5].hidden = true;
        //bolsa
        grafico.data.datasets[6].hidden = true;
        grafico.data.datasets[7].hidden = true;
        //cripto
        grafico.data.datasets[8].hidden = true;
        grafico.data.datasets[9].hidden = true;
        //tarjeta
        grafico.data.datasets[10].hidden = true;
        grafico.data.datasets[11].hidden = true;
        //euro
        grafico.data.datasets[12].hidden = true;
        grafico.data.datasets[13].hidden = true;
        
        grafico.data.labels = fechasOficialSR

    }else if (selectorMonedas.value == "dolar-lcc"){
        //blue
        grafico.data.datasets[0].hidden = true;
        grafico.data.datasets[1].hidden = true;
        //oficial
        grafico.data.datasets[2].hidden = true;
        grafico.data.datasets[3].hidden = true;
        //llc
        grafico.data.datasets[4].hidden = false;
        grafico.data.datasets[5].hidden = false;
        //bolsa
        grafico.data.datasets[6].hidden = true;
        grafico.data.datasets[7].hidden = true;
        //cripto
        grafico.data.datasets[8].hidden = true;
        grafico.data.datasets[9].hidden = true;
        //tarjeta
        grafico.data.datasets[10].hidden = true;
        grafico.data.datasets[11].hidden = true;
        //euro
        grafico.data.datasets[12].hidden = true;
        grafico.data.datasets[13].hidden = true;

        grafico.data.labels = fechasLCCSR

    }else if (selectorMonedas.value == "dolar-bolsa"){
        //blue
        grafico.data.datasets[0].hidden = true;
        grafico.data.datasets[1].hidden = true;
        //oficial
        grafico.data.datasets[2].hidden = true;
        grafico.data.datasets[3].hidden = true;
        //llc
        grafico.data.datasets[4].hidden = true;
        grafico.data.datasets[5].hidden = true;
        //bolsa
        grafico.data.datasets[6].hidden = false;
        grafico.data.datasets[7].hidden = false;
        //cripto
        grafico.data.datasets[8].hidden = true;
        grafico.data.datasets[9].hidden = true;
        //tarjeta
        grafico.data.datasets[10].hidden = true;
        grafico.data.datasets[11].hidden = true;
        //euro
        grafico.data.datasets[12].hidden = true;
        grafico.data.datasets[13].hidden = true;

        grafico.data.labels = fechasbolsaSR

    }else if (selectorMonedas.value == "dolar-cripto"){
        //blue
        grafico.data.datasets[0].hidden = true;
        grafico.data.datasets[1].hidden = true;
        //oficial
        grafico.data.datasets[2].hidden = true;
        grafico.data.datasets[3].hidden = true;
        //llc
        grafico.data.datasets[4].hidden = true;
        grafico.data.datasets[5].hidden = true;
        //bolsa
        grafico.data.datasets[6].hidden = true;
        grafico.data.datasets[7].hidden = true;
        //cripto
        grafico.data.datasets[8].hidden = false;
        grafico.data.datasets[9].hidden = false;
        //tarjeta
        grafico.data.datasets[10].hidden = true;
        grafico.data.datasets[11].hidden = true;
        //euro
        grafico.data.datasets[12].hidden = true;
        grafico.data.datasets[13].hidden = true;

        grafico.data.labels = fechascriptoSR

    }else if (selectorMonedas.value == "dolar-tarjeta"){
        //blue
        grafico.data.datasets[0].hidden = true;
        grafico.data.datasets[1].hidden = true;
        //oficial
        grafico.data.datasets[2].hidden = true;
        grafico.data.datasets[3].hidden = true;
        //llc
        grafico.data.datasets[4].hidden = true;
        grafico.data.datasets[5].hidden = true;
        //bolsa
        grafico.data.datasets[6].hidden = true;
        grafico.data.datasets[7].hidden = true;
        //cripto
        grafico.data.datasets[8].hidden = true;
        grafico.data.datasets[9].hidden = true;
        //tarjeta
        grafico.data.datasets[10].hidden = false;
        grafico.data.datasets[11].hidden = false;
        //euro
        grafico.data.datasets[12].hidden = true;
        grafico.data.datasets[13].hidden = true;

        grafico.data.labels = fechastarjetaSR

    }else if (selectorMonedas.value == "euro"){
        //blue
        grafico.data.datasets[0].hidden = true;
        grafico.data.datasets[1].hidden = true;
        //oficial
        grafico.data.datasets[2].hidden = true;
        grafico.data.datasets[3].hidden = true;
        //llc
        grafico.data.datasets[4].hidden = true;
        grafico.data.datasets[5].hidden = true;
        //bolsa
        grafico.data.datasets[6].hidden = true;
        grafico.data.datasets[7].hidden = true;
        //cripto
        grafico.data.datasets[8].hidden = true;
        grafico.data.datasets[9].hidden = true;
        //tarjeta
        grafico.data.datasets[10].hidden = true;
        grafico.data.datasets[11].hidden = true;
        //euro
        grafico.data.datasets[12].hidden = false;
        grafico.data.datasets[13].hidden = false;

        grafico.data.labels = fechaseuroSR
    }
    


    



        // actualizo el grafico despues de modificar los datasets sino no se muestran los cambios
        grafico.update();
}