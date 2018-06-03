function Grid (row, col) {
    const gridArray = new Array(row).fill(null).map(() => new Array(col).fill(null))
    return gridArray
}

function Cell (width, height) {
    this.width = width
    this.height = height
}
