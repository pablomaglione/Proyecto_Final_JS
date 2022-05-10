let formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", Submit);

function Submit(e){
    e.preventDefault()

    const form = new FormData(this)
    console.log(form.get("name"))
    console.log(form.get("email"))
    console.log(form.get("telefono"))
    console.log(form.get("mensaje"))
    
    formulario.addEventListener("submit", Submit);
    formulario.reset ();   
}
