import { Dimensions } from "react-native"

export const Params = {
  blockSize: 50,
  borderSize: 5,
  fontSize: 24,
  boardPadding: 5,
  headerRatio: 0.15,
  difficultLevel: 0.1,

  getHeaderHeight() {
    const h = Dimensions.get("window").height
    return Math.floor(h * this.headerRatio)
  },

  getColumnsCount() {
    const width = Dimensions.get("window").width - (this.boardPadding << 1)
    return Math.floor(width / this.blockSize)
  },

  getRowsCount() {
    const totalHeight =
      Dimensions.get("window").height - (this.boardPadding << 1)
    const boardHeight = totalHeight * (1 - this.headerRatio)

    return Math.floor(boardHeight / this.blockSize)
  }
}

export const FieldStatus = {
  normal: 1,
  exploded: 2,
  clear: 3
}
Object.freeze(FieldStatus)

export const FaceStatus = {
  normal: FieldStatus.normal,
  unwell: FieldStatus.exploded,
  smiling: FieldStatus.clear
}
Object.freeze(FieldStatus)

export default Params
