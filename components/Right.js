import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Text from './Text';


const width = Dimensions.get('window').width
export default class RIght extends Component {
    render() {
        return (
            <View style={styles.rightContainer}>
                {this.props.children}
                
            </View>
        )
    }
}

const styles = {
    rightContainer : {
        flex: 1,
        alignItems: 'flex-end',
    }
}
