import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

export default props => (
  <View>
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.button}>
        {props.state == "smiling"
          ? "😄"
          : props.state == "normal"
          ? "🙂"
          : "🤕"}
      </Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    color: "#000",
    padding: 5
  }
})
