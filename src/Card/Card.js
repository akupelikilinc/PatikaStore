import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';


const Card = ({ product }) => {
    return (
        <View style={proDuctStyle.container}>
            <Image style={proDuctStyle.Image} source={{ uri: product.imgURL }} />
            <Text>{product.title}</Text>
            <Text>{product.price}</Text>
            <Text>{product.inStock}</Text>
        </View>,
        <View style={proDuctStyle.container}>
            <Image style={proDuctStyle.Image} source={{ uri: product.imgURL }} />
            <Text>{product.title}</Text>
            <Text>{product.price}</Text>
            <Text>{product.inStock}</Text>
        </View>
    );

}

const proDuctStyle = StyleSheet.create(
    {
        View: {
            flex: 0.5
        },

        container: {
            flex: 1,
            backgroundColor: '#eceff1',
            margin: 10,

        },
        Image: {
            height: Dimensions.get('window').height / 4,
            width: Dimensions.get('window').width / 2,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
        }
    }
)

export default Card;