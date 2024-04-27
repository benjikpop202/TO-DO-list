document.addEventListener("DOMContentLoaded", ()=>{
    let input = document.getElementById("tarea")
    let add = document.getElementById("agregar")
    const contenedor = document.getElementById("contenedor")
    let editado = false

    function obtenerHoraActual() {
       
        let ahora = new Date();
    
        let horas = ahora.getHours();
        let minutos = ahora.getMinutes();
        let segundos = ahora.getSeconds();
    
        if (horas < 10) {
            horas = "0" + horas;
        }
        if (minutos < 10) {
            minutos = "0" + minutos;
        }
        if (segundos < 10) {
            segundos = "0" + segundos;
        }
    
        return horas + ":" + minutos + ":" + segundos;
    }
    
    add.addEventListener("click", ()=>{
        console.log("boton presionado");
        if(input.value == ""){
            alert("TAREA NO AGREGADA")
        }else{
            let card = document.createElement("div")
            card.classList.add("card")
            card.style.width = "18rem"
            card.style.margin = "1rem"
            card.style.transition = "0.5s"
            contenedor.appendChild(card)
            let body = document.createElement("div")
            body.classList.add("card-body")
            card.appendChild(body)
            let title = document.createElement("h5")
            title.classList.add("card-title")
            title.innerHTML = input.value
            body.appendChild(title)
            let ul = document.createElement("ul")
            ul.classList.add("list-group" ,"list-group-flush")
            card.appendChild(ul)
            let li1 = document.createElement("li")
            li1.classList.add("list-group-item")
            li1.style.display = "flex"
            li1.style.alignItems= "center"
            ul.appendChild(li1)
            let complete = document.createElement("input")
            complete.classList.add("form-check-input")
            complete.type = "checkbox"
            let check = false
            complete.style.boxShadow = "0 0 10px gray"
            complete.addEventListener("click",()=>{
            check = !check
            if(check){
                li1.style.backgroundColor = "lightgreen"
            }else{
                li1.style.backgroundColor = "#fff"
            }
        
            })
            li1.appendChild(complete)
            let p = document.createElement("p")
            p.innerHTML = "completado"
            p.style.margin = "0.5rem"
            li1.appendChild(p)
            let li2 = document.createElement("li")
            li2.classList.add("list-group-item")
            ul.appendChild(li2)
            let hora = document.createElement("p")
            if(editado){
              hora.innerHTML = "editado: "+obtenerHoraActual()
              editado = false
            }else{
              hora.innerHTML = "inicio: "+obtenerHoraActual()
            }
           
            li2.appendChild(hora)
           let li3 = document.createElement("li")
            li3.classList.add("list-group-item")
            li3.style.display = "flex"
            li3.style.alignItems = "center"
            li3.style.justifyContent = "space-between"
            ul.appendChild(li3)
            let eliminar = document.createElement("button")
            eliminar.classList.add("btn","btn-danger")
            eliminar.innerHTML = "Eliminar"
            eliminar.addEventListener("click",()=>{contenedor.removeChild(card)})
            li3.appendChild(eliminar)
            let editar = document.createElement("button")
            editar.classList.add("btn", "btn-primary")
            editar.innerHTML = "Editar"
            editar.addEventListener("click", ()=>{
                contenedor.removeChild(card)
                input.value = title.textContent
                editado = true
            })
            li3.appendChild(editar)
        }
    })
    
})


