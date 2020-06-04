const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
const marginTop = StatusBar.currentHeight;

const radioButtonEntries = [
  {
      text: 'Yes',
  },
  {
      text: 'No',
  },
  {
      text: 'None'
  },
];
const checkBoxEntries = [
  {
      text: 'Yes',
      checked: false,
  },
  {
      text: 'No',
      checked: false,
  },
  {
      text: 'None',
      checked: false,
  },
];

class TileScreen extends React.Component {

  render() {
    return (
      <View style={{flex:1}}>
      <Header
        onBackPressed={() => this.props.navigation.openDrawer()}
        onSearchPressed={() => this.props.navigation.openDrawer()}
        back
        hidden={false}
        headerText="Tile Screen"
        textSize={22}
        backgroundColor=""

      />
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
    </View>
    );
  }
}

class HeaderScreen extends React.Component {
  render() {
    return(
      <View>
      <Header
        onBackPressed={() => this.props.navigation.openDrawer()}
        onSearchPressed={() => ToastAndroid.show('Please implement a specific!!!', ToastAndroid.SHORT)}
        search
        back
        hidden={false}
        headerText="Header"
        textSize={22}
        backgroundColor="skyblue"
      />
      <View style={styles.HeaderContainer}>
        <Text h4 h4style={{fontWeight: 'normal'}}>This is Header Component</Text>
      </View>
      </View>
    )
  }
}

class SpinnerScreen extends React.Component {
  render() {
    return(
      <View>
        <Header
        onBackPressed={() => this.props.navigation.openDrawer()}
        onSearchPressed={() => ToastAndroid.show('Please implement a specific!!!', ToastAndroid.SHORT)}
        back
        hidden={false}
        headerText="Spinner Screen"
        textSize={22}
        backgroundColor=""
      />
        <Spinner
        size="large"
        color="skyblue"/>
        <Spinner
        size="small"
        color="red"/>
        <Spinner
        size="large"
        color="green"/>
      </View>
      
    )
  }
}

class ButtonScreen extends React.Component {
  render() {
    return(
      <View>
        <Header
        onBackPressed={() => this.props.navigation.openDrawer()}
        onSearchPressed={() => this.props.navigation.openDrawer()}
        back
        hidden={false}
        headerText="Button Screen"
        textSize={22}
        backgroundColor=""
      />
      <ScrollView >

      <View style={styles.ButtonContainer}>
      <View style={styles.containerText}>
        <Text h4 h4style={{ fontSize: 30,  }}>Button</Text>
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
        <Text h4 h4style={{ fontSize: 30,  }}>Round Button</Text>
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
        <Text h4 h4style={{ fontSize: 30,  }}>Outline Button</Text>
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
        <Text h4 h4style={{ fontSize: 30,  }}>Full Button</Text>
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
        <Text h4 h4style={{ fontSize: 30,  }}>Disabled Button</Text>
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
        <Text h4 h4style={{ fontSize: 25,  }}>Different sizes</Text>
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
      </ScrollView>
      </View>
    )
  }
}

class FloatingButtonScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1}}>
      <Header
        onBackPressed={() => this.props.navigation.openDrawer()}
        onSearchPressed={() => this.props.navigation.openDrawer()}
        back
        hidden={false}
        headerText="Floating Button"
        textSize={22}
        backgroundColor=""
      />
      <FloatingButton 
          onPress = {this.clickHandler}
          style =  {styles.FB} 
          imageUri = {require('./assets/plus-icon.png')}/>
      </View>
    )
  }
}

class AvatarScreen extends React.Component {

