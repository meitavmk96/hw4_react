import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Icon } from '@rneui/themed';
import NoteList from '../Components/NoteList';
import { GlobalContext } from '../Components/GlobalComp';

export default function NotePage(props) {

  const { categoryName } = props.route.params;

  const { NoteArrContext } = useContext(GlobalContext); //מחנות הגלובלית
  let ArrNote = NoteArrContext.filter((note) => note.category === categoryName);

  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>{categoryName}  {ArrNote.length}</Text>
        <NoteList NotesArray={ArrNote} />
        <Icon
          reverse
          name='add'
          type='ionicon'
          color='red'
          onPress={() => props.navigation.navigate('AddNote', { categoryName: categoryName} )}
          style={styles.icon}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 30,
    marginTop: 50,
    textAlign: "center",
    color: "#00337C",
  },
  icon: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderRadius: 50,
  },
});
