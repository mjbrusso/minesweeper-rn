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
  let fld = Array(nRows)
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

  let nMines = Math.floor(nRows * nCols * difficultLevel)
  while (nMines > 0) {
    const r = Math.floor(Math.random() * nRows),
      c = Math.floor(Math.random() * nCols)
    if (!fld[r][c].mined) {
      fld[r][c].mined = true
      nMines--
    }
  }
  return fld
}

export default Params
export { createField }
