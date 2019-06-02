import React, { Component } from "react"
import { Platform, StyleSheet, Text, View, Alert } from "react-native"
import Block from "./src/components/Block"
import Board from "./src/components/Board"
import { MineField } from "./src/MineField"

export default class App extends Component {
  state = {
    mineField: new MineField()
  }

  render() {
    return (
      <View style={styles.container}>
        <Board
          field={this.state.mineField.field}
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
})
