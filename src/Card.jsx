import React from "react";
import "./styles.css";

//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ username, color }) {
    const style = { backgroundColor: color, color: 'white', padding: '10px'};
    return (
      <div style={style}>
        <p>Hola {username}, tu color favorito es {color}</p>
        <div style={{ backgroundColor: color, height: '50px', width: '50px' }} />
      </div>
    );
  }
  
  export default Card;