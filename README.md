# Electronics to Code Converter

**Un puente entre la madurez técnica (Electrónica) y el desarrollo Full Stack moderno.**

[](https://es.react.dev/)
[](https://getbootstrap.com/)
[](https://vercel.com/)

## 🌐 [Ver Demostración en Vivo Aquí]([COLOCAR URL DE VERSEL])

-----

##  Motivación del Proyecto

Este proyecto fue desarrollado como parte de mi transición de una carrera de 15 años como Técnico Senior en Electrónica a Desarrollador Full Stack. El objetivo principal es **validar y visualizar la transferencia de mis habilidades analíticas y de resolución de problemas** al dominio del código.

Busca demostrar que el **diagnóstico de fallos de hardware** es directamente equivalente al **debugging estructurado de software**, posicionando mi experiencia previa como un activo inmediato para cualquier equipo de desarrollo.

##  Funcionalidades Clave

La aplicación de una sola página (SPA) permite a los usuarios:

  * **Entrada de Habilidad:** Introducir un concepto o habilidad de electrónica (ej., "Interpretación de esquemas", "Soldaduras BGA").
  * **Conversión Lógica:** El componente principal (`App.jsx`) procesa la entrada y mapea la habilidad a su equivalente en programación (ej., "Análisis de arquitectura de código", "Testing unitario de componentes").
  * **Diseño Profesional:** Interfaz limpia y responsiva gracias a la implementación de **Bootstrap 5**.

##  Stack Tecnológico

El proyecto ha sido desarrollado utilizando herramientas estándar de la industria, demostrando competencia en el *stack* moderno de JavaScript:

| Categoría | Tecnología | Uso en el Proyecto |
| :--- | :--- | :--- |
| **Frontend Core** | **ReactJS (con Vite)** | Desarrollo de la Interfaz de Usuario mediante componentes funcionales y **Hooks (`useState`)**. |
| **Lenguaje** | **JavaScript (ES6+)** | Lógica de conversión de datos y manejo del estado. |
| **Estilos** | **Bootstrap 5** | Diseño profesional, rápido y **responsive** (móvil-amigable). |
| **Herramientas** | **Git / GitHub** | Control de versiones y colaboración. |
| **Despliegue** | **Vercel** | **Integración Continua (CI/CD)**: Despliegue automático con cada *push* a la rama `main`. |

##  Estructura de Componentes

La aplicación sigue una arquitectura clara de React:

1.  **`App.jsx`:** Componente inteligente. Gestiona el estado (`inputSkill`, `convertedSkill`) y contiene la lógica de negocio (`handleConvert`).
2.  **`Header.jsx`:** Componente presentacional. Muestra el título y la motivación del proyecto.
3.  **`InputForm.jsx`:** Componente presentacional. Maneja el estado local del campo de texto y llama a la *prop* `onConvert` al hacer *submit*.
4.  **`ResultCard.jsx`:** Componente presentacional. Muestra el resultado de la conversión (entrada original vs. habilidad de código).

-----

##  Configuración y Ejecución Local

Si deseas clonar y ejecutar este proyecto para revisión técnica:

### 1\. Requisitos

Asegúrate de tener **Node.js** (versión 16+) y **npm** instalados.

### 2\. Instalación

Clona el repositorio e instala las dependencias (incluyendo Bootstrap 5):

```bash
# 1. Clonar el repositorio
git clone https://aws.amazon.com/es/what-is/repo/
cd electronics-to-code

# 2. Instalar dependencias
npm install
```

### 3\. Ejecución

Inicia el servidor de desarrollo local de Vite:

```bash
# Inicia la aplicación en http://localhost:5173/
npm run dev
```

### 4\. Construcción para Producción (Deploy)

Para generar la versión optimizada y minificada lista para subir a cualquier hosting estático:

```bash
npm run build
```

Esto creará la carpeta `dist/` con los archivos estáticos.

-----

## 📞 Contacto

Este proyecto demuestra mi capacidad para crear aplicaciones funcionales y bien estructuradas con React.

  * **David García**
  * **Email:** [david.garcia.0410@gmail.com]
  * **LinkedIn:** [https://www.linkedin.com/in/david-garcía-pinchao-47569b65]

**¡Gracias por revisar mi trabajo\!**
