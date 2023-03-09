import React, { useState } from "react";
import './index.css';
import "./styles.css";
import Card from "./Card";

function Formulario() {
  const errorstyle = { color: 'red', padding: '10px'};
  const [username, setUsername] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [formValues, setFormValues] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (username.trim().length < 3 || !/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
      setError(true);
    } else {
      setFormValues({ username: username.trim(), color });
      setError(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          {/* Ingresa tu nombre:  */}
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          {/* Ingresa tu color favorito en formato HEX iniciando con #:  */}
          <input
            type="text"
            placeholder="#000000"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {error && <div style={errorstyle}>Por favor chequea que la información sea correcta.</div>}
      {formValues && (
        <Card username={formValues.username} color={formValues.color} />
      )}
    </div>
  );
}

export default Formulario;
