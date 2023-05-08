import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import imagen from '../Imagenes/refugio-2-1.jpg'
import TicketFast from './Ticket-Fast';
const Detalle_ANP = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [contador, setContador] = useState(1)
    const aumentarContador = () => {
        setContador(contador + 1)
    }
    const reducirContador = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }

    }
    return (
        <div>
            <TicketFast/>
            <div className='row'>
                <img src={imagen} id="imagen2" className='col-6'></img>
                <div className='col-6'>
                    <h3>{location.state.nombre}</h3>
                    {/*
                    <p>Para conocer el ACP Bosque Berlín tiene que salir desde Bagua Grande. Vaya al paradero Alto Perú y tome los colectivos que toman la ruta Collicate, Tomocho, Vista Hermosa, hasta llegar a Santa Clara.</p>
                    <p>Una vez en Santa Clara, le sigue una caminata de alrededor de 90 minutos. Se adentrará en un bosque de helechos cubierto por nubes y, cuando menos se lo imagine, verá la casa de los Rimarachín. Respire y maravíllese con su natural estilo de vida.</p>
                    */}
                    <p>{location.state.descripcion}</p>
                    <div className='row'>
                        <div className='col-1'>Cantidad:</div>
                        <div className='col-1'></div>
                        <div className='col-1'><button onClick={reducirContador}>-</button></div>
                        <div className='col-1'>{contador}</div>
                        <div className='col-1'><button onClick={aumentarContador}>+</button></div>
                        <div className='col-3'>Importe total:</div>

                        <div className='col-2'>{`${location.state.precio} PEN`}</div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-8'></div>
                        <div className='col-1'><button onClick={() => navigate("Mensaje_Exito")}>PAGAR</button></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Detalle_ANP;