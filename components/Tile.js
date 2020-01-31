import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';
import Text from './Text';
import PropTypes from 'prop-types';

const width = Dimensions.get('window').width;
const height = width * 0.8


export default class Tile extends React.Component {

    

    render () {
  
  return (
    <View style={{paddingVertical:30}}>
      <ImageBackground source={this.props.imgsource} style={[styles.container,{height: this.props.size || height}]}>
        <Text h1 h1Style={[styles.titleStyle,{color: this.props.titlecolor || "white"}]}>{this.props.title}</Text>
        <Text>{"\n"}</Text>
        <Text h4 h4Style={[styles.captionStyle,{color: this.props.captioncolor || "white"}]}>{this.props.caption}</Text>
      </ImageBackground>
    </View>
  );
}
}

Tile.defaultProps = {
    container: {
        width: width, 
        height:height,
        justifyContent: 'center'
    }
}

const styles = StyleSheet.create({
  container: {
    width: width, 
    height:height,
    justifyContent: 'center'
  },
  titleStyle: {
    color: 'white', 
    textAlign: 'center'
  },
  captionStyle: {
    color: 'white', 
    textAlign: 'center', 
    fontWeight: 'normal'
  }
});

