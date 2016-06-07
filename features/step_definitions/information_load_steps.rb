require_relative '../helpers/wait'

Dado(/^que ingreso a la aplicación$/) do
  page.visit '/'
end

Cuando(/^estoy en la página de inicio$/) do
end

Entonces(/^veo un mapa$/) do
  page.find '#my-map'
end

Cuando(/^selecciono una ubicación$/) do
  find('#my-map').click
  find('.next').click
end

Cuando(/^lleno el formulario con los siguientes datos:$/) do |table|
  data = table.hashes[0]
  select data['linea'], :from => 'line-field'
  fill_in 'name-field', :with => data['nombre']
  fill_in 'description-field', :with => data['descripción']
end

Cuando(/^envío el formulario$/) do
  page.click_link('submit')
end

Entonces(/^veo el mensaje "([^"]*)"$/) do |message|
  wait_for_ajax
  message_box = page.find '#message-box'
  assert message_box.has_content?(message), 'Message not shown!'
end
