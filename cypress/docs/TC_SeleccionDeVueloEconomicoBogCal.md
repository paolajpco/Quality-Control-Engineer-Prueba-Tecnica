# TC_FLIGHT_001 - Selección de vuelo económico Bogotá – Cali (ida y regreso)

## Información General
| Campo | Descripción |
|------|-------------|
| ID del Caso de Prueba | TC_FLIGHT_001 |
| Módulo | Búsqueda y selección de vuelos |
| Prioridad | Alta |
| Tipo de Prueba | Funcional / E2E |
| Autor | QA |
| Fecha | 2026-03-09 |

## Descripción
Validar que un usuario pueda buscar y seleccionar un vuelo ida y regreso Bogotá – Cali para dos adultos, donde la fecha de regreso corresponde a un mes diferente al de la fecha de ida, seleccionando la tarifa económica **Plan Go Basic** en la página de Wingo.

## Precondiciones
- El usuario tiene acceso a internet.
- El navegador está actualizado.
- El usuario accede al sitio https://www.wingo.com/
- Existen vuelos disponibles para la ruta Bogotá – Cali en las fechas seleccionadas.

## Datos de Prueba

| Campo | Valor |
|------|------|
| Origen | Bogotá |
| Destino | Cali |
| Tipo de viaje | Ida y regreso |
| Pasajeros | 2 adultos |
| Fecha ida | 15/03/2026 |
| Fecha regreso | 10/04/2026 |
| Tarifa | Go Basic (económica) |

## Pasos de Prueba

| Paso | Acción | Resultado Esperado |
|-----|--------|--------------------|
| 1 | Ingresar a https://www.wingo.com | Se visualiza la página principal de Wingo |
| 2 | Seleccionar tipo de viaje "Ida y regreso" | El sistema habilita selección de fechas ida y regreso |
| 3 | Ingresar origen "Bogotá" | El sistema muestra Bogotá como aeropuerto de origen |
| 4 | Ingresar destino "Cali" | El sistema muestra Cali como destino |
| 5 | Seleccionar fecha de ida en marzo | La fecha queda registrada correctamente |
| 6 | Seleccionar fecha de regreso en abril (mes diferente) | El sistema permite seleccionar una fecha en un mes distinto |
| 7 | Seleccionar 2 pasajeros adultos | El contador refleja 2 adultos |
| 8 | Hacer clic en "Buscar vuelos" | El sistema muestra vuelos disponibles para la ruta |
| 9 | Seleccionar vuelo de ida con tarifa económica "Go Basic" | El vuelo queda seleccionado |
| 10 | Seleccionar vuelo de regreso con tarifa económica "Go Basic" | El vuelo queda seleccionado |
| 11 | Confirmar selección de vuelos | El sistema muestra el resumen del viaje |

## Resultado Esperado
El sistema debe permitir seleccionar vuelos de ida y regreso Bogotá – Cali para dos adultos con fechas en meses diferentes, mostrando correctamente la tarifa económica **Go Basic** y el resumen del viaje.

## Resultado Actual
Pendiente de ejecución.

## Estado
No ejecutado

## Evidencia
Pendiente de captura (screenshots o grabación del flujo).

## Observaciones
Validar que:
- El sistema permita fechas en meses diferentes.
- La tarifa económica Go Basic esté disponible.
- El total del vuelo se actualice correctamente para dos pasajeros.