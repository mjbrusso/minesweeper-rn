import React, { Component } from "react"
import { Platform, StyleSheet, Text, View } from "react-native"
import Params from "./src/constants"
import Block from "./src/components/Block"

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          {Params.getColumnsCount()} x {Params.getRowsCount()}
        </Text>
        <Block />
        <Block mined />
        <Block opened nearMines="1" />
        <Block opened nearMines="2" />
        <Block opened nearMines="3" />
        <Block opened nearMines="4" />
        <Block opened nearMines="5" />
        <Block opened nearMines="6" />
        <Block opened nearMines="7" />
        <Block opened />
        <Block opened mined />
        <Block mined exploded />
        <Block flagged />
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
