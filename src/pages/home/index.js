import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { colors, fonts } from "../../styles";
import Card from '../../components/card'
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import api from "../../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from "react-redux";
import { addWeather } from "../../store/actions/weatherList";


const { width, height } = Dimensions.get('window');
const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { persistedList } = useSelector(store => store.weatherList)
  const [city, setCity] = useState('')
  const [visible, setVisible] = useState(false)
  const [original, setOriginal] = useState([])
  const [cities, setCities] = useState([])
  
  const getWeather = async () => {
    if (city.length > 0) {
      let search = city.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      await api.get(`weather?q=${search}&lang=pt_br`).then(response => {
        console.log(response.data)
        setOriginal([response.data])

      }).catch(err => {
        console.log(err)
      })
    }
  }
  const isFavorite = (city) => {
    let isFavorite = false
    original.forEach(element => {
      if (element.name === city) {
        isFavorite = true
      }
    });
    return isFavorite

  }
  const navigateToDescription = (city) => {
    setVisible(false)
    setCity('')
    navigation.navigate('Description', { city })
  }
  const saveCity = async (value) => {
    try {

      setCities([...cities, value])
      const jsonValue = JSON.stringify(cities);
      await AsyncStorage.setItem('@Storage_cities_key', jsonValue);
      Alert.alert('Sucesso', 'Cidade salva com sucesso ' + value.name)
      let cidades = await AsyncStorage.getItem('@Storage_cities_key')
      cidades = cidades ? JSON.parse(cidades) : []
      console.log('cidades salvas no storage===>', cidades)
      dispatch(addWeather(cities))
    } catch (e) {
      console.log('erro ao salvar', e)
    }
  }

  const getData = async () => {
    try {
      console.log('aqui', persistedList)
      const jsonValue = await AsyncStorage.getItem('@Storage_cities_key')
      return jsonValue != null ? console.log('DADOS DO ASYNC STORAGE', JSON.parse(jsonValue)) : null;
    } catch (e) {
      Alert.alert('Erro ao carregar dados', e)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <>
        {/* header */}
        <View style={styles.headerContent} >
          <View style={{ width: '70%' }}>
            <TextInput
              style={styles.headerTitle}
              placeholder="Cidades"
              value={city}
              onFocus={() => { setVisible(true) }}
              onPressOut={() => { setVisible(false) }}
              placeholderTextColor={colors.white}
              underlineColorAndroid="transparent"
              onChangeText={(text) => { setCity(text) }}
              onSubmitEditing={() => { getWeather(), setVisible(false) }}
            />
          </View>
          <View style={{ width: '30%', justifyContent: 'flex-end', flexDirection: 'row' }}>

            <TouchableOpacity
              onPress={() => {
                getWeather(),
                  setVisible(true)
              }}
              style={{
                marginRight: (width * 3) / 100,
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Ionicons name="search-outline" size={24} color="white" />
            </TouchableOpacity>
            {visible === true && (
              <TouchableOpacity
                style={{
                  marginRight: (width * 3) / 100,
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
                onPress={() => {
                  setVisible(false),
                    setOriginal([]),
                    setCity('')
                }}>
                <Ionicons name="ios-close-outline" size={35} color="white" />
              </TouchableOpacity>
            )}
          </View>

        </View>
      </>
      {/* body */}
      <View style={{ alignItems: 'center', height: '100%' }}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {/*         <TouchableOpacity
            style={{ marginRight: (width * 3) / 100, flexDirection: 'row', alignItems: 'center' }}
            onPress={() => { getData(),console.log('STATE CITIES =>',persistedList) }}>

            <Ionicons name="ios-close-outline" size={35} color="red" />
          </TouchableOpacity> */}
          <>
            {original.map((city, index) => {
              return (
                <Card
                  key={index}
                  city={city.name}
                  country={city.sys.country}
                  isFavorite={isFavorite(city.name)}
                  object={city}
                  onPressAdd={() => { saveCity(city), setOriginal([]) }}
                // isWeather={true}
                />
              )
            })}
          </>
          {/* Texto quando esta vazio */}
          {cities.length < 1 && (
            <View style={{ marginTop: 100, width: width, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.textTitile}>Parece que você ainda não adicionou uma cidade</Text>
              <Text style={styles.textSubtitle}>Tente Adicionar uma cidade usando o botão de busca</Text>
            </View>
          )}
          <>
            {cities.map((city, index) => {
              return (
                <TouchableOpacity
                  onPress={() => navigateToDescription(city)}
                  key={index}
                >
                  <Card
                    city={city.name}
                    country={city.sys.country}
                    weatherTemperature={city.main.temp}
                    weather={city.weather[0].description}
                    weatherTemperatureMin={city.main.temp_min}
                    weatherTemperatureMax={city.main.temp_max}
                    isFavorite={isFavorite(city.name)}
                    isWeather={true}
                  />
                </TouchableOpacity>
              )
            })}
          </>
          {/* FIm Card */}
        </ScrollView>
      </View>



    </SafeAreaView>

  );
}



const styles = StyleSheet.create({
  headerContent: {
    backgroundColor: colors.blue,
    width: width,
    height: (height * 10) / 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: fonts.Medium,
    fontSize: 20,
    color: colors.white,
    marginLeft: (width * 3) / 100,
    marginTop: (height * 1.5) / 100
  },
  textTitile: {
    fontFamily: fonts.Medium,
    fontSize: 20, color:
      colors.black
  },
  textSubtitle: { fontFamily: fonts.Regular, fontSize: 16, color: colors.textGray },


})

export default HomeScreen;