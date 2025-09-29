// ResultCard.jsx (Estilos de la tarjeta de resultados)

import React from 'react';

const ResultCard = ({ input, result }) => {
  
  if (!result) {
    // Usar clases de alerta para el placeholder
    return (
      <div className="alert alert-info text-center mt-4" role="alert"> 
        Esperando la conversión de tu habilidad técnica...
      </div>
    );
  }

  return (
    // Usa 'card' para el contenedor, 'shadow' para sombra, y 'p-4' para padding
    <div className="result-card-container card shadow-lg p-4 mt-4 border-success">
      
      <h2 className="card-title text-center text-success mb-4 fs-4">¡Habilidad Convertida!</h2>

      {/* Habilidad Original */}
      <div className="skill-section original-skill border-bottom pb-3 mb-3">
        <p className="section-label fw-bold text-muted">⚙️ Habilidad de Electrónica/Técnica:</p>
        <p className="skill-text original-text fs-5 text-dark">
          **{input}**
        </p>
      </div>

      {/* Separador */}
      <div className="converter-arrow text-center mb-3 fs-3">
        ➡️
      </div>

      {/* Habilidad Convertida */}
      <div className="skill-section converted-skill alert alert-success py-3">
        <p className="section-label fw-bold text-success">🚀 Habilidad Full Stack Equivalente:</p>
        <p className="skill-text converted-text fs-4 fw-bold">
          **{result}**
        </p>
      </div>

      <p className="card-footer text-end text-sm text-muted fst-italic mt-3">
        *Una perspectiva de valor real para el desarrollo de software.
      </p>

    </div>
  );
};

export default ResultCard;