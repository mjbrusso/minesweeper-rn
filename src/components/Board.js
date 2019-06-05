import React from "react"
import { View, StyleSheet, Text } from "react-native"
import Block from "./Block"

export default props => {
  const rows = props.field.map((row, r) => {
    const cols = row.map((col, c) => {
      return (
        <Block
          {...col}
          key={c}
          size={props.blockSize}
          onPress={() => props.onOpenField(r, c)}
          onLongPress={() => props.onFlagField(r, c)}
        />
      )
    })
    return (
      <View key={r} style={styles.row}>
        {cols}
      </View>
    )
  })
  return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#cacaca", padding: 5 },
  row: {
    flexDirection: "row",
    backgroundColor: "#CACACA",
    justifyContent: "center"
  }
})
