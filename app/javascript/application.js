// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"
import "jquery_ujs"
import "semantic-ui"
import "channels"

window.scroll_bottom = function() {
  setTimeout(function() {
    if ($('#messages').length > 0) {
      $('#messages').scrollTop($('#messages')[0].scrollHeight);
    }
  }, 100);
  }
  
$(document).on('turbo:load', function() {
  $('.ui.dropdown').dropdown();
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  window.scroll_bottom();
})