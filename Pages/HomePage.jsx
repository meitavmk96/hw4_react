import React, { useContext } from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import CategoryList from '../Components/CategoryList';
import { Icon } from '@rneui/themed';
import { GlobalContext } from '../Components/GlobalComp';


export default function HomePage(props) {
    
    const { CategoryArrContext } = useContext(GlobalContext); //מחנות הגלובלית

    return (
        <ScrollView>
        <View>
            <Text style={styles.title}>My Notes</Text>
            <CategoryList categoriesArray={CategoryArrContext} />
            <Icon
                reverse
                name='add'
                type='ionicon'
                color= 'red'
                onPress={() => props.navigation.navigate('Category')}
                style={styles.icon}
            />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 60,
        marginBottom: 50,
        textAlign: "center",
        color: "#00337C",
        marginTop: 20,
    },
    icon: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        borderRadius: 50,
    },
});