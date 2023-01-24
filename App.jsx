import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryPage from "./Pages/CategoryPage";
import NotePage from "./Pages/NotePage";
import HomePage from "./Pages/HomePage";
import GlobalComp from './Components/GlobalComp';
import AddNotePage from './Pages/AddNotePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalComp>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Category" component={CategoryPage} />
          <Stack.Screen name="Note" component={NotePage} />
          <Stack.Screen name="AddNote" component={AddNotePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalComp>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


