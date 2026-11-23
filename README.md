# Prácticas de React

Repositorio de ejercicios realizados como práctica de un curso de React. Reúne ejemplos pequeños e independientes para aprender los fundamentos de React, trabajar con su API y explorar bibliotecas del ecosistema. No es una aplicación única: cada ejercicio está pensado para activarse desde el punto de entrada.

## Stack y herramientas

- **JavaScript** y **React 18** para construir interfaces con componentes.
- **Create React App** (`react-scripts` 5) como entorno de desarrollo, servidor local y herramienta de compilación.
- **HTML y CSS** para la estructura y los estilos, incluidos CSS Modules en algunos componentes.
- **React Router DOM** para los ejercicios de navegación.
- **styled-components** para estilos declarativos y dinámicos desde JavaScript.
- **Axios** y `fetch` para solicitudes HTTP.
- **react-transition-group** y **react-reveal** para transiciones y animaciones.
- Bibliotecas de apoyo presentes en los ejercicios: `prop-types`, `use-debounce`, `react-spinners`, `query-string`, `chart.js` y `faker`.
- Para pruebas se incluyen Jest a través de Create React App y utilidades de `@testing-library/react`, `@testing-library/jest-dom` y `@testing-library/user-event`.

Las versiones concretas de las dependencias se declaran en `package.json` y se fijan para la instalación mediante `package-lock.json`.

## Temas y funcionalidades practicadas

Los directorios de `src/` agrupan los ejemplos por tema:

| Directorio | Contenidos |
| --- | --- |
| `ejercicios-react-core-basicos/` | Componentes funcionales, props, `children`, valores por defecto y validación con PropTypes; eventos, estado, renderizado condicional, fragments, portales y renderizado de HTML. |
| `ejercicios-iterando-listas/` | Renderizado de listas de valores y objetos, paso de datos a componentes e identificación de elementos con `key`. |
| `ejercicios-refs/` | Referencias a elementos del DOM, `forwardRef` e integración de refs con bibliotecas de terceros. |
| `ejercicios-formularios/` | Formularios controlados y no controlados, referencias, propagación de datos, inputs, selects, opciones múltiples y checkboxes. |
| `ejercicios-http/` | Solicitudes HTTP con `fetch`, Axios y `async`/`await`; ejemplos de búsqueda de películas y consumo de datos. |
| `ejercicios-ciclo-vida-componentes/` | Métodos de ciclo de vida de componentes de clase, actualizaciones y optimización del renderizado. |
| `ejercicios-children/` | Composición de componentes y uso de `children` entre componentes hermanos. |
| `ejercicios-hooks/` | Estado y efectos; `useContext`, `useReducer`, `useRef`, `useLayoutEffect`, `useMemo`, `useCallback`, `useImperativeHandle` y `useDebugValue`; hooks personalizados, solicitudes HTTP y debounce. |
| `ejercicios-lazy-suspense/` | Carga diferida de componentes con `lazy` y `Suspense`, con indicador de carga. |
| `ejercicios-transiciones-animaciones/` | Transiciones con CSS y estilos en línea, acordeón, slides, carrusel y animaciones con bibliotecas. |
| `ejercicios-styled-components/` | Componentes estilizados, estilos globales y anidados, props dinámicas, pseudo-clases, media queries, utilidades CSS y keyframes. |
| `ejercicios-react-router/` | Rutas, enlaces, navegación activa, parámetros de ruta y query, props en componentes enrutados e historial. |

El directorio `public/` contiene el HTML base y recursos estáticos; `src/index.js` es el punto de entrada que monta el ejercicio seleccionado.

## Requisitos

- Node.js y npm instalados.

## Instalación y ejecución

```bash
npm install
npm start
```

La aplicación de desarrollo queda disponible en [http://localhost:3000](http://localhost:3000).

### Seleccionar un ejercicio

Los imports de los ejemplos están enumerados y comentados en `src/index.js`. Para probar uno:

1. Comenta el import del ejercicio actualmente activo (`./App`).
2. Descomenta el import del ejercicio que quieras ejecutar.
3. Guarda el archivo; el servidor de desarrollo recargará la aplicación.

Activa un solo import de `App` a la vez. Muchos ejercicios tienen su propio componente y algunos también requieren sus archivos CSS o componentes auxiliares, ya organizados en sus carpetas.

> **Compatibilidad de rutas:** el proyecto instala React Router DOM 6, mientras que algunos ejercicios de enrutamiento usan APIs de versiones anteriores, como `Switch` y `Redirect`. Esos ejemplos pueden requerir adaptar sus imports y rutas a la API de la versión instalada antes de ejecutarlos.

## Scripts disponibles

- `npm start`: inicia el servidor de desarrollo.
- `npm test`: inicia el ejecutor de pruebas de Create React App en modo interactivo.
- `npm run build`: genera la compilación optimizada para producción en `build/`.
- `npm run eject`: expone la configuración interna de Create React App de forma irreversible; no es necesario para trabajar con los ejercicios.
