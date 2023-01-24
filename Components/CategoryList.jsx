import React from 'react';
import Category from './Category';
import { View } from 'react-native';

export default function CategoryList(props) {

  return (
    <View >
      {props.categoriesArray.map((category, key) => (
        <Category
          name={category.name}
          key={category.id}
          id={category.id}
        />
      ))}
    </View>
  )
}
