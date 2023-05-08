import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registrar = () => {
    const navigate = useNavigate();
    const [datos, setDatos] = useState({
        correo: null,
        contraseña: null,
        nombre: null,
        apellido: null
    })
    const guardarDatos = (event) => {
        event.preventDefault()
        axios.post("http://localhost:5000/usuarios",{
            correo:datos.correo,
            contraseña:datos.contraseña,
            nombre:datos.nombre,
            apellido:datos.apellido
        }).then(res=>{
            console.log("MIRA")
            console.log(res.data)
        })
        navigate("/")
    }
    const actualizarDatos = (event) => {
        const { name, value } = event.target
        setDatos({ ...datos, [name]: value })
    }
    return (
        <div className="container">
            <h3>Registrarse</h3>
            <form onSubmit={guardarDatos}>
                <div className='row mt-2'>
                    <div className='col-1'>Correo:</div>
                    <input className='col-2' name="correo" onChange={actualizarDatos}></input>
                </div>
                <div className='row mt-2'>
                    <div className='col-1'>Contraseña:</div>
                    <input className='col-2' name="contraseña" onChange={actualizarDatos}></input>
                </div>
                <div className='row mt-2'>
                    <div className='col-1'>Nombre:</div>
                    <input className='col-2' name="nombre" onChange={actualizarDatos}></input>
                </div>
                <div className='row mt-2'>
                    <div className='col-1'>Apellido:</div>
                    <input className='col-2' name="apellido" onChange={actualizarDatos}></input>
                </div>
                

                <div className='row mt-3'>
                    <div className="col-1"></div>
                    <button className="col-1" type="submit">Registrar</button>
                </div>
            </form>


        </div>
    )
}

export default Registrar;