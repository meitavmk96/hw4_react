import { Card } from '@rneui/base';
import React, { useContext, useState } from 'react';
import { Icon } from '@rneui/themed';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { GlobalContext } from '../Components/GlobalComp';

export default function Note(props) {

  const { DeleteNote } = useContext(GlobalContext); //מחנות הגלובלית
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardPress = (id) => {
    setExpandedCard(expandedCard === id ? null : id);//אם שווה לת.ז אז נשנה לנל ואם לא נשנה לת.ז
  };
  
  return (
    <Card style={styles.cardContainer}>
      <View style={styles.container}>
        
        <Text style={styles.cardDate}>{props.date}</Text>
        <Text style={styles.cardTitle}>{props.title}</Text>
        
          <Text style={styles.cardBody}>
            {expandedCard === props.id ? props.content : props.content.substring(0, 30)}
            {expandedCard !== props.id && props.content.length > 30 && "..."}
          </Text>

        <TouchableOpacity onPress={() => handleCardPress(props.id)}>
          {expandedCard !== props.id && props.content.length > 30 && (
            <Text style={styles.readMore}>Read more</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => DeleteNote(props.id)}>
        <Icon
          style={styles.deleteIcon}
          type="font-awesome"
          name="trash"
          color="#f50"
          size={20}
          containerStyle={{ paddingRight: 10 }}
        />
        </TouchableOpacity>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "60%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "#03A9F4",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  cardDate: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#f4511e",
    marginBottom: 10,
  },
  cardBody: {
    marginVertical: 10,
    fontSize: 20,
  },
  deleteButton: {
    marginTop: 10,
  },
  readMore: {
    color: "#007bff",
    textAlign: "right",
    marginTop: 10,
  },
});

