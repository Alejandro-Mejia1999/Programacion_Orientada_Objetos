document.getElementById("sec").addEventListener("click", iniciar);
let checkbox = document.getElementById("mostrar");
if (checkbox.checked) {
    alert("El checkbox está marcado")
}
let usuario="alejandro";
let pass="12345678";
function iniciar(){
    usu=document.getElementById("usu").value;
    cont=document.getElementById("contra").value;
    if(usuario==usu && cont==pass){
        alert("Bienvenido "+usuario);
        localStorage.setItem("usuario","alejandro");
        localStorage.setItem("cont","12345678");
        window.open("cookies.html");
    }else{                                                                                                                                         
        alert("usuario o contraseña incorrecta");
        sessionStorage.setItem("usuario",usu);
        sessionStorage.setItem("contra",cont);
    }
}
        function crear(){
            sessionStorage.setItem("usuario", "alejandro");
        }
        function mod(){
            sessionStorage.setItem("usuario", "alejandro87");
        }
        function clean(){
        sessionStorage.removeItem("usuario");
        }
        function view(){
            alert(sessionStorage.getItem("usuario"));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        }  