import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet,  TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { colors, fonts } from "../../styles";
const { width, height } = Dimensions.get("window");

const Card = ({
    city = "Cidade",
    country = "Pais",
    isWeather,
    weatherTemperature,
    weather,
    isFavorite = () => { },
    weatherTemperatureMin,
    weatherTemperatureMax,
    onPressAdd = () => { }
}) => {
    const [favorite, setFavorite] = useState(false)
    const onPressFavorite = () => {
        setFavorite(!favorite)
    }
   
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <View style={styles.cardItem}>
            <View style={{ width: '50%' }} >
                <View style={{ marginLeft: width * 0.04, justifyContent: 'space-between' }}>
                    <Text style={{ fontFamily: fonts.Regular, fontSize: 30, marginVertical: 10 }}>{city}</Text>
                    <Text style={{ fontFamily: fonts.Regular, fontSize: 20 }}>{country}</Text>

                    {isWeather && (
                        <>
                            {/* condicional para informacao do tempo  */}
                            <View style={[{ marginTop: height * 0.04 }]}>

                                <Text style={{ fontFamily: fonts.Regular, fontSize: 20, color: colors.orange }}>{capitalizeFirstLetter(weather)}</Text>
                                <Text style={{ fontFamily: fonts.Regular, fontSize: 20, color: colors.black }}>{weatherTemperatureMin.toFixed(0)}º  -  {weatherTemperatureMax.toFixed(0)}º</Text>
                            </View>
                        </>
                    )}

                    {/* condicional para informacao da cidade  */}
                    {!isWeather && (
                        <TouchableOpacity onPress={() => { onPressAdd() }}>

                            <Text style={{ fontFamily: fonts.Medium, color: colors.blue, fontSize: 20, marginTop: height * 0.05, marginLeft: width * .04 }}>Adicionar</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            {isWeather && (
                <View style={[{ width: '50%' }, { justifyContent: 'center' }]}>

                    <View style={{ justifyContent: 'space-between', right: width * 0.04, position: 'absolute' }}>
                        <Text style={{ fontFamily: fonts.Regular, fontSize: 30, color: colors.orange, marginVertical: 25 }}>{weatherTemperature.toFixed(0)}º</Text>
                        {!isFavorite && (
                            <TouchableOpacity onPress={() => { onPressFavorite() }}>
                                <AntDesign name={favorite === true ? 'heart' : 'hearto'} size={20} color={colors.red} />
                            </TouchableOpacity>
                        )}

                    </View>
                </View>
            )}
        </View>


    )
}


const styles = StyleSheet.create({

    cardItem: {
        backgroundColor: '#f5f5f5',
        borderRadius: width * 0.01,
        width: (width * 96) / 100,
        height: (height * 20) / 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 2, 
        marginTop: 10,
        flexDirection: 'row'
    },
})



export default Card;