


const cipher = {
  cifrado: function(desplazamiento,textoUsuario) {
    console.log(typeof(desplazamiento));
  
     let final=[];
     let resultado;
    
      
       for(let position in textoUsuario) {
         

       console.log('codigo para position', position,textoUsuario.charCodeAt(position));
     
       if (textoUsuario.charCodeAt(position) >= 65 && textoUsuario.charCodeAt(position) <=90){
       let caracter=(textoUsuario.charCodeAt(position) - 65 + desplazamiento)%26 + 65;
        console.log(caracter)
        resultado=String.fromCharCode(caracter);
        final.push(resultado);
         console.log ("letra nueva",resultado)
         document.getElementById("resultadocifrado").innerHTML=final.join("");
         
       } else{
        resultado=String.fromCharCode (textoUsuario.charCodeAt(position))
        final.push(resultado);
       
       
       }
     
    }
    return final.join("")
  },
  
  descifrado: function(desplazamiento2,textoUsuario2){

   let final=[ ];
   let resultado;

   for(let position2 in textoUsuario2 ){
     console.log ("codigo para position2",position2,textoUsuario2.charCodeAt(position2));
     if(textoUsuario2.charCodeAt(position2) >=65 && textoUsuario2.charCodeAt(position2)<=90){
      let caracter2=(textoUsuario2.charCodeAt(position2)+65 -desplazamiento2)%26+ 65;
     console.log(caracter2)
     resultado=String.fromCharCode( caracter2);
     final.push(resultado);
     console.log("letra nueva",resultado)
     document.getElementById("resultado descifrado").innerHTML=final.join("")

    }else{
      resultado=String.fromCharCode(textoUsuario2.charCodeAt(position2))
      final.push(resultado);
    }
  }

   return final.join("")


  }
};

export default cipher;
