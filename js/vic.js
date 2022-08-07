let productos= [];

function agregarATabla(){
let producto={}
//acá creo que hay que poner todas las opciones posibles, buscar en una clase que algo vimos
producto.menú=document.getElementById("menú").value;
producto.guarnición=document.getElementById("guar").value;
producto.bebida=document.getElementById("bebida").value;
productos.push(producto);
mostrarPedido();
}

function mostrarPedido(){
    let filas=""; for (let producto of productos){
                 filas+="<tr><td> "+ producto.menú + "</td><td>" + producto.guarnición + "</td><td>" + producto.bebida + "</td><td>" + "<button id='botón' onclick='quitarPedido()'>Eliminar</button>" + "</td></tr>";    
    }
    document.getElementById("enviar").style.display="block";
    document.getElementById("tabla").innerHTML=filas;
}
//esta función elimina siempre el últ. corregir
function quitarPedido(){
    mostrarPedido(productos.pop(productos));
}

document.addEventListener ('DOMContentLoaded',() => {

})