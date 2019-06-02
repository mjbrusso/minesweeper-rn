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
  return (
    <View>
      <View style={{ flex: 1, backgroundColor: "#cacaca" }}>
        <Text style={{ fontSize: 40 }}>Minesweeper</Text>
      </View>
      {rows}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: "#EEE"
  }
})