  render() {
    return (
      <View style={{flex:1}}>
      <Header
        onBackPressed={() => this.props.navigation.openDrawer()}
        onSearchPressed={() => this.props.navigation.openDrawer()}
        back
        hidden={false}
        headerText="Avatar"
        textSize={22}
        backgroundColor=""
      />
      <View style={styles.AvatarContainer}>
        <Text h4>Avatar Icon</Text>
        <View style={{margin:5,}}></View>
        <Avatar onPress={() => ToastAndroid.show('Please implement a specific!!!', ToastAndroid.SHORT)} Icon name="ios-menu" size={40} color="white"/>
        <View style={{margin:5,}}></View>
        <Text h4>Avatar Label</Text>
        <View style={{margin:5,}}></View>
        <Avatar onPress={() => ToastAndroid.show('Please implement a specific!!!', ToastAndroid.SHORT)} Label name="AG" size={40} color="white" />
        <View style={{margin:5,}}></View>
        <Text h4>Avatar Image</Text>
        <View style={{margin:5,}}></View>
        <Avatar onPress={() => ToastAndroid.show('Please implement a specific!!!', ToastAndroid.SHORT)} Image source={{uri:uri}} size={40} />
      </View>
      </View>
    );
  }
}

class TextScreen extends React.Component {

  render() {
    return (
      <View style={{flex:1}}>
      <Header
        onBackPressed={() => this.props.navigation.openDrawer()}
        onSearchPressed={() => this.props.navigation.openDrawer()}
        back
        hidden={false}
        headerText="Text Screen"
        textSize={22}
        backgroundColor=""
      />
      <View style={styles.TextContainer}>
      <Text h1 h1Style={{color: 'blue', fontStyle: 'italic' }}>Heading 1</Text>
      <Text h2 h2Style={{color: 'green', fontStyle: 'italic' }}>Heading 2</Text>
      <Text h3 h3Style={{color: 'red', fontStyle: 'italic' }}>Heading 3</Text>
      <Text h4 h4Style={{color: 'pink', fontStyle: 'italic' }}>Heading 4</Text>
    </View>
    </View>
    );
  }
}

