import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
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
            onPress={() => { }}
            style={{ marginRight: (width * 3) / 100 }}
          >

            <Ionicons name="search-outline" size={24} color="white" />
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
      <View style={{ alignItems: 'center', height: '100%' }}>
        {/* Card */}
        <View style={styles.cardItem}>
          <View style={{ width: '50%' }} >
            <View style={{ marginLeft: width * 0.04, justifyContent: 'space-between' }}>
              <Text style={{ fontFamily: fonts.Regular, fontSize: 30, marginVertical: 10 }}>Blumenau</Text>
              <Text style={{ fontFamily: fonts.Regular, fontSize: 20 }}>Brasil</Text>

                <>
                {/* condicional para informacao do tempo  */}
              <Text style={{ fontFamily: fonts.Regular, fontSize: 20,color:colors.orange }}>Chuva fraca</Text>
              <Text style={{ fontFamily: fonts.Regular, fontSize: 20,color:colors.black }}>14º - 22º</Text>
              </>

              {/* <Text style={{ fontFamily: fonts.Medium, color: colors.blue, fontSize: 20, marginTop: height * 0.05, marginLeft: width * .04 }}>Adicionar</Text> */}
            </View>
          </View>

          <View style={[{ width: '50%'},{justifyContent:'center'}]}>

            <View style={{ justifyContent: 'space-between',right:width * 0.04, position:'absolute' }}>
              <Text style={{ fontFamily: fonts.Regular, fontSize: 30, color: colors.orange,marginVertical:25 }}>18º</Text>
              <AntDesign name="hearto" size={20} color={colors.red} />
            </View>
          </View>
        </View>
      </View>
      {/* Texto quando esta vazio */}
      <View style={{ marginTop: 100, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.textTitile}>Parece que você ainda não adicionou uma cidade</Text>
        <Text style={styles.textSubtitle}>Tente Adicionar uma cidade usando o botão de busca</Text>
      </View>
    </SafeAreaView>

  );
}

const Card = () => {

  return (
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
  textSubtitle: { fontFamily: fonts.Regular, fontSize: 16, color: colors.textGray },

  cardItem: {
    backgroundColor: '#f5f5f5',
    borderRadius: width * 0.01,
    width: (width * 96) / 100,
    height: (height * 20) / 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2, marginTop: 10,

    flexDirection: 'row'
  },
})

export default HomeScreen;