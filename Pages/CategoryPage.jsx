import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from '@rneui/themed';
import { GlobalContext } from '../Components/GlobalComp';

export default function CategoryPage(props) {

    const { AddCategory, CategoryArrContext } = useContext(GlobalContext); //מחנות הגלובלית
    const [text, setText] = useState("");//תיבת טקסט

    const AddCat = () => {
        if (existCategory(text) == false) {
            AddCategory(text);
        } else {
            alert("Category already exist");
        }
    };

    const existCategory = (category) => {
        let newArray = CategoryArrContext.filter((cat) => cat.name === category);
        if (newArray.length === 0) return false;
    };

    return (
        <View>
            <Text style={styles.title}>Enter new category:</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter a category"
                value={text}
                onChangeText={setText}
                maxLength={20}
            />
            <View style={styles.buttonContainer}>
                <Button title="close" buttonStyle={styles.buttonclose} onPress={() => props.navigation.navigate('Home')} />
                <Button title="add" buttonStyle={styles.buttonadd} onPress={() => AddCat()} />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        marginBottom: 30,
        marginTop: 50,
        textAlign: "center",
        color: "#00337C",
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

