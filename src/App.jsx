import React, { useState } from 'react';
import LeftSection from './components/LeftSection';
import RightSection from "./components/RightSection";
import './App.css';

function App() {
  const [people, setPeople] = useState([]);

  
  const handleAddPerson = (person) => {
    setPeople([...people, person]);
  };

  return (
    <div className="App">
      <h1>Proyecto de React</h1>
      <div className="sections">
        <LeftSection onAddPerson={handleAddPerson} />
        <RightSection people={people} />
      </div>
    </div>
  );
}

export default App;