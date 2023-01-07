

//devuelve el calculo del ticket
function totalAPagar(cantidad, categoria){
    const valorTicket=200;
    let total = cantidad * valorTicket;
    
    switch(categoria){
        case "Estudiante":
            total= total-(total*0.80);
            break;

        case "Trainee":
            total= total-(total*0.50);
            break;

        case "Junior":
            total= total-(total*0.15);
            break;
    }
    console.log(total);
    return total;
}

//document.preventDefault();
let boton= document.getElementById("botonResumen");

let formulario = document.getElementById("formTickets");
formulario.addEventListener("submit",(e)=>{ 
    e.preventDefault();
})

boton.addEventListener("click",()=>{
    //toma los valores ingresado por el usuario
    let cantidad=document.getElementById("cantidad").value
    let categoria=document.getElementById("categorias").value

    console.log(cantidad)
    console.log(categoria)

    //devuelve el resultado a pagar
    let valor= totalAPagar(cantidad, categoria);

    //mostrar el total a pagar
    let aPagar = document.getElementById("totalCompra");
    aPagar.textContent = `Total a pagar: \$ ${valor}`;

})