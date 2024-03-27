// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"
import "jquery_ujs"
import "semantic-ui"
import "channels"

const submit_message = function() {
  $('#message_body').on('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      $('button[type="submit"]').trigger('click');
      e.target.value = '';
    }
  });
};


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
  submit_message();
  window.scroll_bottom();
})