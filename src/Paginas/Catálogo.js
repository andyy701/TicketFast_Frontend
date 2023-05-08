import axios from "axios";
import { useEffect, useState } from "react";
import ANP from "../Componentes/ANP";
import TicketFast from "../Componentes/Ticket-Fast";

const Catálogo = () => {
    const [anps, setAnps] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/anps")
            .then(res => {

                setAnps(res.data)
                console.log(res.data)
            }).catch(console.log)
    }, [])
    return (
        <div className="container">
            <TicketFast/>
            <div className="row"><div>Listado de ANPs</div></div>

            <div className="row mt-5">
                {anps.map((anp) => (
                    <ANP nombre={anp.nombre} precio={anp.precio} descripcion={anp.descripcion}/>
                ))}

            </div>

        </div>
    )
}

export default Catálogo;
