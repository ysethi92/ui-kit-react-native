import React, {Component} from 'react';
import {Icon, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import BackIcon from 'react-native-vector-icons/Feather';

export default class CheckBox extends Component {
  state = {
    value : null,
  };

  render() {
    const { entries } = this.props;
    const { value } = this.state;
    var flag = false;
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
                    flag = item.checked
                  }}>
                  {value === item.text ? item.checked = !item.checked : item.checked = item.checked}
                  {item.checked ? <View style={[styles.checkedCircle, {backgroundColor: checkedRadioButttonColor}]} /> : null}
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
