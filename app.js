// FUNCTIONS
function makeGrid(rows, cols) {
    tableElem.innerHTML = ''; // clears the grid

    for (let i = 0; i < rows; i++) {
        row = tableElem.insertRow(i);
        patternColours = [];
        let pattRow = pattElem.firstElementChild.children[i].cells
        for (let k=1; k<pattRow.length-1; k++){ 
            patternColours[k-1] = pattRow[k].style.backgroundColor
        }
        for (let j = 0; j < cols; j++) {
            cell = row.insertCell(j)
            cell.style.backgroundColor = patternColours[j%patternColours.length]
        }
    }
}

//DECLARATIONS
var rowIndex = 1;
var width;
var height;
var patternColours = [];
const tableElem = document.getElementById('Swatch');
const pattElem = document.getElementById('pattern');
const pickerElem = document.getElementById('yarn1');
const yarnButt = document.getElementById('addYarn');
const addRowButt = document.getElementById('addRow');
const remRowButt = document.getElementById('remRow');
const updateButt = document.getElementById('updateSwatch');


// EVENTS:
// yarnButt.addEventListener("click", function(event){}) 

updateButt.addEventListener('click', function (event) {
    event.preventDefault();
    makeGrid(rowIndex, 30);
})
addRowButt.addEventListener('click', function (event) {
    rowIndex++
    let row = pattElem.insertRow()
    let index = row.insertCell();
    index.innerHTML = rowIndex;
    index.className='numBox'
    row.insertCell(1); // empty box
    let addBox = row.insertCell(2);
    addBox.innerHTML = '+'; // a box with a plus sign in
    addBox.className = 'pmBox';
    let decBox = row.insertCell(3);
    decBox.innerHTML = '-';
    decBox.className = 'pmBox'
})
remRowButt.addEventListener('click', function(event){
    if (pattElem.rows.length > 1){
        pattElem.deleteRow(-1);
        rowIndex--;
    }
})
// Submit button makes a new table
// formElem.addEventListener("submit",function(event){
//     event.preventDefault();
//     height = parseInt(formElem.elements[0].value, 10);
//     width = parseInt(formElem.elements[1].value,10);
//     makeGrid(height,width)
// })

// Clicking empty boxes colours them in, clicking (+) box adds a new box, clicking - removes a box.
pattElem.addEventListener('click', function (event) {
    let row = event.target.parentElement;
    switch (event.target.innerHTML){
        case '':
            event.target.style.backgroundColor = pickerElem.value; // changes box colour
            break;
        case '+':
            row.insertCell(row.cells.length - 2); // appends an empty box
            break;
        case '-':
            if (row.cells.length > 4){ // Checks there is more than one colour box
                row.deleteCell(row.cells.length-3); // removes last colour box
            }
            break;
        }
})
