# Quality Control Engineer _ Prueba Técnica


# Prueba Técnica – Automatización de selección de vuelos con Cypress

Este repositorio contiene una **automatización con Cypress y JavaScript** para validar el flujo de selección de vuelo de ida y vuelo Bogotá – Cali, ida y regreso para dos adultos, donde la fecha de regreso es en un mes diferente a la fecha de ida. La automatización está diseñada para **verificar el correcto funcionamiento** de esta parte del sistema en una aplicación web de reservas de vuelos.

---

## 📌 📍 Escenario automatizado a probar

1. Abrir la página de búsqueda de vuelos.
2. Ingresar un origen y un destino válidos.(Bogotá, Cali)
3. Seleccionar fechas de ida y regreso, donde la fecha de regreso sea en un mes diferente a la fecha de ida.
4. Aplicar filtros de búsqueda.
5. Identificar y seleccionar **el vuelo de ida más económico** y **el vuelo de regreso más económico**.(Plan Elige el vuelo y la tarifa que se ajuste a tu escapada
Elige la tarifa más conveniente para tu viaje, ésta se aplicará a todos los viajeros de la reserva. Plan Go Basic)
6. Completar los formularios de datos de los viajeros (sexo,nombre,apellidos, fecha de nacimiento, documento, pais, etc.).
7. Verificar que la selección y los datos se guardan correctamente.
8. Validar que el proceso continúa 

---

## 🎯 Casos de prueba definidos

| ID   | Caso de prueba                                          | Objetivo                                                                          | Pasos                                                                                                                                                                  | Datos de prueba                                                                                                          | Resultado esperado                                                                                                    |
| ---- | ------------------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| CP01 | Búsqueda de vuelos con datos válidos                    | Validar que la búsqueda retorna resultados para origen/destino y fechas correctas | 1. Abrir la página de búsqueda de vuelos.<br>2. Ingresar origen y destino.<br>3. Seleccionar fechas de ida y regreso.<br>4. Aplicar filtros de búsqueda.               | Origen: Bogotá<br>Destino: Cali<br>Fecha ida: 2026-03-15<br>Fecha regreso: 2026-03-20                                    | El sistema muestra vuelos disponibles que cumplen con los criterios ingresados.                                       |
| CP02 | Selección de vuelos más económicos                      | Verificar que el sistema identifica correctamente los vuelos de menor precio      | 1. Realizar búsqueda de vuelos (CP01).<br>2. Ordenar o identificar vuelos por precio.<br>3. Seleccionar vuelo de ida más económico y vuelo de regreso más económico.   | Plan de tarifa: Go Basic                                                                                                 | Los vuelos seleccionados son los de menor precio dentro de los resultados mostrados.                                  |
| CP03 | Completar datos de viajero con datos válidos            | Asegurar que el formulario acepta y guarda los datos correctamente                | 1. Continuar después de seleccionar vuelo (CP02).<br>2. Completar formulario de viajero.                                                                               | Sexo: F/M<br>Nombre y Apellidos: válidos<br>Fecha de nacimiento: dd/mm/aaaa<br>Documento: CC/Pasaporte<br>País: Colombia | El sistema acepta los datos, no muestra errores y permite continuar al pago o resumen de reserva.                     |
| CP04 | Validar errores cuando campos obligatorios están vacíos | Garantizar que se muestran errores si falta información de viajero                | 1. Continuar después de seleccionar vuelo (CP02).<br>2. Dejar campos obligatorios vacíos y enviar formulario.                                                          | Dejar vacío: Nombre, Apellido o Documento                                                                                | El sistema muestra mensajes de error indicando los campos obligatorios que faltan.                                    |
| CP05 | Búsqueda con fechas inválidas                           | Verificar que el sistema bloquea o muestra error al ingresar fechas inválidas     | 1. Abrir la página de búsqueda de vuelos.<br>2. Ingresar origen y destino.<br>3. Ingresar fechas inválidas (fecha regreso antes de fecha ida).<br>4. Aplicar búsqueda. | Fecha ida: 2026-03-20<br>Fecha regreso: 2026-03-15                                                                       | El sistema bloquea la búsqueda o muestra un mensaje de error indicando que las fechas son inválidas.                  |
| CP06 | Manejo de errores de red o carga lenta                  | Validar que la UI muestra un mensaje adecuado si falla la búsqueda                | 1. Simular falla de red o retraso en la respuesta.<br>2. Realizar búsqueda de vuelos.                                                                                  | Origen/Destino válidos                                                                                                   | El sistema muestra mensaje adecuado: “Error de conexión” o “No se pudieron cargar los resultados, intente más tarde”. |



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

* Node.js (v14 o superior)
* npm o Yarn
* Cypress 
* Navegador soportado por Cypress (Chrome, Edge, Firefox)

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
npm install, Validar npm -v
npm install cypress --save-dev , Validar npx cypress --version
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

## 📄 Lectura de Resultados

| Código HTTP | Nombre del Estado     | Qué significa                      | Resultado esperado en prueba     | Ejemplo en Cypress                   |
| ----------- | --------------------- | ---------------------------------- | -------------------------------- | ------------------------------------ |
| 200         | OK                    | La solicitud fue exitosa           | ✅ La prueba debe pasar           | `expect(response.status).to.eq(200)` |
| 201         | Created               | Recurso creado exitosamente        | ✅ Validar creación               | `expect(response.status).to.eq(201)` |
| 204         | No Content            | Éxito sin contenido en respuesta   | ✅ Validar que body esté vacío    | `expect(response.body).to.be.empty`  |
| 400         | Bad Request           | Error en datos enviados            | ⚠️ Validar mensaje de error      | `expect(response.status).to.eq(400)` |
| 401         | Unauthorized          | No autenticado                     | ❌ Validar que no permita acceso  | `expect(response.status).to.eq(401)` |
| 403         | Forbidden             | No tiene permisos                  | ❌ Validar control de acceso      | `expect(response.status).to.eq(403)` |
| 404         | Not Found             | Recurso no existe                  | ❌ Validar manejo de error        | `expect(response.status).to.eq(404)` |
| 405         | Method Not Allowed    | Método HTTP incorrecto             | ❌ Validar restricción de método  | `expect(response.status).to.eq(405)` |
| 409         | Conflict              | Conflicto (ej: registro duplicado) | ⚠️ Validar mensaje de conflicto  | `expect(response.status).to.eq(409)` |
| 422         | Unprocessable Entity  | Error de validación de datos       | ⚠️ Validar estructura de errores | `expect(response.status).to.eq(422)` |
| 500         | Internal Server Error | Error del servidor                 | ❌ Detectar fallo backend         | `expect(response.status).to.eq(500)` |
| 503         | Service Unavailable   | Servicio no disponible             | ❌ Validar reintentos o fallback  | `expect(response.status).to.eq(503)` |


Para esta prueba eb pagina de ambiente productivo obtuvimos como respuesta
| 401         | Unauthorized          | No autenticado                     | ❌ Validar que no permita acceso  | `expect(response.status).to.eq(401)` |
<img width="1882" height="817" alt="image" src="https://github.com/user-attachments/assets/d1266127-023a-4f9e-893f-38ec48ecf252" />
URL ADJUNTO  CAPTURA DE IMAGEN DE PPRUEBA DE LA EJECUCIÓN:
https://github.com/user-attachments/assets/d1266127-023a-4f9e-893f-38ec48ecf252 



