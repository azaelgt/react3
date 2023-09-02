import React, { useState, useEffect } from 'react';
import './LeftSection.css';

const LeftSection = ({ onAddPerson }) => {
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [birthDate, setBirthDate] = useState('');

  useEffect(() => {
    getRandomData();
  }, []);

  const getRandomData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const user = data.results[0];

      const fullName = `${user.name.first} ${user.name.last}`;
      setName(fullName);
      setPhotoUrl(user.picture.large);
      setBirthDate(user.dob.date); // Establecer la fecha de nacimiento
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddClick = () => {
    const newPerson = { name, photoUrl, birthDate }; // Incluir la fecha de nacimiento
    onAddPerson(newPerson);
    getRandomData(); // Obtener nuevos datos después de agregar la persona
  };

  return (
    <div className="left-section">
      <div className="card">
        <h2>Agregar Persona</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          readOnly
        />
        <input
          type="text"
          placeholder="URL de la Foto"
          value={photoUrl}
          readOnly
        />
        <input
          type="text"
          placeholder="Fecha de Nacimiento"
          value={birthDate}
          readOnly
        />
        <button onClick={handleAddClick}>Agregar Persona</button>
      </div>
    </div>
  );
};

export default LeftSection;
