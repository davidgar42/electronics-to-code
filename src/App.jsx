import { useState } from "react";
// Importa tus componentes aquí: InputForm, ResultCard
import ResultCard from "./components/ResultCard";
import InputForm from "./components/InputForm";
import Header from "./components/Header";

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
      soldadura: "maquetación",
    };
    const result =
      mapping[skill.toLowerCase()] || "Habilidad de Código no mapeada todavía.";
    setConvertedSkill(result);
  };

  return (
    // Usa 'container' para limitar el ancho y 'py-5' para padding vertical grande
    <div className="container my-5">
      {/* El main es el contenido central */}
      <main className="main-content">
        <Header />

        {/* Añade un margen vertical entre los componentes */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            {" "}
            {/* Limita el ancho del contenido */}
            <InputForm onConvert={handleConvert} />
            <ResultCard input={inputSkill} result={convertedSkill} />
          </div>
        </div>
      </main>

      {/* Footer sencillo */}
      <footer className="text-center mt-5 text-muted border-top pt-3">
        <p>&copy; 2025 David García - Portafolio de Transición de Carrera</p>
      </footer>
    </div>
  );
}

export default App;
