require_relative '../helpers/wait'

Dado(/^que ingreso a la aplicación$/) do
  visit '/'
end

Cuando(/^estoy en la página de mapeo de "([^"]*)"$/) do |page|
  page_map = {
    paradas: 'stop',
    rutas: 'route'
  }
  button_id = "##{page_map[page.to_sym]}-mapping-button"
  find(button_id).click
end

Entonces(/^veo el mapa para seleccionar paradas$/) do
  find '#my-map'
end

Entonces(/^veo el formulario para cargar los datos$/) do
  find '.fields-container'
end

Cuando(/^selecciono una ubicación$/) do
  find('#my-map').click
  find('#next-button').click
end

Cuando(/^lleno el formulario con los siguientes datos:$/) do |table|
  data = table.hashes[0]
  select data['linea'], :from => 'line-field'
  fill_in 'name-field', :with => data['nombre']
  fill_in 'description-field', :with => data['descripción']
end

Cuando(/^envío el formulario$/) do
  click_link('submit')
end

Cuando(/^hago click en siguiente$/) do
  next_button = find '#next-button'
  next_button.click
end

Entonces(/^veo el mensaje "([^"]*)"$/) do |message|
  wait_for_ajax
  message_box = find '#message-box'
  assert message_box.has_content?(message), 'Message not shown!'
end

Cuando(/^cargo la información de una parada$/) do
  find('#my-map').click
  find('#next-button').click
  select 'Alborada', :from => 'line-field'
  fill_in 'name-field', :with => 'default_name'
  fill_in 'description-field', :with => 'default_description'
end

Entonces(/^veo la opción de crear otra parada$/) do
  wait_for_ajax
  new_stop_button = find '#new-stop'
  assert new_stop_button.has_content?('Nueva parada'), 'New Stop Button not present'
end

Cuando(/^quiero crear una nueva parada$/) do
  new_stop_button = find '#new-stop'
  new_stop_button.click
end

Cuando(/^lleno el formulario de ruta con los siguientes datos:$/) do |table|
  data = table.hashes[0]
  fill_in 'name-field', :with => data['nombre']
  fill_in 'description-field', :with => data['descripción']
end

Cuando(/^hago click en empezar$/) do
  next_button = find '#play-button'
  next_button.click
end

Cuando(/^hago click en finalizar$/) do
  next_button = find '#stop-button'
  next_button.click
end
