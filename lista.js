document.getElementById("agregar").addEventListener("click", agregar);
let lista=document.getElementById("pendiente");
let lista1=document.getElementById("reali");

function leer(){
    let texto=document.getElementById("lista1").value;
    return texto;
}

function agregar(){
    let x=leer();
    let nueva=document.getElementById("lista1").value;
    if(x.trim()!==""){
        const li=document.createElement("li");
    li.textContent=nueva;
    lista.appendChild(li);
    let boton = document.createElement('input');
        boton.type='checkbox';
        li.appendChild(boton);
    }   
}
function realizadas(){
    

}