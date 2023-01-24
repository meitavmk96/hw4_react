import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Components/GlobalComp';

import { Button } from '@rneui/themed';

export default function AddNotePage(props) {

    const { categoryName } = props.route.params;

    const { AddNote, NoteArrContext } = useContext(GlobalContext); //מחנות הגלובלית

    const [note, setNote] = useState("");
    const [title, setTitle] = useState("");

    const SaveNote = () => {
        if (title !== "") {
            AddNote(categoryName, title, note);
            props.navigation.navigate("Note", { categoryName: categoryName });
        }
        else {
            alert("Please add title")
        }
    };

    return (
        <View>
            <Text style={styles.title}>Enter new note:</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Note Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.textInputbody}
                placeholder="Enter your note here"
                value={note}
                onChangeText={setNote}
                multiline={true}
            />
            <View style={styles.buttonContainer}>
                <Button title="Close" buttonStyle={styles.buttonclose} onPress={() => props.navigation.navigate('Home')} />
                <Button title="Save Note" buttonStyle={styles.buttonadd} onPress={() => SaveNote()} />
            </View>
        </View>
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
    textInputbody: {
        height: 100,
        borderColor: "black",
        borderWidth: 1,
        margin: 20,
        padding: 10,
        textAlignVertical: 'top',
        paddingTop: 10,
    },
    textInput: {
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        margin: 20,
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10
    },
    buttonadd: {
        backgroundColor: '#00337C',
        margin: 10
    },
    buttonclose: {
        backgroundColor: '#CD0404',
        margin: 10
    },
});


