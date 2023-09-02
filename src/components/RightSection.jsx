import React from 'react';
import moment from 'moment'; // Importa Moment.js
import './RightSection.css';

const RightSection = ({ people }) => {
  // Función para calcular la edad y días hasta el próximo cumpleaños
  const calculateAgeAndDaysUntilNextBirthday = (birthDate) => {
    const today = moment();
    const birthday = moment(birthDate, 'YYYY-MM-DD'); // Asegúrate de que birthDate esté en el formato correcto

    const age = today.diff(birthday, 'years');
    const nextBirthday = birthday.clone().year(today.year());

    if (nextBirthday.isBefore(today)) {
      nextBirthday.add(1, 'year');
    }

    const daysUntilNextBirthday = nextBirthday.diff(today, 'days');

    return { age, daysUntilNextBirthday };
  };

  return (
    <div className="right-section">
      {people.map((person, index) => {
        const { age, daysUntilNextBirthday } = calculateAgeAndDaysUntilNextBirthday(person.birthDate);
        return (
          <div className="person-card" key={index}>
            <img src={person.photoUrl} alt={person.name} />
            <h3>{person.name}</h3>
            <p>Edad: {age} años</p>
            <p>Faltan {daysUntilNextBirthday} días para su cumpleaños</p>
          </div>
        );
      })}
    </div>
  );
};

export default RightSection;
