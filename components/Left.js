import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Text from './Text';

export default class Left extends Component {
    render() {
        return (
            <View style={styles.leftContainer}>
                {this.props.children}
                
            </View>
        )
    }
}

const styles = {
    leftContainer : {
        paddingRight: 10,
        
    }
}
