// FUNCTIONS
function makeGrid(rows,cols) {
    tableElem.innerHTML = ''; // clears the grid
    for (var i = 0; i<rows; i++){
        row = tableElem.insertRow(i);
        for (var j = 0; j<cols; j++){
            row.insertCell(j)
        }
    }
}

//DECLARATIONS
var width;
var height;
const tableElem = document.getElementById('Swatch');
const pickerElem = document.getElementById('yarn1');


// EVENTS:
// Submit button makes a new table
// formElem.addEventListener("submit",function(event){
//     event.preventDefault();
//     height = parseInt(formElem.elements[0].value, 10);
//     width = parseInt(formElem.elements[1].value,10);
//     makeGrid(height,width)
// })

// Clicking boxes colours them in.
tableElem.addEventListener('click',function(event){
    if (event.target.innerHTML == ''){ 
        event.target.style.backgroundColor = pickerElem.value;
    }
    /* As only the <td> elements will be blank in size this effectively 
     prevents unexpected colouring.
     */
})