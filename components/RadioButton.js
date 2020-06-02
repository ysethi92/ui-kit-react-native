import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class RadioButton extends Component {
  state = {
    value: null,
  };

  render() {
    const { entries } = this.props;
    const { value } = this.state;
    const checkedRadioButttonColor = this.props.backgroundColor ? this.props.backgroundColor : '#FF0000';
    return (
      <View>
        {entries.map(item => {
          return (
            <View key={item.text} style={styles.container}>
              <View style={styles.circleStyle}>
                <TouchableOpacity
                  style={styles.uncheckedCircle}
                  onPress={() => {
                    this.setState({
                      value: item.text,
                    });
                  }}>
                  {value === item.text && <View style={[styles.checkedCircle, {backgroundColor: checkedRadioButttonColor}]} />}
                </TouchableOpacity>
              </View>
              <Text style={styles.textStyle}>{item.text}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textStyle: {
    flex: 9,
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 22,
  },
  circleStyle: {
    flex: 1,
    marginLeft: 20,
  },
  uncheckedCircle: {
    marginTop: 5,
    height: 22,
    width: 22,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    width: 15,
    height: 15,
    borderRadius: 10,
  },
});