class ThumbnailScreen extends React.Component {
  render() 
  {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (

      <View style={{flex:1}}>
      <Header
        onBackPressed={() => this.props.navigation.openDrawer()}
        onSearchPressed={() => this.props.navigation.openDrawer()}
        back
        hidden={false}
        headerText="Thumbnail Screen"
        textSize={22}
        backgroundColor=""
      />
      <View style={styles.ThumbnailsContainer}>
        <Text h4 h4style={{fontWeight: 'bold', }}>Rounded Thumbnail</Text>
        <View style={{margin:5,}}></View>
        <Text>Small</Text> 
        <View style={{margin:5,}}></View>
        <Thumbnail onPress={() => ToastAndroid.show('Please implement a specific!!!', ToastAndroid.SHORT)} Rounded size="small"  source={{uri: uri}} />
        <View style={{margin:5,}}></View>
        <Text>Medium</Text>
        <View style={{margin:5,}}></View>
        <Thumbnail onPress={() => ToastAndroid.show('Please implement a specific!!!', ToastAndroid.SHORT)} Rounded size="medium"  source={{uri: uri}} />
        <View style={{margin:5,}}></View>
        <Text>Large</Text>
        <View style={{margin:5,}}></View>
        <Thumbnail onPress={() => ToastAndroid.show('Please implement a specific!!!', ToastAndroid.SHORT)} Rounded size="large"  source={{uri: uri}} />
        <View style={{margin:5,}}></View>
        <Text h4 h4style={{fontWeight:'bold'}}>Square Thumbnail</Text>
        <View style={{margin:5,}}></View>
        <Text> Small</Text>
        <View style={{margin:5,}}></View>
        <Thumbnail onPress={() => ToastAndroid.show('Please implement a specific!!!', ToastAndroid.SHORT)} size="small" source={{uri: uri}} />
        <View style={{margin:5,}}></View>
        <Text>Medium</Text>
        <View style={{margin:5,}}></View>
        <Thumbnail onPress={() => ToastAndroid.show('Please implement a specific!!!', ToastAndroid.SHORT)} size="medium" source={{uri: uri}} />
        <View style={{margin:5,}}></View>
        <Text>Large</Text>
        <View style={{margin:5,}}></View>
        <Thumbnail onPress={() => ToastAndroid.show('Please implement a specific!!!', ToastAndroid.SHORT)} size="large" source={{uri: uri}} />
      </View>
      </View>
    );
  }
  }

  class CardScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
        <Header
        onBackPressed={() => this.props.navigation.openDrawer()}
        onSearchPressed={() => ToastAndroid.show('Please implement a specific!!!', ToastAndroid.SHORT)}
        back
        hidden={false}
        headerText="Card Screen"
        textSize={22}
        backgroundColor=""
      />
      <ScrollView>
      <Text style={styles.textS}>This is Image cardItem with header, body, footer</Text>

      <Card>
          <CardItem header >
              <Left>
                <Thumbnail Rounded size="medium" source={require('./assets/Amish-Tripathi.jpg')}>
                </Thumbnail>
              </Left>
              <Body>
                <Text>Amish Tripathi</Text>
                <Text note>Author</Text>
              </Body>
              
            </CardItem>
            <CardItem body>
  
                <Image source={require('./assets/bg.jpg')} style={{height: 100, width: '100%'}}/>
              
            </CardItem>
  
          </Card>
          <Text style={styles.textS}>This is basic card Component </Text>
          
          <Card>
            <CardItem>
              <Text>
                This is basic card Component
              </Text>
            </CardItem>
          </Card>
          
          <Text style={styles.textS}>This is cardItem  with header, body, footer</Text>
  
          <Card >
            <CardItem header>
            <Text style={{ fontWeight: 'bold'}}>UI Component Kit</Text>
            </CardItem>
            <CardItem body>
              <Text>This is free open source UI Component kit </Text>
            </CardItem>
            <CardItem footer>
              <Text style={{ fontWeight: 'bold'}}>By AVVY</Text>
            </CardItem>
          </Card>
          
          <Text style={styles.textS}>This is bordered cardItem  with header, body, footer</Text>
  
          <Card>
            <CardItem border header>
              <Text style={{ fontWeight: 'bold'}}>UI Component Kit</Text>
            </CardItem>
            <CardItem border body>
              <Text>This is free open source UI Component kit </Text>
            </CardItem>
            <CardItem border footer>
              <Text style={{ fontWeight: 'bold'}}>By AVVY</Text>
            </CardItem>
          </Card>
  
          <Text style={styles.textS}>This is button cardItem with header, body, footer</Text>
  
          <Card>
            <CardItem header button onPress={() => alert('This is  card header with button')}>
              <Text style={{ fontWeight: 'bold'}}>UI Component Kit</Text>
            </CardItem>
            <CardItem body button onPress={() => alert('This is  card body with button')}>
              <Text>This is free open source UI Component kit </Text>
            </CardItem>
            <CardItem footer button onPress={() => alert('This is  card footer with button')}>
              <Text style={{ fontWeight: 'bold'}}>By AVVY</Text>
            </CardItem>
          </Card>
  
          <Text style={styles.textS}>This is button borderd cardItem with header, body, footer</Text>
  
          <Card>
            <CardItem header button border onPress={() => alert('This is  card header with button')}>
              <Text style={{ fontWeight: 'bold'}}>UI Component Kit</Text>
            </CardItem>
            <CardItem body button border onPress={() => alert('This is  card body with button')}>
              <Text>This is free open source UI Component kit </Text>
            </CardItem>
            <CardItem footer button border onPress={() => alert('This is  card footer with button')}>
              <Text style={{ fontWeight: 'bold'}}>By AVVY</Text>
            </CardItem>
          </Card>
  
  
          
  
        </ScrollView>
        </View>
      )
    }
  }
  
  class ListScreen extends React.Component {
  

    render() {
       return (
         <View style={styles.Listcontainer}>
         <Header
        onBackPressed={() => this.props.navigation.openDrawer()}
        onSearchPressed={() => ToastAndroid.show('Please implement a specific!!!', ToastAndroid.SHORT)}
        back
        hidden={false}
        headerText="Card Screen"
        textSize={22}
        backgroundColor=""
      />
           <List>
             <ListItem divider>
               <Text h4>A</Text>
             </ListItem>
             <ListItem>
               <Left><Text>Anmol</Text></Left>
               <Right><Icon name="angle-right"/></Right>
             </ListItem>
             <ListItem onPress={() => alert("HI")}>
               <Text>Akbar</Text>
             </ListItem>
             <ListItem >
             <Left>
                 <Thumbnail Rounded size="small" source={require('./assets/Amish-Tripathi.jpg')}>
                 </Thumbnail>
               </Left>
               <Body>
                 <Text style={{fontWeight: 'bold'}}>Amish Tripathi</Text>
                 <Text note>Author</Text>
               </Body>
               <Right><Text note>3:45 pm</Text></Right>
             </ListItem>
             <ListItem onPress={() => alert("HI")}>
               <Text>Aktar</Text>
             </ListItem>
             <ListItem divider>
               <Text h4>B</Text>
             </ListItem>
             <ListItem>
               <Left><Text>Baban</Text></Left>
               <Right><Icon name="angle-right"/></Right>
             </ListItem>
             <ListItem onPress={() => alert("HI")}>
               <Text>Bob</Text>
             </ListItem>

             <ListItem divider>
               <Text h4>C</Text>
             </ListItem>
             <ListItem>
               <Left><Text>Cisco</Text></Left>
               <Right><Icon name="angle-right"/></Right>
             </ListItem>
             <ListItem onPress={() => alert("HI")}>
               <Text>Clark</Text>
             </ListItem>

           </List>
           
         </View>
       )
     }
   }

