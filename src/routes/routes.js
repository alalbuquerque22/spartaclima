import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/home/index';
import Description from '../pages/description';

const {Navigator, Screen} = createNativeStackNavigator();

function App() {
  return (
 
      <Navigator screenOptions={{
        headerShown: false,
      }}>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Description" component={Description} />
      </Navigator>
    
  );
}

export default App;