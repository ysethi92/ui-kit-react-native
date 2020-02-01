import React, {Component} from 'react';
import {StatusBar,Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
//import Icon from 'react-native-vector-icons/EvilIcons';
//import BackIcon from 'react-native-vector-icons/Feather';

export default class Header extends Component {
  StatusBarDesign = () => {
    return (
      <View>
        <StatusBar
          barStyle = "default"
          hidden = {this.props.hidden} />
      </View>
    )
  };
  layoutType = () => {
    const headerBackground = this.props.backgroundColor ? this.props.backgroundColor : '#0000FF';
    const headerTextSize = this.props.textSize ? this.props.textSize : 22;
    const headerTop = this.props.hidden ? 0 : 30;

    if (this.props.search && this.props.back) {
      return (
        <View
          style={[
            styles.viewStyle,
            {marginTop: headerTop},
            {backgroundColor: headerBackground},
          ]}>
          {this.StatusBarDesign()}
          <TouchableOpacity onPress={this.props.onBackPressed}>
            <Image
              source={require('../assests/left-arrow.png')}
              style={styles.backButton}/>
          </TouchableOpacity>
          <Text style={[styles.textStyle, {fontSize: headerTextSize}]}>
            {this.props.headerText}
          </Text>
          <TouchableOpacity onPress={this.props.onSearchPressed}>
            <Image
              source={require('../assests/search.png')}
              style={styles.searchIconStyle}
            />
          </TouchableOpacity>
        </View>
      );
      //return <Image style={searchIconStyle} source={require('./search.png')} />
    } else if (this.props.search) {
        return (
          <View
            style={[
              styles.viewStyle,
              {marginTop: headerTop},
              {backgroundColor: headerBackground},
            ]}>
            {this.StatusBarDesign()}
            <Text style={[styles.textStyle, {fontSize: headerTextSize}]}>
              {this.props.headerText}
            </Text>
            <TouchableOpacity onPress={this.props.onSearchPressed}>
              <Image
                source={require('../assests/search.png')}
                style={styles.searchIconStyle}/>
            </TouchableOpacity>
          </View>
        );
      //return <Image style={searchIconStyle} source={require('./search.png')} />
    } else if (this.props.back) {
        return (
          <View
            style={[
              styles.viewStyle,
              {marginTop: headerTop},
              {backgroundColor: headerBackground},
            ]}>
            {this.StatusBarDesign()}
            <TouchableOpacity onPress={this.props.onBackPressed}>
              <Image
                source={require('../assests/left-arrow.png')}
                style={styles.backButton}/>
            </TouchableOpacity>
            <Text style={[styles.textStyle, {fontSize: headerTextSize}]}>
              {this.props.headerText}
            </Text>
          </View>
        );
    } else {
        return (
          <View
            style={[
              styles.viewStyle,
              {marginTop: headerTop},
              {backgroundColor: headerBackground},
            ]}>
            {this.StatusBarDesign()}
            <Text style={[styles.textStyle, {fontSize: headerTextSize}]}>
              {this.props.headerText}
            </Text>
          </View>
        );
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
    marginLeft: 40,
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
  containerDefault: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