class CheckBoxScreen extends React.Component {
  render() {
    return (
      <View>
      <Header
        onBackPressed={() => this.props.navigation.openDrawer()}
        onSearchPressed={() => ToastAndroid.show('Please implement a specific!!!', ToastAndroid.SHORT)}
        back
        hidden={false}
        headerText="Check Box Screen"
        textSize={22}
        backgroundColor=""
      />

            <CheckBox
                entries={checkBoxEntries} />

      </View>
    )
  }
}

class RadioButtonScreen extends React.Component {
  render() {
    return (
      <View>
      <Header
        onBackPressed={() => this.props.navigation.openDrawer()}
        onSearchPressed={() => ToastAndroid.show('Please implement a specific!!!', ToastAndroid.SHORT)}
        back
        hidden={false}
        headerText="Radio Button Screen"
        textSize={22}
        backgroundColor=""
      />

        <RadioButton
          entries={radioButtonEntries}
          backgroundColor="pink" 
        />

      </View>
    )
  }
}

class CustomDrawerComponent extends React.Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return(
      <View>
        <Image 
          source={{uri:uri}}
          style={{width:20,height:20}}
        />
      </View>
    )
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
  },
  containerText: {

  },
  ButtonContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 40
  },
  HeaderContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 40,
    paddingTop: '50%',
  },
  CardContainer: {
    marginTop: marginTop,
  },
  textS: {
    paddingLeft: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#22b317'
  },
  Listcontainer: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 0
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Header: {
    screen: HeaderScreen,
  },
  Card: {
    screen: CardScreen,
  },
  List: {
    screen: ListScreen,
  }
  ,
  Spinner: {
    screen: SpinnerScreen,
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
  'Check Box': {
    screen: CheckBoxScreen,
  },
  'Radio Button': {
    screen: RadioButtonScreen,
  }
  ,
  'Floating Button': {
    screen: FloatingButtonScreen,
  },
  Tile: {
    screen: TileScreen,
  }, 
},

);

const MyApp = createAppContainer(MyDrawerNavigator);


export default MyApp;
