import cipher from './cipher.js'

 
 let textoUsuario= document.getElementById("mensaje");
 let desplazamiento=document.getElementById("displacement");
 let bCifrado=document.getElementById("botton");

 

 bCifrado.addEventListener("click", function(){
 
 let resultado= cipher.cifrado(parseInt(desplazamiento.value),textoUsuario.value.toUpperCase());
 console. log(resultado)
 
});

 
let textoUsuario2=document.getElementById("mensaje2");
 let desplazamiento2=document.getElementById("displacement2")
 let bDescifrado=document.getElementById("botton2");

bDescifrado.addEventListener("click", function(){
    let resultado= cipher.descifrado(parseInt(desplazamiento2.value),textoUsuario2.value.toUpperCase());
    console. log(resultado)
 
});
