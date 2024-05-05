document.getElementById("agregar").addEventListener("click", agregar);
document.getElementById("reci").addEventListener("click", reciclar);
document.getElementById("elim").addEventListener("click",eliminar);
let lista=document.getElementById("lista");

function  leer (){
    let texto;
    texto=document.getElementById("entra").value
    return texto;
}
function  agregar(){
    let x=leer();
    const nueva=document.getElementById("entra").value;
        if(x.trim()!==""){
            const li=document.createElement("li");
        li.textContent=nueva
        
        lista.appendChild(li);
    
        }
        localStorage.setItem("tarea",x);
        x.value;

}
function eliminar(){
    localStorage.removeItem("tarea",leer());
}
function reciclar(){

}