import React from 'react'
import { useEffect, useState} from 'react'
import { conectarWebSocket, suscribirse,enviarMensaje,desconectarWebSocket } from '../../services/chatService'
import '../../styles/Chat.css'
const Home = () => {
    const [chat, setChat] = useState([]);
    const [mensaje, setMensaje] = useState("");
    const [conectado, setConectado] = useState(false);

    useEffect(() =>{
        conectarWebSocket();
        suscribirse((mensaje) => {
            setChat((prevChat) => [...prevChat,mensaje])
        console.log("Mensaje recibido:", mensaje);
        });
        
        return() =>{
            desconectarWebSocket();
        }
    },[])
    
  return (
    <div>

      <div>
        <h1>MainChat</h1>
      <label>Escribe tu mensaje: </label>
        <input type="text" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
        <button onClick={() => enviarMensaje({usuario: "Ariana", contenido: mensaje})}>Enviar</button>
      </div>

      <div className='contenedor-chat'>
        {chat.map((m,i) => 
            (
                <div className='contenedor-mensaje' key={i}>
                <h3>{m.usuario}</h3>
                <div className='mensaje'>
                    <p>{m.contenido}</p>
                </div>
                <p style={{ fontSize: '0.6em' }}>
                    {m.fecha}
                </p>
                </div>
            )
         )
        }
      </div>
    </div>
  )
}

export default Home
