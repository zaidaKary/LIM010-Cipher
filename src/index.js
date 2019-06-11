//guardando valores
const contrasenha = document.getElementById("contrasenha");

//vistas
const pantallaPrincipal = document.getElementById("pantallaPrincipal");
const pantallaError = document.getElementById("pantallaError");
const pantallaSecundaria = document.getElementById("pantallaSecundaria");
const ventanaContrasenhaInco = document.getElementById("ventanaContrasenhaInco");

//botones
const botonIngresar = document.getElementById("botonIngresar");
const botonCifrar = document.getElementById("botonCifrar");
const botonDescifrar = document.getElementById("botonDescifrar");
const botonLimpiar = document.getElementById("botonLimpiar");
const botonSalir = document.getElementById("botonSalir");
const botonCopiar = document.getElementById("botonCopiar");
//const botonPegar = document.getElementById("botonPegar");

let contador = 2;
//funcionalidad del boton INGRESAR
botonIngresar.addEventListener("click", () => {

    if(contrasenha.value === ""){
        ventanaContrasenhaInco.innerHTML = "<strong>Por favor, digite su contraseña.</strong>";
        return false;
    }
    if(contrasenha.value === "LABORATORIA"){
        pantallaPrincipal.classList.add("hide");
        pantallaSecundaria.classList.remove("hide");
    }else{
        if(contrasenha.value != "LABORATORIA" && contador==0){
            pantallaPrincipal.classList.add("hide");
            pantallaError.classList.remove("hide");
        }else{
            ventanaContrasenhaInco.innerHTML = "<strong>Contraseña incorrecta, le quedan "+ contador +" intento(s)</strong>";
            contrasenha.value = "";
            contador--;
        }
    }
});

//funcionalidad del boton CIFRAR
botonCifrar.addEventListener("click", () => {
    const textoIntroducido = document.getElementById("textoDC").value;
    const textoClave = parseInt(document.getElementById("clave").value);
    const resultadoFinal = cipher.encode(textoClave,textoIntroducido);
    document.getElementById("resultadoDC").value = resultadoFinal;
});

//funcionalidad del boton DESCIFRAR
botonDescifrar.addEventListener("click", () => {
    const textoIntroducido = document.getElementById("textoDC").value;
    const textoClave = parseInt(document.getElementById("clave").value);
    const resultadoFinal = cipher.decode(textoClave,textoIntroducido);  
    document.getElementById("resultadoDC").value = resultadoFinal;
});

//funcionalidad del boton LIMPIAR
botonLimpiar.addEventListener("click", () => {
    document.getElementById("textoDC").value = "";
    document.getElementById("clave").value = "";
    document.getElementById("resultadoDC").value = "";
});

//funcionalidad del boton SALIR
botonSalir.addEventListener("click", () => {
    pantallaSecundaria.classList.add("hide");
    pantallaPrincipal.classList.remove("hide");
    document.getElementById("contrasenha").value = "";
    contador = 2;
    document.getElementById("textoDC").value = "";
    document.getElementById("clave").value = "";
    document.getElementById("resultadoDC").value = "";
    ventanaContrasenhaInco.innerHTML = "";
});

//funcionalidad del boton COPIAR
botonCopiar.addEventListener("click", () => {
    const copiadoTexto = document.getElementById("resultadoDC");
    copiadoTexto.select();
    document.execCommand("copy");
});

//funcionalidad del boton PEGAR
/*botonPegar.addEventListener("click", () =>{
    const pegadoTexto = document.getElementById("resultadoDC");
    pegadoTexto.focus();
    document.execCommand("paste");
  console.log(pegadoTexto.value);
  pegadoTexto.value=document.getElementById(textoDC);
});
*/