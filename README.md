# Quality Control Engineer _ Prueba Técnica
Quality Control Engineer _ Prueba Técnica

# 🛫 Prueba Técnica – Automatización de selección de vuelos con Cypress

Este repositorio contiene una **automatización con Cypress y JavaScript** para validar el flujo de selección de vuelo de ida y vuelo Bogotá – Cali, ida y regreso para dos adultos, donde la fecha de regreso es en un mes diferente a la fecha de ida. La automatización está diseñada para **verificar el correcto funcionamiento** de esta parte del sistema en una aplicación web de reservas de vuelos.

---

## 📌 📍 Escenario automatizado a probar

1. Abrir la página de búsqueda de vuelos.
2. Ingresar un origen y un destino válidos.(Bogotá, Cali)
3. Seleccionar fechas de ida y regreso.
4. Aplicar filtros de búsqueda si aplica.
5. Identificar y seleccionar **el vuelo de ida más económico** y **el vuelo de regreso más económico**.(Plan Elige el vuelo y la tarifa que se ajuste a tu escapada
Elige la tarifa más conveniente para tu viaje, ésta se aplicará a todos los viajeros de la reserva. Plan Go Basic)
6. Completar los formularios de datos de los viajeros (sexo,nombre,apellidos, fecha de nacimiento, documento, pais, etc.).
7. Verificar que la selección y los datos se guardan correctamente.
8. Validar que el proceso continúa 

---

## 🎯 Casos de prueba definidos

| **ID** | **Caso de prueba**                                      | **Objetivo**                                                                      |
| ------ | ------------------------------------------------------- | --------------------------------------------------------------------------------- |
| CP01   | Búsqueda de vuelos con datos válidos                    | Validar que la búsqueda retorna resultados para origen/destino y fechas correctas |
| CP02   | Selección de vuelos más económicos                      | Verificar que el sistema identifica correctamente los vuelos de menor precio      |
| CP03   | Completar datos de viajero con datos válidos            | Asegurar que el formulario acepta y guarda los datos correctamente                |
| CP04   | Validar errores cuando campos obligatorios están vacíos | Garantizar que se muestran errores si falta información de viajero                |
| CP05   | Búsqueda con fechas inválidas                           | Verificar que el sistema bloquea o muestra error al ingresar fechas inválidas     |
| CP06   | Manejo de errores de red o carga lentitud               | Validar que la UI muestra un mensaje adecuado si falla la búsqueda                |


---

## 🧪 Tecnologías

Este proyecto usa:

* 🧠 **Cypress** – Framework de pruebas end-to-end diseñado para aplicaciones web modernas ([repositorio.unitec.edu][1])
* ⚙️ **JavaScript (ES6+)**
* 🚀 **Node.js** como entorno de ejecución

---

## 📁 Estructura del proyecto

```
Quality-Control-Engineer-_-Prueba-T-cnica/
│
├── cypress/
│   ├── e2e/
│   │   └── searchFlight.cy.js
│   │
│   ├── pages/
│   │   ├── homePage.js
│   │   ├── resultsPage.js
│   │   └── passengerPage.js
│   │
│   ├── fixtures/
│   │   └── passengerData.json
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🚀 Requisitos previos

Antes de ejecutar las pruebas, asegúrate de tener instalado:

* 👉 Node.js (v14 o superior)
* 👉 npm o Yarn
* 👉 Navegador soportado por Cypress (Chrome, Edge, Firefox)

---

## 💻 Cómo clonar y ejecutar

### 1. Clonar este repositorio

```bash
git clone [https://github.com/tu-usuario/tu-repo.git](https://github.com/paolajpco/Quality-Control-Engineer-_-Prueba-T-cnica)
git clone https://github.com/paolajpco/Quality-Control-Engineer-_-Prueba-T-cnica
```


---

### 2. Instalar dependencias

```bash
cd tu-repo
npm install
```

---

### 3. Ejecutar Cypress (interactivo)

```bash
npx cypress open
```

Esto abrirá la UI de Cypress donde podrás seleccionar y ejecutar los tests.

---

### 4. Ejecutar Cypress en modo headless (sin UI)

```bash
npx cypress run
```

Esto ejecuta todas las pruebas en la consola y genera un reporte de resultados.

---

## 📌 Tips útiles

* Cypress **espera automáticamente** a que las acciones y afirmaciones terminen antes de continuar, lo que mejora la estabilidad de las pruebas ([repositorio.unitec.edu][1])
* Agrega comandos personalizados en `cypress/support/commands.js` para reutilizar pasos comunes.
* Asegura que los **selectores CSS** o `data-cy` sean estables para no tener tests frágiles.

---

## 📦 Scripts disponibles

| Script            | Descripción                          |
| ----------------- | ------------------------------------ |
| `npm test`        | Ejecuta Cypress en modo headless     |
| `npm run cy:open` | Abre la UI de Cypress                |
| `npm run cy:run`  | Ejecuta pruebas en línea de comandos |

---

## 📄 Contribuciones

Si deseas agregar más casos de prueba o mejorar la automatización, puedes:

1. Crear un *branch* nuevo.
2. Agregar/actualizar tu prueba y documentación.
3. Abrir un *pull request* con tu propuesta.

---




