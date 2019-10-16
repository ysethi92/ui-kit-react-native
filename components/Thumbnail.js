import React from "react";
import { View, Text, Image } from "react-native";

class Thumbnail extends React.Component {
    renderScreen = () =>{
        if(this.props.size === "large" && this.props.type === "round"){
          return(
            <View>
                <Image
                 style= {styles.large_round}
                 source={this.props.source}
                 />
            </View>
          )
        }
        else if(this.props.size === "small" && this.props.type === "round"){
            return(
              <View>
                  <Image
                   style= {styles.small_round}
                   source={this.props.source}
                   />
              </View>
            )
          }
        else if(this.props.size === "medium" && this.props.type === "round"){
            return(
              <View>
                  <Image
                   style= {styles.medium_round}
                   source={this.props.source}
                   />
              </View>
            )
          }
        else if(this.props.size === "large" ){
            return(
              <View>
                  <Image
                   style= {styles.large_square}
                   source={this.props.source}
                   />
              </View>
            )
          }
        else if(this.props.size === "small" ){
            return(
              <View>
                  <Image
                   style= {styles.small_square}
                   source={this.props.source}
                   />
              </View>
            )
          }
        else if(this.props.size === "medium" ){
            return(
              <View>
                  <Image
                   style= {styles.medium_square}
                   source={this.props.source}
                   />
              </View>
            )
          }
        
      }  
    render() {
        
        return(
            <View>
                {this.renderScreen()}
            </View>
        )
    }
}

const styles = {
    large_round: {
        height: 80,
        width: 80,
        borderRadius: 50,
    },
    small_round: {
        height: 30,
        width: 30,
        borderRadius: 50,
    },
    medium_round: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    large_square: {
        height: 80,
        width: 80,
        borderRadius: 0,
    },
    small_square: {
        height: 30,
        width: 30,
        borderRadius: 0,
    },
    medium_square: {
        height: 50,
        width: 50,
        borderRadius: 0,
    }
}

export default Thumbnail;