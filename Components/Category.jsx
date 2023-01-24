import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../Components/GlobalComp';


export default function Category(props) {

  const navigation = useNavigation();
  const { NoteArrContext } = useContext(GlobalContext); //מחנות הגלובלית

  let legend = NoteArrContext.filter((note) => note.category === props.name).length;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Note', { categoryName: props.name})} >
        <Text style={styles.buttonText}>
        {props.name + "  " + legend}
        </Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#2C74B3',
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    width: '70%',
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

