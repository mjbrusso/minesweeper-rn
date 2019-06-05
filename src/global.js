import { Dimensions } from "react-native"

export const Params = {
  initialBlockSize: 65,
  blockDecreaseStep: 5,
  borderSize: 3,
  fontSize: 24,
  boardPadding: 5,
  headerRatio: 0.15,
  minesRatio: 0.1,

  getBlockSize(level) {
    return Params.initialBlockSize - (level - 1) * this.blockDecreaseStep
  },

  getHeaderHeight() {
    const h = Dimensions.get("window").height
    return Math.floor(h * this.headerRatio)
  },

  getColumnsCount(level) {
    const width = Dimensions.get("window").width - (this.boardPadding << 1)
    return Math.floor(width / this.getBlockSize(level))
  },

  getRowsCount(level) {
    const totalHeight =
      Dimensions.get("window").height - (this.boardPadding << 1)
    const boardHeight = totalHeight * (1 - this.headerRatio)

    return Math.floor(boardHeight / this.getBlockSize(level))
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
