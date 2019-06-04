import React, { Component } from "react"
import { Platform, StyleSheet, Text, View, Alert } from "react-native"
import Header from "./src/components/Header"
import Board from "./src/components/Board"
import { MineField } from "./src/MineField"
import Params, { FieldStatus } from "./src/global"

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
            if (this.state.mineField.open(r, c)) this.forceUpdate()
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
