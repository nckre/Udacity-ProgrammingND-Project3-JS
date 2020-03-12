// Select color input
document.getElementById('colorPicker').addEventListener("change", function(element) {
  document.getElementById('colorPicker').value = element.srcElement.value;
})

// Set grid height to changed input value
document.getElementById('inputHeight').addEventListener("change", function(element) {
    document.getElementById('inputHeight').value = element.srcElement.attributes[4].ownerElement.value;
}, false);

// Set grid width to changed input value
document.getElementById('inputWidth').addEventListener("change", function(element) {
    document.getElementById('inputWidth').value = element.srcElement.attributes[4].ownerElement.value;
}, false);

// When user clicks on submit call makeGrid()
document.getElementById("sizePicker").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent refresh of page
    makeGrid();
}, false);


// Make a table with height and width as inputs
function makeTable(hgth, wdth) {
  var bdy = document.body;
  var tbl = document.createElement('table');
  tbl.setAttribute("id", "grid")
  tbl.style.width  = '400px';
  tbl.style.height  = '400px';
  tbl.style.border = '3px solid black';
  console.log(hgth);
  for(var i = 0; i < hgth; i++){
       var tr = tbl.insertRow();
       for(var j = 0; j < wdth; j++){
           if(i == hgth && j == wdth){
               break;
           } else {
               var td = tr.insertCell();
               td.appendChild(document.createTextNode(''));
               td.style.border = '1px solid black';
           }
       }
   }
  bdy.appendChild(tbl);
}

// Function to make a grid and color it
function makeGrid() {
    if(document.getElementById('grid') != null) {
      var el = document.getElementById('grid');
      el.remove();
    }
    var gridHeight = parseInt(document.getElementById('inputHeight').value);
    var gridWidth = parseInt(document.getElementById('inputWidth').value);
    makeTable(gridHeight, gridWidth);
    document.getElementById('grid').addEventListener("click", function(element) {
         element.srcElement.style.backgroundColor = document.getElementById('colorPicker').value;
     }, false);
   };
