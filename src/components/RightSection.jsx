import React from 'react';
import moment from 'moment';
import './RightSection.css';

const RightSection = ({ people }) => {
  const calculateAgeAndDaysUntilNextBirthday = (birthDate) => {
    const today = moment();
    const birthday = moment(birthDate, 'YYYY-MM-DD');
    const age = today.diff(birthday, 'years');

    // Calcular el próximo cumpleaños
    const nextBirthday = birthday.clone().year(today.year());

    if (nextBirthday.isBefore(today)) {
      nextBirthday.add(1, 'year');
    }

    // Calcular la diferencia en meses y días
    const monthsUntilNextBirthday = nextBirthday.diff(today, 'months');
    today.add(monthsUntilNextBirthday, 'months'); // Restar los meses
    const daysUntilNextBirthday = nextBirthday.diff(today, 'days');

    return { age, monthsUntilNextBirthday, daysUntilNextBirthday };
  };

  return (
    <div className="right-section">
      {people.map((person, index) => {
        const { age, monthsUntilNextBirthday, daysUntilNextBirthday } = calculateAgeAndDaysUntilNextBirthday(person.birthDate);

        let displayText = '';

        if (monthsUntilNextBirthday > 0 && daysUntilNextBirthday > 0) {
          displayText = `Faltan ${monthsUntilNextBirthday} meses y ${daysUntilNextBirthday} días para su cumpleaños`;
        } else if (monthsUntilNextBirthday > 0) {
          displayText = `Faltan ${monthsUntilNextBirthday} meses para su cumpleaños`;
        } else if (daysUntilNextBirthday > 0) {
          displayText = `Faltan ${daysUntilNextBirthday} días para su cumpleaños`;
        } else {
          displayText = '¡Hoy es su cumpleaños!';
        }

        return (
          <div className="person-card" key={index}>
            <img src={person.photoUrl} alt={person.name} />
            <h3>{person.name}</h3>
            <p>Edad: {age} años</p>
            <p>{displayText}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RightSection;
