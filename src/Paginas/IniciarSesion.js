import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const IniciarSesion = () => {
    const navigate = useNavigate();
    const [errorUsuario, setErrorUsuario] = useState(false)
    const [ datos, setDatos] = useState({
        correo: null,
        contraseña: null
    })
    const validarDatos = (event) => {
        event.preventDefault()
        axios.post("http://localhost:5000/iniciarSesion", {
            correo: datos.correo,
            contraseña: datos.contraseña
        }).then(res => {

            console.log(res.data);
            if (res.data != null) {
                navigate("Catálogo")
            } else {
                setErrorUsuario(true)
            }

        }).catch(console.log)



    }
    const actualizarDatos = (event) => {
        const { name, value } = event.target
        setDatos({ ...datos, [name]: value })
    }
    return (
        <div className='container'>

            <center><h3>Bienvenido</h3></center>
            <form onSubmit={validarDatos}>
                <div className='row'>
                    <div className='col-5'></div>
                    <input className='col-2' name="correo" onChange={actualizarDatos}></input>
                </div>
                <div className='row mt-2'>
                    <div className='col-5'></div>
                    <input className='col-2' name="contraseña" onChange={actualizarDatos}></input>
                </div>
                <div className="row">
                    <center className='mt-2'><button type="submit">Login</button></center>
                    <center className='mt-2'><Link to="Registrar">¿No tienes Cuenta? Registrate</Link></center>
                </div>
                {errorUsuario &&
                    <div className='text-center mt-3'>
                        No existe usuario ingresado
                    </div>
                }
            </form>


        </div>
    )
}

export default IniciarSesion;