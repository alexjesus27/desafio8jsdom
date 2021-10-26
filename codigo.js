//crear Objeto

const listaHelados=[];
let precioHelado = 0;
let total= 0;
let nombreReal;

const subtotal = (precioHelado)=> {
    total = total + precioHelado;
    
}
const nombreHelado =(tipoHelado) =>{
    switch(tipoHelado){
        case 1:
            nombreReal= "Addictive cream";
            break;
        case 2:
            nombreReal="Kiwi sensation";
            break;
        case 3:
            nombreReal="Mint Chocolate";
            break;
        case 4:
            nombreReal="Crazy banana";
            break;
        case 5:
            nombreReal="Strawberry passion";
            break;
        case 6:
            nombreReal="Fresh blueberry";
            break;
    }
}

function Helado(nombreHelado, base, precioHelado){
    this.nombreHelado = nombreHelado;
    this.base = base;
    this.precioHelado = precioHelado
}
alert("Bienvenido a thailand ice cream rolls");
do{
    let tipoHelado = parseInt(prompt("Por favor indique el sabor del helado: \n1.Addictive cream \n2.Kiwi sensation \n3.Mint Chocolate \n4.Crazy banana \n5.Strawberry passion \n6.Fresh blueberry \n7.salir" ));
    if( tipoHelado === 7) break;
    let base = parseInt(prompt("Que tipo de base va a querer su helado, \n1.vegano, \n2.normal"));
    if(base == 1){
        precioHelado = 3500;
    }else{
        precioHelado = 3000;
    }
    subtotal(precioHelado);
    nombreHelado(tipoHelado);
    suPedido = new Helado(nombreReal, base, precioHelado);
    listaHelados.push(suPedido);

    seguir = prompt("desea agregar otro helado? si/no");

}while(seguir === "si" || seguir === "SI");



let tabla=document.createElement("table");
tabla.setAttribute("class","table table-dark table-striped");
let tablahead=document.createElement("thead");
let encabezado=document.createElement("tr");
encabezado.innerHTML=`<td>Helados</td>
                      <td>Base</td>
                      <td>Precio</td>`
tabla.appendChild(encabezado);
document.getElementById("tablaDom").appendChild(tabla);

let tablaBody=document.createElement("tbody");
for(const helado of listaHelados){
    let fila=document.createElement("tr");
    fila.innerHTML=`<td> ${helado.nombreHelado}</td>
                    <td> ${helado.base}</td>
                    <td> ${helado.precioHelado}</td>`
    tablaBody.appendChild(fila);
}
tabla.appendChild(tablaBody);
document.getElementById("tablaDom").appendChild(tabla);


if (total !=0){
    let cliente=document.getElementById("cliente");
    let nombreCliente=prompt("Indique su nombre");
    cliente.innerHTML=`hola ${nombreCliente} el monto a pagar por sus helado sera ${total}`;
    }

