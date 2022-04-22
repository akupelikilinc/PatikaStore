import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';

const SearchBar = () => {
    return (
        <View>
            <TextInput style={seachStyle.container} placeholder="Ara..." />
        </View>
    );

}

const seachStyle = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#ccc',
            height: 50,
            marginLeft: 15,
            marginRight: 15,
            padding: 15,
            borderRadius: 15,

        },
    }
)
export default SearchBar;