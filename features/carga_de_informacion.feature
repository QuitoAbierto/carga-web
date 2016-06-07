# language: es

Característica: Cargar información
  Escenario: Abriendo la página de inicio
    Dado que ingreso a la aplicación
    Cuando estoy en la página de inicio
    Entonces veo un mapa

  Escenario: Guardar una ubicación
    Dado que ingreso a la aplicación
    Cuando estoy en la página de inicio
    Y selecciono una ubicación
    Y lleno el formulario con los siguientes datos:
      | linea    | nombre             | descripción                       |
      | Alborada | Parada la carolina | Esta es una parada de la linea #5 |
    Cuando envío el formulario
    Entonces veo el mensaje "Guardado exitosamente"

  Escenario: El usuario no provee información
    Dado que ingreso a la aplicación
    Cuando estoy en la página de inicio
    Y selecciono una ubicación
    Cuando envío el formulario
    Entonces veo el mensaje "Todos los campos son obligatorios"
