import React, { Component } from "react"
import { StyleSheet, Text, View, Vibration } from "react-native"
import Header from "./src/components/Header"
import Board from "./src/components/Board"
import { MineField } from "./src/MineField"
import Params, { FieldStatus } from "./src/global"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: 1,
      mineField: null
    }
    this.state.mineField = this.createMineField()
  }

  createMineField() {
    return new MineField(
      Params.getRowsCount(this.state.level),
      Params.getColumnsCount(this.state.level),
      Params.minesRatio
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftCounter={"🚩" + this.state.mineField.remainingFlags}
          rightCounter={"🎚️" + this.state.level}
          status={this.state.mineField.status}
          onClickFace={() => {
            if (this.state.mineField.status == FieldStatus.clear)
              this.setState({ level: ++this.state.level })
            else if (this.state.mineField.status == FieldStatus.exploded) {
              this.state.level = 1
              this.setState({ level: 1 })
            }
            this.setState({ mineField: this.createMineField() })
          }}
        />
        <Board
          field={this.state.mineField.field}
          status={this.state.mineField.status}
          blockSize={Params.getBlockSize(this.state.level)}
          onOpenField={(r, c) => {
            if (this.state.mineField.open(r, c)) {
              this.forceUpdate()
              if (this.state.mineField.status != FieldStatus.normal)
                Vibration.vibrate(300)
            }
          }}
          onFlagField={(r, c) => {
            if (this.state.mineField.putFlag(r, c)) {
              Vibration.vibrate(100)
              this.forceUpdate()
            }
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#F5FCFF"
  }
})
