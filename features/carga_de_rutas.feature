# language: es

Característica: Mapeo de rutas
  Escenario: Formulario de datos
    Dado que ingreso a la aplicación
    Cuando estoy en la página de mapeo de "rutas"
    Entonces veo el formulario para cargar los datos

  Escenario: El voluntario no provee información
    Dado que ingreso a la aplicación
    Cuando estoy en la página de mapeo de "rutas"
    Y hago click en siguiente
    Entonces veo el mensaje "Todos los campos son obligatorios"

  Escenario: Guardar una ruta
    Dado que ingreso a la aplicación
    Cuando estoy en la página de mapeo de "rutas"
    Y lleno el formulario de ruta con los siguientes datos:
      | nombre             | descripción                       |
      | Parada la carolina | Esta es una parada de la linea #5 |
    Y hago click en siguiente
    Y hago click en empezar
    Entonces veo el mensaje "Mapeando ruta..."
    Cuando hago click en finalizar
    Entonces veo el mensaje "Ruta guardada exitosamente"
