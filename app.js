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
var rowindex = 1;
var width;
var height;
var patternColours = [];
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
    let row = pattElem.insertRow()
    let index = row.insertCell();
    index.innerHTML = rowindex;
    index.className='numBox'
    row.insertCell(1); // empty box
    let addBox = row.insertCell(2);
    addBox.innerHTML = '+'; // a box with a plus sign in
    addBox.className='plusBox'
})

// Submit button makes a new table
// formElem.addEventListener("submit",function(event){
//     event.preventDefault();
//     height = parseInt(formElem.elements[0].value, 10);
//     width = parseInt(formElem.elements[1].value,10);
//     makeGrid(height,width)
// })

// Clicking empty boxes colours them in, clicking (+) box adds a new box.
pattElem.addEventListener('click', function (event) {
    if (event.target.innerHTML == '') {
        event.target.style.backgroundColor = pickerElem.value; 
        /* As only the <td> elements will be blank in size this effectively 
     prevents unexpected colouring.
     */
    } else if (event.target.innerHTML == '+'){
        event.target.innerHTML = ''; //clears current plus box
        event.target.className = '';
        let row = event.target.parentElement;
        let addBox = row.insertCell(row.childElements);
        addBox.innerHTML ='+' //appends a new plusbox
        addBox.className = 'plusBox'
    }
   
})