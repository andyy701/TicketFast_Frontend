import { Link } from 'react-router-dom';
import check from '../Imagenes/icono-check.png'
import TicketFast from './Ticket-Fast';
const Mensaje_Exito =()=>{
    return(
       <div className='container'>
           <TicketFast/>
           <center><h3>¡FELICIDADES!</h3></center>
           <center><img src={check} id="check"></img></center>
           <center className='mt-3'><div className='col-3'>Tu compra ha sido concretada. Revisa tu correo para ver la información de tu compra</div></center>
           <div className='row'>
               <div className='col-6'></div>
               <Link to="/Catálogo" className='col-2'>Volver a inicio ></Link>
           </div>
           
       </div>
    )
}

export default Mensaje_Exito;