import { Link } from "react-router-dom"
import './NotFound.css'

const NotFound = () => {
    return(
        <>
        <h1>Página no encontrada</h1>
        <li><Link to={`/`}>Volver a Inicio</Link></li>
        </>
    )
}

export default NotFound