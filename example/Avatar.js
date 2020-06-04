
const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

export default class Avatar extends React.Component {
  render(){
    
    return(
      <View style={styles.container}>
        <Text>Avatar Icon</Text>
        <Avatar Icon name="ios-menu" size={40} color="white"/>
        <Text>Avatar Label</Text>
        <Avatar Label name="AG" size={40} color="white" />
        <Text>Avatar Image</Text>
        <Avatar Image source={{uri:uri}} size={40} />
      </View>
      
    )
  }
}

const styles = StyleShaeet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
