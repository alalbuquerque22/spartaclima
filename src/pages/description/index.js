import React from "react";

import { View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView, Dimensions, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts } from "../../styles";
import api from "../../services/api";
import Card from "../../components/card";

const { width, height } = Dimensions.get('window');
const Description = ({
    navigation,
    route,
}) => {
    const { city } = route.params;
    const weekDay = (dia) => {
        let week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
        let date = new Date()
        let day = date.getDay()
        return dia ? week[dia] : week[day]
    }

    const nextfivedays = () => {
        let date = new Date()
        let nextfive = []
        for (let i = 0; i < 5; i++) {
            let next = new Date(date.getTime() + (24 * 60 * 60 * 1000 * (i + 1)))
            nextfive.push(next.getDate() + '/' + (next.getMonth() + 1) + '/' + next.getFullYear())
            // nextfive.push((next.getMonth() + 1)+ '/'+ next.getFullYear()+ '/'+ next.getDate()  )
        }
        return nextfive
    }
    //api para assinantes premium
    const getWeatherDays = async () => {
        await api
            .get(`/forecast/daily?q=${city.name}&cnt=5&lang=pt_br`)
            .then(response => { console.log(response.data) })
            .catch(err => {
                console.log('ERRO: ',
                    err,
                    err.message,
                    err.response,
                    err.response.data,
                    err.response.status,
                    err.response.headers
                )
            })
    }
    const nextFive = nextfivedays()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <>
                {/* header */}
                <View style={styles.headerContent} >
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}
                        style={{ marginLeft: width * 0.02, flexDirection: 'row', alignItems: 'center', width: '20%' }}
                    >
                        <Ionicons name="ios-chevron-back" size={30} color="white" />
                    </TouchableOpacity>
                    <View style={{ width: '80%' }}>
                        <Text style={styles.headerTitle}>
                            {city.name}
                        </Text>
                    </View>

                </View>

            </>
            <View style={{ alignItems: 'center', height: '100%' }}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1 }}
                    contentContainerStyle={{ paddingBottom: 100 }}
                >
                    <Card
                        city={'Hoje'}
                        country={nextFive[0]}
                        description={'testes'}
                        isWeather={true}
                        weather={city.weather[0].description}
                        weatherTemperatureMin={10}
                        weatherTemperatureMax={20}
                        weatherTemperature={20}
                    />
                    <Card
                        city={'Amanhã'}
                        country={nextFive[1]}
                        description={'testes'}
                        isWeather={true}
                        weather={city.weather[0].description}
                        weatherTemperatureMin={10}
                        weatherTemperatureMax={20}
                        weatherTemperature={20}
                    />
                    <Card
                        city={weekDay(1)}
                        country={nextFive[2]}
                        description={'testes'}
                        isWeather={true}
                        weather={city.weather[0].description}
                        weatherTemperatureMin={10}
                        weatherTemperatureMax={20}
                        weatherTemperature={20}
                    />
                    <Card
                        city={weekDay(2)}
                        country={nextFive[3]}
                        description={'testes'}
                        isWeather={true}
                        weather={city.weather[0].description}
                        weatherTemperatureMin={10}
                        weatherTemperatureMax={20}
                        weatherTemperature={20}
                    />
                    <Card
                        city={weekDay(3)}
                        country={nextFive[4]}
                        description={'testes'}
                        isWeather={true}
                        weather={city.weather[0].description}
                        weatherTemperatureMin={10}
                        weatherTemperatureMax={20}
                        weatherTemperature={20}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        backgroundColor: "#f0f0f5"
    },
    title: {
        fontFamily: fonts.Bold,
        color: "#32264d",
        fontSize: 32,
        maxWidth: 300,
        marginVertical: 40
    },
    description: {
        fontFamily: fonts.Regular,
        color: "#6a6180",
        fontSize: 16,
        marginVertical: 40,
        maxWidth: 300,
        textAlign: "center"
    },
    button: {
        marginTop: 40,
        backgroundColor: "#04d361",
        height: 58,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    buttonText: {
        fontFamily: fonts.Medium,
        color: "#fff",
        fontSize: 16
    },



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
    },
    //   textTitile: {
    //     fontFamily: fonts.Medium,
    //     fontSize: 20, color:
    //       colors.black
    //   },
    //   textSubtitle: { fontFamily: fonts.Regular, fontSize: 16, color: colors.textGray },

})

export default Description;