//guardando valores
const contrasenha = document.getElementById('contrasenha');
const textoIntroducido = document.getElementById('textoDC');
const textoClave = document.getElementById('clave');

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
            alert("Contraseña incorrecta, vuelve a intentar");
            contrasenha.value = "";
            contador++;
        }
    }
    
    //Limpia los textArea
    document.getElementById('textoDC').value = "";
    document.getElementById('resultadoDC').value = "";
});

//funcionalidad del boton CIFRAR
botonCifrar.addEventListener('click', () => {

    const resultado = document.getElementById('resultadoDC');

      for (var i = 0; i < textoIntroducido.length; i++) {
        var c = textoIntroducido.charCodeAt(i);
        if (65 <= numLetraAscii && numLetraAscii <=  90){
            resultado += String.fromCharCode((numLetraAscii - 65 + textoClave) % 26 + 65).charCodeAt(0);  
        }
        else if (97 <= numLetraAscii && numLetraAscii <= 122){
        resultado += String.fromCharCode((numLetraAscii - 97 + textoClave) % 26 + 97).charCodeAt(0);  
        }else{
        resultado += textoIntroducido.charAt(i);  
        }
      }
      return resultado;
});

//funcionalidad del boton DESCIFRAR
botonDescifrar.addEventListener('click', () => {

});

//funcionalidad del boton LIMPIAR
botonLimpiar.addEventListener('click', () => {
    document.getElementById('textoDC').value = "";
    document.getElementById('resultadoDC').value = "";
    document.getElementById('clave').value = "";
});

//funcionalidad del boton SALIR
botonSalir.addEventListener('click', () => {
    pantallaSecundaria.classList.add('hide');
    pantallaPrincipal.classList.remove('hide');
    document.getElementById('contrasenha').value = "";
    contador = 0;
});