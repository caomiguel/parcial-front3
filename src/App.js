import React, { useState } from "react";
import './index.css';
import Card from "./Card"
import Formulario from "./Formulario"

function App() {
  const [showCard, setShowCard] = useState(false);
  const [username, setUsername] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowCard(true);
  };

  return (
    <div className="card-container">
      <h1>Elige un color</h1>
      {showCard ? (
        <Card username={username} color={color} />
      ) : (
        <Formulario
          username={username}
          setUsername={setUsername}
          color={color}
          setColor={setColor}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default App;