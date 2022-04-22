/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, FlatList, } from "react-native";
import SearchBar from './src/SearchBar/';
import product from './src/Products.json';
import Card from './src/Card/Card'

function App() {
  return (
    <SafeAreaView style={appStyle.container}>
      <ScrollView >
        <Text style={appStyle.header} >PATIKASTORE</Text>
        <View >
          <SearchBar />
        </View>
        <View>
          <FlatList

            data={product}
            renderItem={({ item }) => <Card product={item} />}

          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const appStyle = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      flex: 1,
      fontSize: 25,
      marginLeft: 15,
      marginBottom: 2,
      color: 'purple',
      fontWeight: "bold",
      fontFamily: 'sans-serif',

    }
  }
)

export default App;
