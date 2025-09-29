// Header.jsx (Estilos de encabezado)

import React from 'react';

const Header = () => {
  return (
    // 'text-center' centra el texto; 'mb-5' margen inferior grande
    <header className="app-header text-center mb-5"> 
      
      {/* 'display-3' título grande; 'fw-bold' fuente en negrita */}
      <h1 className="header-title display-3 fw-bold text-primary"> 
        Electronics to Code Converter <span className="text-secondary"></span>
      </h1>

      {/* 'lead' para un párrafo destacado; 'mb-4' margen inferior */}
      <p className="header-subtitle lead mb-4">
        Traduce tus 15 años de experiencia técnica en habilidades de desarrollo.
        Un puente entre el **Diagnóstico de Hardware** y el **Debugging de Software**.
      </p>

      {/* Texto de apoyo, más discreto */}
      <p className="header-instructions text-muted">
        Introduce una habilidad técnica de electrónica y descubre su equivalente en Full Stack.
      </p>

    </header>
  );
};

export default Header;