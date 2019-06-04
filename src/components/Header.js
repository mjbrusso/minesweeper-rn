import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Face from "./Face"
import Display from "./Display"

export default props => {
  return (
    <View style={styles.container}>
      <Display value={props.remainingFlags} />
      <Face onPress={props.onReset} state="xsmiling" />
      <Display value={1} />
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
