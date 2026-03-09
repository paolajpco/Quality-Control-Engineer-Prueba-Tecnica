# Estrategia de Pruebas

## Objetivo
Definir el enfoque para validar la funcionalidad de búsqueda y selección de vuelos.

## Enfoque de pruebas

Las pruebas se ejecutarán siguiendo el flujo principal del usuario:

1. Ingreso al sitio web
2. Búsqueda de vuelos
3. Selección de vuelos
4. Validación de tarifas
5. Confirmación del itinerario

## Técnicas de prueba utilizadas

- Pruebas basadas en escenarios
- Pruebas exploratorias
- Validación de UI
- Pruebas de regresión manual en caso de idemtificar una tasa de defectos x
- Retest en caso de una baja tasa de defectos x

## Gestión de defectos

Los defectos encontrados se documentarán incluyendo:

- Descripción
- Pasos para reproducir
- Evidencias
- Severidad
- Prioridad

## Riesgos

| Riesgo | Mitigación |
|---|---|
| Cambios en la web | Actualizar casos de prueba |
| Vuelos no disponibles | Cambiar fechas |