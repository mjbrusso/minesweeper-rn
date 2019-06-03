import Params from "./global"

export class MineField {
  constructor(
    nRows = Params.getRowsCount(),
    nCols = Params.getColumnsCount(),
    difficultLevel = Params.difficultLevel
  ) {
    this.rowsCount = nRows
    this.columnCount = nCols
    this.difficultLevel = difficultLevel
    this.minesCount = Math.floor(
      this.rowsCount * this.columnCount * this.difficultLevel
    )
    this.remainingFlags = this.minesCount
    this.exploded = false

    this.field = Array(nRows)
      .fill(0)
      .map((_, row) => {
        return Array(nCols)
          .fill(0)
          .map((_, col) => {
            return {
              row,
              col,
              opened: false,
              flagged: false,
              mined: false,
              exploded: false,
              nearMines: 0
            }
          })
      })
    this._putMines()
    this._countMinesInNeighbourhood()
  }

  open(r, c) {
    const f = this.field[r][c]
    if (f.opened || f.flagged) return false

    f.opened = true
    if (f.mined) {
      f.exploded = true
      for (line of this.field) for (block of line) block.opened = true
      this.exploded = true
      return true
    }

    if (!f.mined && f.nearMines == 0) {
      const neighbours = this._getNeighbours(r, c)
      for (nb of neighbours) {
        if (!nb.opened && !nb.mined && !nb.flagged && nb.nearMines == 0)
          this.open(nb.row, nb.col)
      }
    }
    return true
  }

  putFlag(r, c) {
    const f = this.field[r][c]
    if (f.opened) return false

    f.flagged = !f.flagged
    this.remainingFlags += f.flagged ? -1 : 1
    return true
  }

  _putMines() {
    let nMines = this.minesCount
    while (nMines > 0) {
      const r = Math.floor(Math.random() * this.rowsCount),
        c = Math.floor(Math.random() * this.columnCount)
      if (!this.field[r][c].mined) {
        this.field[r][c].mined = true
        nMines--
      }
    }
  }

  _countMinesInNeighbourhood() {
    for (row of this.field)
      for (block of row) {
        if (!block.mined) {
          const neighbours = this._getNeighbours(block.row, block.col)
          block.nearMines = neighbours.length
          let cont = 0
          for (nb of neighbours) {
            if (nb.mined) cont++
          }
          block.nearMines = cont
        }
      }
  }

  _getNeighbours(i, j) {
    let n = []

    // Linha acima
    if (i > 0) {
      if (j > 0) n.push(this.field[i - 1][j - 1])
      n.push(this.field[i - 1][j])
      if (j < this.columnCount - 1) n.push(this.field[i - 1][j + 1])
    }
    // Mesma linha
    if (j > 0) n.push(this.field[i][j - 1])
    if (j < this.columnCount - 1) n.push(this.field[i][j + 1])
    // Linha abaixo
    if (i < this.rowsCount - 1) {
      if (j > 0) n.push(this.field[i + 1][j - 1])
      n.push(this.field[i + 1][j])
      if (j < this.columnCount - 1) n.push(this.field[i + 1][j + 1])
    }
    return n
  }
}
