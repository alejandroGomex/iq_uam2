import React, { useState } from 'react';
import Timer from '../Tools/Timer';
import Pregunta from './Pregunta';
import Pregunta2 from './Pregunta2';

const PreguntasContainer = (modalPreguntasContainer,setModalPreguntasContainer) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [timeExpired, setTimeExpired] = useState(false);
  const [modalPregunta, setModalPregunta] = useState(false);
  const [modalPregunta2, setModalPregunta2] = useState(false);
  const handleTimeExpired = () => {
    setTimeExpired(true);
  };

  const renderQuestion = () => {
    switch (currentQuestion) {
        case 1:
            return <Pregunta modalPregunta={modalPregunta} setModalPregunta={setModalPregunta} />;
          case 2:
            return <Pregunta2 modalPregunta2={modalPregunta2} setModalPregunta2={setModalPregunta2} />;
          /* case 3:
            return <Pregunta3 modalPregunta={modalPregunta} setModalPregunta={setModalPregunta} />;
          case 4:
            return <Pregunta4 modalPregunta={modalPregunta} setModalPregunta={setModalPregunta} />;
            */
          default: 
            return null;
    }
  };

  return (
    <>
      <Timer duration={30} onTimeExpired={handleTimeExpired} />
      {timeExpired ? (
        <p>Tiempo expirado</p>
      ) : (
        renderQuestion()
      )}
      {/* Otro contenido de la pÃ¡gina */}
    </>
  );
};

export default PreguntasContainer;
