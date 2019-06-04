import React, { Component } from "react"
import { StyleSheet, Text, View, Vibration } from "react-native"
import Header from "./src/components/Header"
import Board from "./src/components/Board"
import { MineField } from "./src/MineField"
import { FieldStatus } from "./src/global"

export default class App extends Component {
  state = {
    mineField: new MineField()
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftCounter={this.state.mineField.remainingFlags}
          rightCounter={this.state.mineField.remainingBlocks}
          status={this.state.mineField.status}
          onReset={() => this.setState({ mineField: new MineField() })}
        />
        <Board
          field={this.state.mineField.field}
          status={this.state.mineField.status}
          onOpenField={(r, c) => {
            if (this.state.mineField.open(r, c)) {
              this.forceUpdate()
              if (this.state.mineField.status != FieldStatus.normal)
                Vibration.vibrate(300)
            }
          }}
          onFlagField={(r, c) => {
            if (this.state.mineField.putFlag(r, c)) this.forceUpdate()
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
