import { useNavigate } from 'react-router-dom';
import imagen from '../Imagenes/refugio-2-1.jpg'

const ANP = (props) => {
    const navigate=useNavigate()
    return (
        <div className='col-4'>
            
            <div >{props.nombre}</div>
           
            <img src={imagen} id="imagen"></img>
            <div className="row mt-2" >
                <div className="col-1"><button type="button" onClick={()=>navigate("Detalle_ANP",{ state: { nombre: props.nombre, precio: props.precio, descripcion: props.descripcion } })}>COMPRAR</button></div>
                <div className='col-1'></div>
                <div className="col-2">{`${props.precio} PEN`}</div>
            </div>

        </div>

    )
}

export default ANP;