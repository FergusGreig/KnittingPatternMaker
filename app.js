// FUNCTIONS
function makeGrid(rows, cols) {
    tableElem.innerHTML = ''; // clears the grid

    for (let i = 0; i < rows; i++) {
        row = tableElem.insertRow(i);

        for (let k=1; k<6; k++){ 
            patternColours[k-1] = pattElem.firstElementChild.children[i].cells[k].style.backgroundColor
        }
        for (let j = 0; j < cols; j++) {
            cell = row.insertCell(j)
            cell.style.backgroundColor = patternColours[j%4]
        }
    }
}

//DECLARATIONS
var rowindex = 1;
var width;
var height;
var patternColours = ['','','','',''];
const tableElem = document.getElementById('Swatch');
const pattElem = document.getElementById('pattern');
const pickerElem = document.getElementById('yarn1');
const yarnButt = document.getElementById('addYarn');
const rowButt = document.getElementById('addRow');
const updateButt = document.getElementById('updateSwatch')


// EVENTS:
// yarnButt.addEventListener("click", function(event){})

updateButt.addEventListener('click', function (event) {
    event.preventDefault();
    makeGrid(rowindex, 30);
})
rowButt.addEventListener('click', function (event) {
    rowindex++
    row = pattElem.insertRow()
    index = row.insertCell();
    index.innerHTML = rowindex;
    for (let i = 1; i < 6; i++) {
        row.insertCell(i)
    }
})

// Submit button makes a new table
// formElem.addEventListener("submit",function(event){
//     event.preventDefault();
//     height = parseInt(formElem.elements[0].value, 10);
//     width = parseInt(formElem.elements[1].value,10);
//     makeGrid(height,width)
// })

// Clicking boxes colours them in.
pattElem.addEventListener('click', function (event) {
    if (event.target.innerHTML == '') {
        event.target.style.backgroundColor = pickerElem.value;
    }
    /* As only the <td> elements will be blank in size this effectively 
     prevents unexpected colouring.
     */
})