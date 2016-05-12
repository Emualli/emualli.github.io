$(document).ready(function() {

  /* Button 1 */

  if ($('#number1').text() === '0') {
    $('#remove_button1').addClass('disabled');
  }

  $('#add_button1').on('click', function() {
    new_val = $('#number1').text();
    new_val = parseInt(new_val) + 1
    $('#number1').text(new_val);
    if ($('#number1').text() != '0') {
    $('#remove_button1').removeClass('disabled');
  }
  });

  $('#remove_button1').on('click', function() {
    if ($('#number1').text() !== '0') {
    new_val = $('#number1').text();
    new_val = parseInt(new_val) - 1
    $('#number1').text(new_val);
    }
    if ($('#number1').text() === '0') {
      $('#remove_button1').addClass('disabled');
    }
  });

  /* Button 2 */

  if ($('#number2').text() === '0') {
    $('#remove_button2').addClass('disabled');
  }

  $('#add_button2').on('click', function() {
    new_val = $('#number2').text();
    new_val = parseInt(new_val) + 1
    $('#number2').text(new_val);
    if ($('#number2').text() != '0') {
    $('#remove_button2').removeClass('disabled');
  }
  });

  $('#remove_button2').on('click', function() {
    if ($('#number2').text() !== '0') {
    new_val = $('#number2').text();
    new_val = parseInt(new_val) - 1
    $('#number2').text(new_val);
    }
    if ($('#number2').text() === '0') {
      $('#remove_button2').addClass('disabled');
    }
  });

  /* Button 3 */

  if ($('#number3').text() === '0') {
    $('#remove_button3').addClass('disabled');
  }

  $('#add_button3').on('click', function() {
    new_val = $('#number3').text();
    new_val = parseInt(new_val) + 1
    $('#number3').text(new_val);
    if ($('#number3').text() != '0') {
    $('#remove_button3').removeClass('disabled');
  }
  });

  $('#remove_button3').on('click', function() {
    if ($('#number3').text() !== '0') {
    new_val = $('#number3').text();
    new_val = parseInt(new_val) - 1
    $('#number3').text(new_val);
    }
    if ($('#number3').text() === '0') {
      $('#remove_button3').addClass('disabled');
    }
  });

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

});
