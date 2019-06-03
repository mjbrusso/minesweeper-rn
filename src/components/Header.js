import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Params from "../global"

export default props => {
  return (
    <View style={styles.container}>
      <Text style={styles.counters}>{props.remainingFlags}</Text>
      <TouchableOpacity onPress={props.onReset}>
        <Text style={styles.buttom}>{"🙂"}</Text>
      </TouchableOpacity>

      <Text style={styles.counters}>{"1"}</Text>
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
  },
  counters: {
    fontSize: 30,
    backgroundColor: "#000",
    color: "#FFF",
    //paddingHorizontal: 10,
    fontFamily: "monospace",
    width: 80,
    textAlign: "center"
  },
  buttom: {
    fontSize: 40,
    color: "#000",
    padding: 5
  }
})
