import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Platform, Dimensions, PixelRatio } from "react-native";

const Card = (props) => {
  const { style } = props;
  return (
      <View style={StyleSheet.flatten([{ marginVertical: 10,
        marginHorizontal: 10,
        borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
        borderRadius: 2,
        borderColor: "#ccc",
        flexWrap: "nowrap",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3, }, style])}>
          {props.children}
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    borderRadius: 2,
    borderColor: "#ccc",
    flexWrap: "nowrap",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
  },
  textStyle: {
    paddingHorizontal: 10,
    paddingVertical:10
  }
});

export default Card;
