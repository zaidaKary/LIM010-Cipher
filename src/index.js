//guardando valores
const contrasenha = document.getElementById('contrasenha');

//vistas
const pantallaPrincipal = document.getElementById('pantallaPrincipal');
const pantallaError = document.getElementById('pantallaError');
const pantallaSecundaria = document.getElementById('pantallaSecundaria');

//botones
const botonIngresar = document.getElementById('botonIngresar');
const botonCifrar = document.getElementById('botonCifrar');
const botonDescifrar = document.getElementById('botonDescifrar');
const botonLimpiar = document.getElementById('botonLimpiar');
const botonSalir = document.getElementById('botonSalir');

let contador = 0;
//funcionalidad del boton INGRESAR
botonIngresar.addEventListener('click', () => {

    if(contrasenha.value === ""){
        alert("Por favor, digite su contraseña.");
        return false;
    }
    if(contrasenha.value === "LABORATORIA"){
        pantallaPrincipal.classList.add('hide');
        pantallaSecundaria.classList.remove('hide');
    }else{
        if(contrasenha.value != "LABORATORIA" && contador==2){
            pantallaPrincipal.classList.add('hide');
            pantallaError.classList.remove('hide');
        }else{
           // document.getElementById('ventanaContrasenhaInco').classList.add('ventanaError');
            //document.getElementById('ventanaContrasenhaInco').innerHTML = "Contraseña incorrecta...";
            alert("Contraseña incorrecta, vuelve a intentar");
            contrasenha.value = "";
            contador++;
        }
    }
    //Limpia los textArea
    //document.getElementById('textoDC').value = "";
    //document.getElementById('resultadoDC').value = "";
});

//funcionalidad del boton CIFRAR
botonCifrar.addEventListener('click', () => {
    const textoIntroducido = document.getElementById('textoDC').value;
    const textoClave = parseInt(document.getElementById('clave').value);
    let resultado = " ";

      for (let i = 0; i < textoIntroducido.length; i++) {
        let numLetraAscii = textoIntroducido.charCodeAt(i);
        if (65 <= numLetraAscii && numLetraAscii <=  90){ //código ascii para las mayúsculas
            resultado += String.fromCharCode((numLetraAscii - 65 + textoClave) % 26 + 65);  
        }
        else if (97 <= numLetraAscii && numLetraAscii <= 122){ //código ascii para las minúsculas
        resultado += String.fromCharCode((numLetraAscii - 97 + textoClave) % 26 + 97);  
        }else{
        resultado += textoIntroducido.charAt(i); //devuelve el mismo valor introducido, si es espacio 
        //o número, es el mismo valor.
        }
      }
      console.log(resultado);
      document.getElementById('resultadoDC').innerHTML = resultado.toUpperCase();

});

//funcionalidad del boton DESCIFRAR
botonDescifrar.addEventListener('click', () => {
    const textoIntroducido = document.getElementById('textoDC').value;
    const textoClave = parseInt(document.getElementById('clave').value);
    let resultado = " ";

      for (let i = 0; i < textoIntroducido.length; i++) { //código ascii para las mayúsculas
        let numLetraAscii = textoIntroducido.charCodeAt(i);
        if (65 <= numLetraAscii && numLetraAscii <=  90){
            resultado += String.fromCharCode((numLetraAscii - 65 - textoClave) % 26 + 65);  
        }
        else if (97 <= numLetraAscii && numLetraAscii <= 122){ //código ascii para las minúsculas
        resultado += String.fromCharCode((numLetraAscii - 97 - textoClave) % 26 + 97);  
        }else{
        resultado += textoIntroducido.charAt(i);  
        }
      }
      console.log(resultado);
      document.getElementById('resultadoDC').innerHTML = resultado;
});

//funcionalidad del boton LIMPIAR
botonLimpiar.addEventListener('click', () => {
    document.getElementById('textoDC').value = "";
    document.getElementById('clave').value = "";
    //document.getElementById('resultadoDC').value = " ";
});

//funcionalidad del boton SALIR
botonSalir.addEventListener('click', () => {
    pantallaSecundaria.classList.add('hide');
    pantallaPrincipal.classList.remove('hide');
    document.getElementById('contrasenha').value = "";
    contador = 0;
    document.getElementById('textoDC').value = "";
    document.getElementById('clave').value = "";
    //document.getElementById('resultadoDC').value = "";
});