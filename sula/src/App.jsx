import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="audio-player">
      <h1>Gatinho WIWIWI</h1>
      <audio controls>
        <source src="WIWIWI.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
}

export default App;