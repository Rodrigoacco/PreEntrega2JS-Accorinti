// ECOMMERCE

const productos = [{
    id: 1,
    producto: "cafe",
    precio: 100,
    fechaDeVencimiento: [2030, 11, 10],
    descripcion: "Cafe irlandes bonafide",
    categoria: "almacén",
    oferta: false
},{
    id: 2,
    producto: "fideos",
    precio: 350,
    fechaDeVencimiento: [2025, 10, 10],
    descripcion: "Fideos secos Matarazzo",
    categoria: "almacén",
    oferta: true
},{
    id: 3,
    producto: "jabon liquido",
    precio: 2000,
    fechaDeVencimiento: [2030, 03, 14],
    descripcion: "Jabon liquido Ala 5 Lts",
    categoria: "limpieza",
    oferta: false
},{
    id: 4,
    producto: "acondicionador",
    precio: 540,
    fechaDeVencimiento: [2033, 11, 15],
    descripcion: "Acondicionador suave frutal",
    categoria: "perfumeria",
    oferta: false
},{
    id: 5,
    producto: "shampoo",
    precio: 600,
    fechaDeVencimiento: [2033, 11, 17],
    descripcion: "Shampoo suave frutal",
    categoria: "perfumeria",
    oferta: false
},{
    id: 6,
    producto: "pizzas",
    precio: 700,
    fechaDeVencimiento: [2023, 02, 04],
    descripcion: "pizza de tomate cibarita",
    categoria: "congelados",
    oferta: true
},{
    id: 7,
    producto: "papas noissette",
    precio: 1000,
    fechaDeVencimiento: [2023, 09, 12],
    descripcion: "Papas noissette mc cain",
    categoria: "congelados",
    oferta: true
},{
    id: 8,
    producto: "amber patagonia",
    precio: 300,
    fechaDeVencimiento: [2023, 05, 20],
    descripcion: "Cerveza patagonia amber 1l",
    categoria: "bebidas",
    oferta: true
},{
    id: 9,
    producto: "azucar",
    precio: 150,
    fechaDeVencimiento: [2025, 07, 22],
    descripcion: "azucar blanca ledezma",
    categoria: "almacén",
    oferta: false
},{
    id: 10,
    producto: "jbl go 3",
    precio: 6000,
    fechaDeVencimiento: "",
    descripcion: "Parlante bluetooh jbl",
    categoria: "electro",
    oferta: false
},{
    id: 11,
    producto: "remera",
    precio: 5000,
    fechaDeVencimiento: "",
    descripcion: "Remera lisa rojo",
    categoria: "textil",
    oferta: false
},{
    id: 12,
    producto: "bolsa",
    precio: 600,
    fechaDeVencimiento: "",
    descripcion: "Bolsa negra asurin",
    categoria: "limpieza",
    oferta: false
},{
    id: 13,
    producto: "colgate total 12",
    precio: 750,
    fechaDeVencimiento: [2025, 07, 22],
    descripcion: "Pasata dental colgate",
    categoria: "perfumeria",
    oferta: false
},{
    id: 14,
    producto: "enjuague total 12",
    precio: 670,
    fechaDeVencimiento: [2025, 07, 22],
    descripcion: "Enjuague bulcal colgate",
    categoria: "perfumeria",
    oferta: false
},{
    id: 15,
    producto: "paty",
    precio: 1500,
    fechaDeVencimiento: [2024, 04, 07],
    descripcion: "hamburguesas paty 20u",
    categoria: "congelados",
    oferta: false
}
]

/////////////////////////////////////////////////////////////////////////

function descuento (productos){

    for ( let i = 0; i < productos.length; i++){
        if( productos[i].oferta === true) {
            const multiplicacion = (productos[i].precio * 0.15)
            console.log (`El descuento sera de un 15%, el producto queda con un descuento de: ${multiplicacion}`)
        }
    }

}

descuento(productos)

/////////////////////////////////////////////////////////////////////////

function ordenaDescendente (productos){

    const idDescendente = [...productos].sort(( a, b) => {
        return b.id - a.id
    })
    console.log (idDescendente)
}

ordenaDescendente (productos)

/////////////////////////////////////////////////////////////////////////

function ofertas (productos){

    if (confirm ("¿Desea ver las ofertas de la tienda?")){
        const ofertaTienda = productos.filter(( elemento ) =>{
            return elemento.oferta === true
        })
        console.table (ofertaTienda)
    }
    
}

ofertas (productos)

/////////////////////////////////////////////////////////////////////////

function buscar (productos){

    const busquedaArticulo = prompt ("¿Que producto desea buscar?")
    const resultado = productos.find (( busqueda ) =>{
        return busqueda.producto === busquedaArticulo
    })
    if (resultado === undefined){
        alert ("El articulo solicitado no existe");
    } else {
        alert($[JSON.stringify( resultado, null, 1)]);
    }
}

buscar (productos)