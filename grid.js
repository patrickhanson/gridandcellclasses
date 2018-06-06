function Grid (row, col) {
    this.gridArray = new Array(row).fill(null).map(() => new Array(col).fill(null))
    for(let rowIndex = 0; rowIndex < this.gridArray.length; rowIndex++) {
        let gridRow = this.gridArray[rowIndex]
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

Grid.prototype = {
    eventListeners: {
        click: function(event) {
            let clickedCell = event.target
            clickedCell.classList.toggle('yay')
        }
    }
}
Grid.prototype.constructor = Grid