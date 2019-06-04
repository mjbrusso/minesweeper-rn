import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default props => (
  <View style={styles.container}>
    <Text style={styles.counter}>{props.value}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 50,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  counter: {
    fontSize: 30,
    color: "#0F0",
    fontFamily: "monospace"
  }
})
