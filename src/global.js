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

export default Params
