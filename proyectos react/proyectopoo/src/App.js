
import './App.css';
import React, { useState } from 'react';
import ReactPlayer from 'react-player'


function App() {
  
  const [selectedVideo, setSelectedVideo] = useState('');
  
  const handleSelectChange = (event) => {
    setSelectedVideo(event.target.value);
  };
  return (
    <div className="App">
    
      <div className='player-wrapper'>
      <select value={selectedVideo} onChange={handleSelectChange} id='lista'>
        <option value="">Selecciona un video</option>
        <option value="https://www.youtube.com/watch?v=SnIzImY9wO4">La bondad de Dios</option>
        <option value="https://www.youtube.com/watch?v=bQNikeLRJQw">El nombre de jesus</option>
        <option value="https://www.youtube.com/watch?v=CuMEoGYMIF4&list=RDbQNikeLRJQw&index=2">espiritu santo</option>
        <option value="https://www.youtube.com/watch?v=UjDiKcjYKCM">Todo va estar bien</option>
        <option value="https://www.youtube.com/watch?v=h5eqo206rMs">Milagro de amor</option>
        <option value="https://www.youtube.com/watch?v=0NoCiaV7McU">jesucristo basta</option>
        {/* Agrega más opciones según sea necesario */}
      </select>
      {selectedVideo && (
        <ReactPlayer url={selectedVideo} controls />
      )}
        
      </div>
    </div>
  );
}

export default App;
