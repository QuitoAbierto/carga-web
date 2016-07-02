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

  # Escenario: Guardar una ruta
  #   Dado que ingreso a la aplicación
  #   Cuando estoy en la página de mapeo de paradas
  #   Y selecciono una ubicación
  #   Y lleno el formulario con los siguientes datos:
  #     | linea    | nombre             | descripción                       |
  #     | Alborada | Parada la carolina | Esta es una parada de la linea #5 |
  #   Y envío el formulario
  #   Entonces veo el mensaje "Parada guardada exitosamente"

  # Escenario: El voluntario quiere guardar una nueva parada
  #   Dado que ingreso a la aplicación
  #   Cuando estoy en la página de mapeo de paradas
  #   Y cargo la información de una parada
  #   Y envío el formulario
  #   Entonces veo la opción de crear otra parada
  #   Cuando quiero crear una nueva parada
  #   Entonces veo el formulario para cargar los datos
