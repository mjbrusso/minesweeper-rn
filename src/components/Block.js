import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Params } from "../constants";

export default props => {
  const { mined, opened, nearMines } = props;
  const blockStyles = [styles.block];
  if (opened) blockStyles.push(styles.opened);
  if (blockStyles.length === 1) blockStyles.push(styles.regular);

  const color =
    nearMines == 1
      ? "#2A28D7"
      : nearMines == 2
      ? "#2B580F"
      : nearMines < 6
      ? "#F9060A"
      : "#F221A9";

  return (
    <View style={blockStyles}>
      {!mined && opened && nearMines > 0 ? (
        <Text style={[styles.label, { color }]}>{nearMines}</Text>
      ) : (
        false
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: Params.blockSize,
    width: Params.blockSize,
    borderWidth: Params.borderSize,
    alignItems: "center",
    justifyContent: "center"
  },
  regular: {
    backgroundColor: "#999",
    borderLeftColor: "#CCC",
    borderTopColor: "#CCC",
    borderBottomColor: "#333",
    borderRightColor: "#333"
  },
  opened: { backgroundColor: "#999", borderColor: "#777" },
  label: { fontWeight: "bold", fontSize: Params.fontSize }
});
