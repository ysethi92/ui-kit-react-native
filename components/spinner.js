import React, {Component} from 'react';
import {ActivityIndicator, Text, View, StyleSheet, Image} from 'react-native';

export default class Spinner extends Component {

  layoutType = () => {
    const spinnerSize = this.props.size ? this.props.size : "small";
    const spinnerColor = this.props.color ? this.props.color : '#000000';
    return (
      <View style={styles.container}>
        <ActivityIndicator size={spinnerSize} color={spinnerColor} />
      </View>
    )
  };
  render() {
    return <View>{this.layoutType()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center'
  }
});
