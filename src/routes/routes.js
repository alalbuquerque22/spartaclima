import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/home/index';

const {Navigator, Screen} = createNativeStackNavigator();

function App() {
  return (
 
      <Navigator screenOptions={{
        headerShown: false,
      }}>
        <Screen name="Home" component={HomeScreen} />
      </Navigator>
    
  );
}

export default App;