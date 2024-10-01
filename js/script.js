function agregarTarea(){
    //Obtenemos el valor del campo tares
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    //Validamos que el valor no sea vacio
    if(nuevaTareaTexto === ""){
        alert("Por favor, ingrese una tarea");
        return;
    }

    //Crear elemento en la lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    //Crear boton eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function(){ nuevaTarea.remove();}

    //Agregar boton e eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);


    //Agregar el elemento / la tarea de la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    // Limpiar el cuadro de texto del nombre de la tares
    document.getElementById("nuevaTarea").value = "";
    
}