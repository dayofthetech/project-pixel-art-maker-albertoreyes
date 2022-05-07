// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
  event.preventDefault();
  /**Set height and width */
  /**Hash $ and # for id */
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);


})
function makeGrid(/*parameters*/xAxis, yAxis) {
  // Your code goes here!
  $('tr').remove();

  for (var a = 1; a <= xAxis; a++) {
      //for each tr rows
      $('#pixelCanvas').append('<tr id=table' + a + '></tr');
      //get same num td colums
      for (var b = 1; b <= yAxis; b++) {
        $('#table' + a).append('<td></td>');

      }
  }
  $('td').click(function addColor() {
    color = $('#colorPicker').val();

    if ($(this).attr('style')) {
       $(this).removeAttr('style')
    } else {
        $(this).attr('style', 'background-color:' + color);
    }

  })
}

