import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {store,persistor} from "./src/store"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './src/routes/routes';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_700Bold,
  Roboto_900Black, useFonts
} from '@expo-google-fonts/roboto';
export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_700Bold,
    Roboto_900Black

  });
  if (!fontsLoaded) {
    return <></>
  } else {

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar backgroundColor='#f5f5f5' barStyle="dark-content" />
          <Routes />
        </NavigationContainer>
        </PersistGate>
      </Provider>

    );
  }
}
