import { Fragment, useState } from "react"

const Listado = () => {

    const [numeros, setNumeros] = useState([1, 2, 3, 4, 5, 6])
    return (
        <Fragment>
            <ul>
                {numeros.map((n, index) => //Pasarle la propiedad key para evitar warnings
                    <li key={index}>{n}</li>
                )}
            </ul>

        </Fragment>
    )
}

export default Listado;