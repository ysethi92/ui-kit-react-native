import React from 'react';
import {StyleSheet, View, ToastAndroid } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
// import Tile from './src/Tile';
// import Text from './src/Text';
// import Avatar from './src/Avatar';
// import Thumbnail from './src/Thumbnail';
import { Avatar, Header, Thumbnail, Button, Spinner, Tile, FloatingButton, Text} from './src';

const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

class TileScreen extends React.Component {

  render() {
    return (
      <View style={{justifyContent: 'space-evenly'}}>
      <Tile 
      title="Lorem ipsum amet, consectetur adipisicing elit. Dolores dolore exercitationem" 
      caption="Some Caption Text"
      imgsource={require('./assets/bg.jpg')}
      titlecolor = "white"
      captioncolor = "white"
      size = "70%"
      />
    </View>
    );
  }
}

class HeaderScreen extends React.Component {
  render() {
    return(
      <Header
        onBackPressed={() => ToastAndroid.show('Please implement a specific task!!!', ToastAndroid.SHORT)}
        onSearchPressed={() => ToastAndroid.show('Please implement a specific!!!', ToastAndroid.SHORT)}
        search
        back
        hidden={false}
        headerText="Header"
        textSize={22}
        backgroundColor="skyblue"
      />
    )
  }
}

class SpinnerScreen extends React.Component {
  render() {
    return(
      <Spinner
        size="large"
        color="skyblue"/>
    )
  }
}

class ButtonScreen extends React.Component {
  render() {
    return(
      <View>
      <View style={styles.containerText}>
        <Text style={{ fontSize: 30,  }}>Button</Text>
      </View>
      <Button
          text="Primary"
          theme="primary"
          onPress={() => null}
      />
      <Button
          text="Success"
          theme="success"
          onPress={() => null}
      />
      <Button
          text="Warning"
          theme="warning"
          onPress={() => null}
      />
      <Button
          text="Danger"
          theme="danger"
          onPress={() => null}
      />
      <Button
          text="Info"
          theme="info"
          onPress={() => null}
      />

      <View style={styles.containerText}>
        <Text style={{ fontSize: 30,  }}>Round Button</Text>
      </View>
      <Button
          text="Primary"
          round
          theme="primary"
          onPress={() => null}
      />
      <Button
          text="Success"
          round
          theme="success"
          onPress={() => null}
      />
      <Button
          text="Warning"
          round
          theme="warning"
          onPress={() => null}
      />
      <Button
          text="Danger"
          round
          theme="danger"
          onPress={() => null}
      />
      <Button
          text="Info"
          round
          theme="info"
          onPress={() => null}
      />

      <View style={styles.containerText}>
        <Text style={{ fontSize: 30,  }}>Outline Button</Text>
      </View>
      <Button
          text="Primary"
          round
          outline
          theme="primary"
          onPress={() => null}
      />
      <Button
          text="Success"
          round
          outline
          theme="success"
          onPress={() => null}
      />
      <Button
          text="Warning"
          round
          outline
          theme="warning"
          onPress={() => null}
      />
      <Button
          text="Danger"
          round
          outline
          theme="danger"
          onPress={() => null}
      />
      <Button
          text="Info"
          round
          outline
          theme="info"
          onPress={() => null}
      />

      <View style={styles.containerText}>
        <Text style={{ fontSize: 30,  }}>Full Button</Text>
      </View>
      <Button
          full
          text="Primary"
          theme="primary"
          onPress={() => null}
      />
      <Button
          full
          text="Success"
          theme="success"
          onPress={() => null}
      />
      <Button
          full
          text="Warning"
          theme="warning"
          onPress={() => null}
      />
      <Button
          full
          text="Danger"
          theme="danger"
          onPress={() => null}
      />
      <Button
          full
          text="Info"
          theme="info"
          onPress={() => null}
      />

      <View style={styles.containerText}>
        <Text style={{ fontSize: 30,  }}>Disabled Button</Text>
      </View>
      <Button
          disabled
          text="Primary"
          theme="primary"
          onPress={() => null}
      />
      <Button
          disabled
          text="Success"
          theme="success"
          onPress={() => null}
      />
      <Button
          disabled
          text="Warning"
          theme="warning"
          onPress={() => null}
      />
      <Button
          disabled
          text="Danger"
          theme="danger"
          onPress={() => null}
      />
      <Button
          disabled
          text="Info"
          theme="info"
          onPress={() => null}
      />

      <View style={styles.containerText}>
        <Text style={{ fontSize: 25,  }}>Different sizes</Text>
      </View>
      <Button
          size = "small"
          text="Small"
          theme="info"
          onPress={() => null}
      />
      <Button
          text="Default"
          theme="info"
          onPress={() => null}
      />
      <Button
          size = "large"
          text="Large"
          theme="info"
          onPress={() => null}
      />
      </View>
    )
  }
}

class FloatingButtonScreen extends React.Component {
  render() {
    return(
      <FloatingButton 
          onPress = {this.clickHandler}
          style =  {styles.FB} 
          imageUri = {require('./assets/plus-icon.png')}/>
    )
  }
}

class AvatarScreen extends React.Component {

  render() {
    return (
      <View style={styles.AvatarContainer}>
        <Text>Avatar Icon</Text>
        <Avatar Icon name="ios-menu" size={40} color="white"/>
        <Text>Avatar Label</Text>
        <Avatar Label name="AG" size={40} color="white" />
        <Text>Avatar Image</Text>
        <Avatar Image source={{uri:uri}} size={40} />
      </View>
    );
  }
}

class TextScreen extends React.Component {

  render() {
    return (
      <View style={styles.TextContainer}>
      <Text h1 h1Style={{color: 'blue', fontStyle: 'italic' }}>Title 1</Text>
      <Text h2 h2Style={{color: 'green', fontStyle: 'italic' }}>Title 2</Text>
      <Text h3 h3Style={{color: 'red', fontStyle: 'italic' }}>Title 3</Text>
      <Text h4 h4Style={{color: 'yellow', fontStyle: 'italic' }}>Title 4</Text>
    </View>
    );
  }
}

class ThumbnailScreen extends React.Component {
  render() 
  {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Rounded Thumbnail</Text>
        <Text>Small</Text> 
        <Thumbnail Rounded size="small"  source={{uri: uri}} />
        <Text>Medium</Text>
        <Thumbnail Rounded size="medium"  source={{uri: uri}} />
        <Text>Large</Text>
        <Thumbnail Rounded size="large"  source={{uri: uri}} />
        <Text style={{fontWeight:'bold'}}>Square Thumbnail</Text>
        <Text> Small</Text>
        <Thumbnail size="small" source={{uri: uri}} />
        <Text>Medium</Text>
        <Thumbnail size="medium" source={{uri: uri}} />
        <Text>Large</Text>
        <Thumbnail size="large" source={{uri: uri}} />
      </View>
    );
  }
  }

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  TextContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  AvatarContainer:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ThumbnailsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 40
  }
});

const MyDrawerNavigator = createDrawerNavigator({
  Header: {
    screen: HeaderScreen,
  },
  Tile: {
    screen: TileScreen,
  },
  Text: {
    screen: TextScreen,
  },
  Avatar: {
    screen: AvatarScreen,
  },
  Thumbnail: {
    screen: ThumbnailScreen,
  },
  Button: {
    screen: ButtonScreen,
  },
  FloatingButton: {
    screen: FloatingButtonScreen,
  },
  Spinner: {
    screen: SpinnerScreen,
  }
});

const MyApp = createAppContainer(MyDrawerNavigator);


export default MyApp;
