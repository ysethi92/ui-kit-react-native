import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  PixelRatio
} from 'react-native'

export default class ListItem extends Component {
  

 render() {
    if(this.props.divider){
        return (
            <View style={styles.dividerStyle}>
                <TouchableHighlight
                 >
                    <View>{this.props.children}</View>
                </TouchableHighlight>
            </View>
          )
    }
    else {
        return (
            <View style={{paddingHorizontal: 10}}>
            <TouchableHighlight
                onPress= {this.props.onPress} >
            <View style={styles.container}>
                {this.props.children}
            </View>
            </TouchableHighlight>
            </View>
    )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
        
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderTopColor: 'white',    
        flexWrap: "nowrap",
        backgroundColor: "#fff",
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row'
        
        
  },
  dividerStyle: {
      
        flexWrap: "nowrap",
        backgroundColor: "#ededed",
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row'
        
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  
})
