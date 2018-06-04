const destination = document.getElementById('grid')

function Grid (row, col) {
    const gridArray = new Array(row).fill(null).map(() => new Array(col).fill(null))
    for(let rowIndex = 0; rowIndex < gridArray.length; rowIndex++) {
        let gridRow = gridArray[rowIndex]
        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')
        for(let colIndex = 0; colIndex < gridRow.length; colIndex++) {
            let cell = new Cell(rowIndex, colIndex, rowDiv, 'cell')
        }
        destination.appendChild(rowDiv)
    }
    this.boundClickEvent = this.eventListeners.click.bind(this)
    destination.addEventListener("click", this.boundClickEvent)
}

function Cell (rowIndex, colIndex, rowDiv, classList) {
    this.rowIndex = rowIndex
    this.colIndex = colIndex
    this.rowDiv = rowDiv
    this.createCell(rowIndex, colIndex, rowDiv, classList)
}

Cell.prototype = {
    createCell: function (rowIndex, colIndex, rowDiv, classList) {
        let newCell = document.createElement('div')
        newCell.className = classList
        newCell.dataset.rowIndex = rowIndex
        newCell.dataset.colIndex = colIndex
        rowDiv.appendChild(newCell)
    },
    
}

Grid.prototype = {
    eventListeners: {
        click: function(event) {
            console.log(this.Cell)
        }
    }
}

let shit = new Grid (8, 8)