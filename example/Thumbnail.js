
export default class Thumbnail extends React.Component {
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
