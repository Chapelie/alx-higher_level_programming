$(document).ready(function () {
    // Add a new <li> element when #add_item is clicked
    $('#add_item').click(function () {
      $('ul.my_list').append('<li>Item</li>');
    });
  
    // Remove the last <li> element when #remove_item is clicked
    $('#remove_item').click(function () {
      $('ul.my_list li:last-child').remove();
    });
  
    // Clear all <li> elements when #clear_list is clicked
    $('#clear_list').click(function () {
      $('ul.my_list').empty();
    });
  });
  