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

Cell.prototype.constructor = Cell