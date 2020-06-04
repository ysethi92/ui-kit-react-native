import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Text from './Text';

export default class Body extends Component {
    render() {
        return (
            <View style={styles.bodyContainer}>
                {this.props.children}
                
            </View>
        )
    }
}

const styles = {
    bodyContainer : {
        paddingHorizontal: 0,
        
    }
}
