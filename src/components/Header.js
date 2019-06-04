import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Face from "./Face"
import Display from "./Display"

export default props => {
  return (
    <View style={styles.container}>
      <Display value={props.leftCounter} />
      <Face onPress={props.onReset} state={props.faceState} />
      <Display value={props.rightCounter} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#CACACA"
  }
})
