// export { default as Icon } from './AvatarIcon';


// export { default as Image } from './AvatarImage';

import React from 'react';
import { View, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  size: props.size,
                    
    };
}
    
    renderscreen = () => {
        if(this.props.type === "image") {
            return(
                <View style={{height: this.state.size, width:this.state.size, borderRadius: this.state.size/2, }}>
                    <Image 
                    style={{height: this.state.size, width:this.state.size, borderRadius: this.state.size/2, }}
                    source={this.props.source} />
                </View>
            )
        }
        else if(this.props.type === "icon") {
            return(
                <View 
                style={[{backgroundColor: 'black', borderRadius: this.state.size/2, width: this.state.size, height: this.state.size},
                styles.iconview]}>
                    <Ionicons name={this.props.name} size={this.state.size * 0.6} color={this.props.color || "white"}/>
                </View>
            )
        }
        else if(this.props.type === "label") {
            return(
                <View style={[styles.labelview,{width: this.state.size,
                    height: this.state.size,
                    borderRadius: this.state.size / 2,}]}>
                    <Text style={[styles.textstyle, 
                    {lineHeight: this.state.size, fontSize: this.state.size/2, color: this.props.color}]} numberOfLines={1}>
                        {this.props.name}
                    </Text>
                </View>
            )
        }
        
    }
    

    render() {
        
        return(
            <View>
                {this.renderscreen()}
            </View>
        )
    }
}


const styles = {
    labelview: {
        backgroundColor: "black",
      },
      textstyle: {
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          textAlignVertical: 'center',
           
      },
      iconview: {
          justifyContent: 'center',
          alignItems: 'center',
      }
}