let textoIngresado = document.querySelector(".input")
let botonAgregar = document.querySelector(".boton-agregar")
let contenedor = document.querySelector(".container")

class Item {
    constructor (nuevaTarea) {
        this.crearDiv(nuevaTarea)
    }
    crearDiv(nuevaTarea) {
        // Codigo para agregar al div un nuevo elemento (nueva tarea)
        let inputItem = document.createElement("input")
        inputItem.disabled = true
        inputItem.classList.add("item-input")
        inputItem.value = nuevaTarea

        let divItem = document.createElement("div")
        divItem.classList.add("item")

        let botonEditar = document.createElement("button")
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
        botonEditar.classList.add("boton-editar")

        let botonRemover = document.createElement("button")
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>"
        botonRemover.classList.add("boton-remover")

        divItem.appendChild(inputItem)
        divItem.appendChild(botonEditar)
        divItem.appendChild(botonRemover)

        let container = document.querySelector(".container");
        container.appendChild(divItem);

        // funcionalidad botones

        botonEditar.addEventListener ("click", function (){
            inputItem.disabled = !inputItem.disabled
            if (inputItem.disabled) {
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
            } else {
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>"
            }
        })

        botonRemover.addEventListener("click", function (){
            divItem.remove()
        })


    }
}

botonAgregar.addEventListener("click", function() {
    if (textoIngresado.value != "") {
        new Item (textoIngresado.value)
        textoIngresado.value = ""
    } else {
        alert ("Por favor, ingrese una tarea")
    }
})