import React, { Component } from 'react'
import { View, StyleSheet, PixelRatio, TouchableOpacity } from 'react-native'
import Text from './Text';

export default class CardItem extends Component {
    
    render() {
        if(this.props.header && this.props.border && this.props.button)
        {
            return(
                <View style={styles.borderStyle}>
                    <TouchableOpacity onPress={this.props.onPress}>
                    {this.props.children}
                    </TouchableOpacity>
                </View>
            )
        }
        else if(this.props.footer && this.props.border && this.props.button) 
        {
            return (
                <View style={styles.borderStyle}>
                    <TouchableOpacity onPress={this.props.onPress}>
                    {this.props.children}
                    </TouchableOpacity>
                </View>
        )
        }
        else if(this.props.body && this.props.border && this.props.button) 
        {
            return (
                <View style={styles.borderStyle}>
                    <TouchableOpacity onPress={this.props.onPress}>
                    {this.props.children}
                    </TouchableOpacity>
                    
                </View>
        )
        }
        else if(this.props.header && this.props.border)
        {
            return(
                <View style={styles.borderStyle}>
                    {this.props.children}
                </View>
            )
        }
        else if(this.props.header && this.props.button)
        {
            return(
                <View style={styles.headerStyle}>
                    <TouchableOpacity onPress={this.props.onPress}>
                    {this.props.children}
                    </TouchableOpacity>
                </View>
            )
        }
        else if(this.props.footer && this.props.border) 
        {
            return (
                <View style={styles.borderStyle}>
                    {this.props.children}
                </View>
        )
        }
        else if(this.props.footer && this.props.button) 
        {
            return (
                <View style={styles.footerStyle}>
                    <TouchableOpacity onPress={this.props.onPress}>
                    {this.props.children}
                    </TouchableOpacity>
                </View>
        )
        }
        else if(this.props.body && this.props.border) 
        {
            return (
                <View style={styles.borderStyle}>
                    {this.props.children}
                </View>
        )
        }
        else if(this.props.body && this.props.button) 
        {
            return (
                <View style={styles.bodyStyle}>
                    <TouchableOpacity onPress={this.props.onPress}>
                    {this.props.children}
                    </TouchableOpacity>
                    
                </View>
        )
        }
        else if(this.props.body) 
        {
            return (
                <View style={styles.bodyStyle}>
                    {this.props.children}
                </View>
        )
        }
        else if(this.props.header) 
        {
            return (
                <View style={styles.headerStyle}>
                    {this.props.children}
                </View>
        )
        }
        else if(this.props.footer) 
        {
            return (
                <View style={styles.footerStyle}>
                    {this.props.children}
                </View>
        )
        }
        else 
        {
            return (
                <View style={styles.textStyle}>
                    {this.props.children}
                </View>
        )
        }
    }
}

const styles = StyleSheet.create({
    
    textStyle: {
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    headerStyle: {
        paddingHorizontal: 10,
        paddingTop: 10,
        flexDirection: 'row',
        fontSize: 20
    },
    headerText: {
        fontSize: 16
    },
    footerStyle: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    bodyText: {
        fontSize: 14
    },
    bodyStyle : {
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        
    }
    ,
    footerText: {
        fontSize: 16
    },
    borderStyle: {
        paddingHorizontal: 10,
        paddingVertical:10,
        borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
        flexDirection: 'row',
        borderColor: "#ccc",
        flexWrap: "nowrap",
        backgroundColor: "#fff",
        elevation: 3
    }
  });