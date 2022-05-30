import { useState } from "react"

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')
    
    const validar = (event) => {
        event.preventDefault() //Captura el evento submit y evitar que se recargue la pagina
        if (!nombre.trim()) { //Trim evalua si hay cadena de caracteres
            console.log("El campo nombre esta vacio")
            return
        }
        if (!edad.trim()) {
            console.log("El campo edad esta vacio")
            return
        }

    }

    return (
        <div className="container">
            <form onSubmit={validar} className="form-group">
                <input
                    placeholder="Introduce el nombre"
                    className="form-control mb-3"
                    type="text"
                    onChange={(e) => (setNombre(e.target.value))}
                />
                <input
                    placeholder="Introduce la edad"
                    className="form-control mb-3"
                    type="text"
                    onChange={(e) => (setEdad(e.target.value))}
                />
                <input className="btn btn-info btn-block mb-3" type="submit" />
            </form>
        </div>
    )
}

export default Formulario