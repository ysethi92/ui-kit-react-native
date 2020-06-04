import React from 'react';
import { StyleSheet, Text, View, FlatList,ScrollView } from 'react-native';


class List extends React.Component {
    render(){
    return (
      <View style={styles.container}>
        <ScrollView style={styles.item}>
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 0,
    fontSize: 18,
    height: 44,
  },
})

export default List;
