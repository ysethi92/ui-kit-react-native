import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
 
class FB extends Component {

  render() {
    const { onPress } = this.props; 
    return (
      
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPress}
          style={styles.TouchableOpacityStyle}>
          <View style = {[styles.Circle, this.props.style]}>
            
          </View>
        </TouchableOpacity>
      
    );
  }
}
 
const styles = StyleSheet.create({
 
      TouchableOpacityStyle: {
        position: 'absolute',
        width: 70,
        height: 70,
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        right: 30,
        bottom: 30,
      },
      Circle: {
        width: 70,
        height: 70,
        borderRadius: 70/2,
        backgroundColor : '#000',
      },
      
});

export { FB };