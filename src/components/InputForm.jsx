// InputForm.jsx

import React, { useState } from 'react';

// El componente recibe una 'prop' llamada onConvert, 
// que es la función que pasamos desde App.jsx para manejar la conversión.
const InputForm = ({ onConvert }) => {
  
  // 1. Estado local para almacenar el texto que el usuario está escribiendo.
  const [skillInput, setSkillInput] = useState('');

  // 2. Manejador de cambios del input: actualiza el estado local cada vez que se teclea.
  const handleChange = (e) => {
    setSkillInput(e.target.value);
  };

  // 3. Manejador de envío del formulario:
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto de recargar la página

    // Verifica que el campo no esté vacío (validación mínima)
    if (skillInput.trim() === '') {
      alert("Por favor, introduce una habilidad para convertir.");
      return;
    }

    // Llama a la función 'onConvert' (pasada desde App.jsx) 
    // y le pasa el valor actual del input.
    onConvert(skillInput);

    // Opcional: Limpia el input después de enviar.
    setSkillInput('');
  };
 return (
    <div className="input-form-container card shadow-lg p-4 mb-4">
      {/* Formulario que activa la función al enviar */}
      <form onSubmit={handleSubmit} className="conversion-form">
        
        <div className="mb-3"> {/* Margin Bottom 3 para el grupo de formulario */}
          <label htmlFor="skillInput" className="form-label fw-bold">
            Introduce tu habilidad de Electrónica o Técnica:
          </label>
          
          <input
            id="skillInput"
            type="text"
            placeholder="Ej: Diagnóstico de fallos, Interpretación de esquemas..."
            value={skillInput}
            onChange={handleChange}
            className="form-control form-control-lg" // Clase principal de control de formulario y tamaño grande
          />
        </div>
        
        <div className="d-grid"> {/* Para que el botón ocupe todo el ancho */}
            <button type="submit" className="btn btn-primary btn-lg mt-3">
              CONVERTIR a Código
            </button>
        </div>

      </form>
    </div>
  );
}

export default InputForm;