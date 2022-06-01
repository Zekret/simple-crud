import { useState } from "react"
import uniqid from 'uniqid'

const NamesList = () => {

    const [nombre, setNombre] = useState('')
    const [lista, setLista] = useState([])
    const [edit, setEdit] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)

    const addName = (e) => {
        e.preventDefault()
        if (!nombre.trim()) {
            setError("El campo nombre esta vacio")
            return
        }
        const nuevoNombre = {
            id: uniqid(),
            name: nombre
        }
        setLista([...lista, nuevoNombre])
        setNombre('')
        setError(null)
    }

    const deleteName = (id) => {
        const newArray = lista.filter(item => item.id !== id)
        setLista(newArray)
    }

    const editName = (item) => {
        setEdit(true)
        setNombre(item.name)
        setId(item.id)
    }

    const editSuccess = (e) => {
        e.preventDefault()
        const newArray = lista.map(item => item.id === id ? { id: id, name: nombre } : item)
        setLista(newArray)
        setEdit(false)
        setNombre('')
    }

    return (
        <div style={{ height: '70%' }}>
            <div className="mb-3">
                <h1>CRUD BASICA</h1>
            </div>
            <div>
                <div className="row">
                    <div className="col">
                        <h2>Listado de nombres</h2>
                        <ul className="list-group">
                            {lista.map(n =>
                                <li key={n.id} className="list-group-item d-flex justify-content-between">
                                    {n.name}
                                    <div className="d-flex justify-content-evenly" style={{ gap: "10px" }}>
                                        <button
                                            onClick={() => deleteName(n.id)}
                                            className="btn btn-danger float-right">
                                            Borrar
                                        </button>
                                        <button
                                            onClick={() => editName(n)}
                                            className="btn btn-info float-right">
                                            Editar
                                        </button>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Formulario agregar nombres</h2>
                        <form onSubmit={edit ? editSuccess : addName} className="form-group">
                            <input
                                onChange={(e) => { setNombre(e.target.value) }}
                                className="form-control mb-3"
                                type="text"
                                placeholder="Introduce el nombre"
                                value={nombre}
                            />
                            <input
                                className="btn btn-info btn-block"
                                type="submit"
                                value={edit ? 'Editar nombre' : 'Registrar Nombre'} />
                        </form>
                        {
                            error !== null &&
                            <div className="alert alert-danger mt-3">
                                {error}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NamesList