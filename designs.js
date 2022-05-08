
var inputHeight = document.querySelector('#inputHeight')
var inputWidth = document.querySelector('#inputWidth')

var pixelCanvas = document.querySelector('#pixelCanvas')
var sizePicker = document.querySelector('#sizePicker')
var colorPicker = document.querySelector('#colorPicker')

function clearGrid() {
  const allRows = document.querySelectorAll("tr");
  allRows.forEach((row) => {
    row.remove();
  });
}


function makeGrid(event) {
  event.preventDefault();
  clearGrid();
  // Your code goes here!
  let xAxisValue = inputHeight.value
  let yAxisValue = inputWidth.value

  for (let a = 1; a <= xAxisValue; a++) {
    const row = document.createElement('tr') ;
    for (let b = 1; b <= yAxisValue; b++) {
      const column = document.createElement('td');
      column.id = "column-i-j";

      row.appendChild(column);

      pixelCanvas.appendChild(row)

    }
  }

}
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", makeGrid);

pixelCanvas.addEventListener("click", function (event) {
  event.target.style.backgroundColor = colorPicker.value;
});



