
const width = Dimensions.get('window').width;
const height = width * 0.8


export default function App() {
  
  return (
    <View >
      <Tile 
      title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem" 
      caption="Some Caption Text"
      imgsource={require('./assets/bg.jpg')}
      titlecolor = "white"
      captioncolor = "white"
      size = "90%"
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    width: width, 
    height:height,
    justifyContent: 'center'
  },
});
