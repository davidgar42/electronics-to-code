import { useState } from "react";
// Importa tus componentes aquí: InputForm, ResultCard

function App() {
  // 1. Estado para almacenar la entrada del usuario (Habilidad de Electrónica)
  const [inputSkill, setInputSkill] = useState("");
  // 2. Estado para almacenar el resultado de la conversión (Habilidad de Código)
  const [convertedSkill, setConvertedSkill] = useState(null);

  // Función que realiza la "conversión"
  const handleConvert = (skill) => {
    setInputSkill(skill);
    // Lógica de mapeo: Esto simularía una lógica de backend o una función compleja
    const mapping = {
      "diagnóstico de fallos": "debugging estructurado",
      "interpretación de esquemas": "análisis de arquitectura de código",
      "soldaduras bga": "testing de componentes críticos",
    };
    const result =
      mapping[skill.toLowerCase()] || "Habilidad de Código no mapeada todavía.";
    setConvertedSkill(result);
  };

  return (
    <div className="container">
      {/* Aquí pasas el estado y la función a los componentes hijos */}
      <InputForm onConvert={handleConvert} />
      <ResultCard input={inputSkill} result={convertedSkill} />
    </div>
  );
}

export default App;
