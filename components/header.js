import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
//import Icon from 'react-native-vector-icons/EvilIcons';
//import BackIcon from 'react-native-vector-icons/Feather';

export default class Header extends Component {
  layoutType = () => {
    if (this.props.search && this.props.back) {
      return (
        <View
          style={[
            styles.viewStyle,
            {backgroundColor: this.props.backgroundColor},
          ]}>
          <Image
            source={require('./left-arrow.png')}
            style={styles.backButton}
          />
          <Text style={[styles.textStyle, {fontSize: this.props.textSize}]}>
            {this.props.headerText}
          </Text>
          <Image
            source={require('./search.png')}
            style={styles.searchIconStyle}
          />
        </View>
      );
      //return <Image style={searchIconStyle} source={require('./search.png')} />
    } else if (this.props.search) {
      return (
        <View
          style={[
            styles.viewStyle,
            {backgroundColor: this.props.backgroundColor},
          ]}>
          <Text style={[styles.textStyle, {fontSize: this.props.textSize}]}>
            {this.props.headerText}
          </Text>
          <Image
            source={require('./search.png')}
            style={styles.searchIconStyle}
          />
        </View>
      );
      //return <Image style={searchIconStyle} source={require('./search.png')} />
    } else if (this.props.back) {
      return (
        <View
          style={[
            styles.viewStyle,
            {backgroundColor: this.props.backgroundColor},
          ]}>
          <Image
            source={require('./left-arrow.png')}
            style={styles.backButton}
          />
          <Text style={[styles.textStyle, {fontSize: this.props.textSize}]}>
            {this.props.headerText}
          </Text>
        </View>
      );
    } else {
      <View
        style={[
          styles.viewStyle,
          {backgroundColor: this.props.backgroundColor},
        ]}>
        <Text style={[styles.textStyle, {fontSize: this.props.textSize}]}>
          {this.props.headerText}
        </Text>
      </View>
    }
  };
  render() {
    return <View>{this.layoutType()}</View>;
  }
}

const styles = StyleSheet.create({
  backButton: {
    marginTop: 20,
    alignItems: 'center',
    marginLeft: 20,
    width: 20,
    height: 20,
  },
  textStyle: {
    marginTop: 15,
    flex: 3,
    fontSize: 25,
    marginLeft:40,
  },
  searchIconStyle: {
    marginTop: 20,
    width: 20,
    height: 20,
    marginRight: 30,
  },
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#0000FF',
    height: 60,
  },
});
