import React from "react"
import { View, StyleSheet } from "react-native"
import Block from "./Block"

export default props => {
  const rows = props.field.map((row, r) => {
    const cols = row.map((col, c) => {
      return <Block {...col} key={c} />
    })
    return <View key={r}>{cols}</View>
  })
  return <View style={styles.row}>{rows}</View>
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: "#EEE"
  }
})
