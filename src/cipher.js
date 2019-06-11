window.cipher = {
  encode: (offset, string) => {
    let resultado = "";
      for (let i = 0; i < string.length; i++) {
        let numLetraAscii = string.charCodeAt(i);
        if (65 <= numLetraAscii && numLetraAscii <=  90){ //código ascii para las mayúsculas
            resultado += String.fromCharCode((numLetraAscii - 65 + offset) % 26 + 65);  
        } else{
        resultado += string.charAt(i); //devuelve el mismo valor introducido, si es espacio 
        //o número, es el mismo valor.
        }
      }
    return resultado;
  },
  decode: (offset, string) => {
    let resultado = "";
      for (let i = 0; i < string.length; i++) { //código ascii para las mayúsculas
        let numLetraAscii = string.charCodeAt(i);
        if (65 <= numLetraAscii && numLetraAscii <=  90){
            resultado += String.fromCharCode((numLetraAscii + 65 - offset) % 26 + 65);  
        } else{
        resultado += string.charAt(i);  
        }
      }
    return resultado;
  }
};