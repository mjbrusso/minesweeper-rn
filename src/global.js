import { Dimensions } from "react-native"

export const Params = {
  blockSize: 40,
  borderSize: 5,
  fontSize: 24,
  headerRatio: 0.15,
  difficultLevel: 0.1,

  getColumnsCount() {
    const width = Dimensions.get("window").width
    return Math.floor(width / this.blockSize)
  },

  getRowsCount() {
    const totalHeight = Dimensions.get("window").height
    const boardHeight = totalHeight * (1 - this.headerRatio)

    return Math.floor(boardHeight / this.blockSize)
  }
}

const createField = (
  nRows = Params.getRowsCount(),
  nCols = Params.getColumnsCount(),
  difficultLevel = Params.difficultLevel
) => {
  let field = Array(nRows)
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
            nearMines: 2
          }
        })
    })
  putMines(field, nRows, nCols, difficultLevel)
  countMinesInNeighbourhood(field)
  return field
}

const putMines = (field, nRows, nCols, difficultLevel) => {
  let nMines = Math.floor(nRows * nCols * difficultLevel)
  while (nMines > 0) {
    const r = Math.floor(Math.random() * nRows),
      c = Math.floor(Math.random() * nCols)
    if (!field[r][c].mined) {
      field[r][c].mined = true
      nMines--
    }
  }
}

const countMinesInNeighbourhood = field => {
  for (row of field)
    for (block of row) {
      if (!block.mined) {
        const neighbours = getNeighbours(block.row, block.col)
        block.nearMines = neighbours.length
        let cont = 0
        for (nb of neighbours) {
          if (field[nb[0]][nb[1]].mined) cont++
        }
        block.nearMines = cont
      }
    }
}

const getNeighbours = (i, j) => {
  const nRows = Params.getRowsCount()
  const nCols = Params.getColumnsCount()
  let n = []

  // Linha acima
  if (i > 0) {
    if (j > 0) n.push([i - 1, j - 1])
    n.push([i - 1, j])
    if (j < nCols - 1) n.push([i - 1, j + 1])
  }
  // Mesma linha
  if (j > 0) n.push([i, j - 1])
  if (j < nCols - 1) n.push([i, j + 1])
  // Linha abaixo
  if (i < nRows - 1) {
    if (j > 0) n.push([i + 1, j - 1])
    n.push([i + 1, j])
    if (j < nCols - 1) n.push([i + 1, j + 1])
  }
  return n
}

export default Params
export { createField }
