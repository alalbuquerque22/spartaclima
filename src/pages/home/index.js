import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput } from "react-native";
import { colors, fonts } from "../../styles";
import { Ionicons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
const HomeScreen = () => {
  const [city, setCity] = useState('')
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <>
        {/* header */}
        <View style={styles.headerContent} >
          <Text style={styles.headerTitle}>Cidades</Text>
        <TouchableOpacity 
        onPress={()=>{}      }
          style={{marginRight:(width * 3) / 100}}
        >

        <Ionicons    name="search-outline" size={24} color="white" />
          </TouchableOpacity> 
          {/* <TextInput
            style={styles.headerInput}
            placeholder="Search"
            value={city}
            placeholderTextColor={colors.gray}
            underlineColorAndroid="transparent"
            onChangeText={(text) => { setCity(text) }}
          /> */}
        </View>
      </>
      <View style={{ marginTop:100, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.textTitile}>Parece que você ainda não adicionou uma cidade</Text>
        <Text style={styles.textSubtitle}>Tente Adicionar uma cidade usando o botão de busca</Text>
      </View>
    </SafeAreaView>

  );
}

const Card = () => {

  return(
    <></>
  )
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
  textSubtitle: { fontFamily: fonts.Regular, fontSize: 16, color: colors.textGray }
})

export default HomeScreen;