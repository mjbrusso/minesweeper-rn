import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Params, FaceStatus } from "../global"

export default props => (
  <View style={styles.container}>
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.button}>
        {props.status == FaceStatus.normal
          ? "🧐"
          : props.status == FaceStatus.smiling
          ? "😄"
          : "🤕"}
      </Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#999",
    borderLeftColor: "#CCC",
    borderTopColor: "#CCC",
    borderBottomColor: "#333",
    borderRightColor: "#333",
    borderWidth: Params.borderSize
  },
  button: {
    fontSize: 40,
    color: "#000",
    padding: 5
  }
})
