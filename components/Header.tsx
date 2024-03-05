import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

interface InputProps{
    texto: string
}

function Header({texto}: InputProps) {
    return (
        <View style={styles.header}>
            <StatusBar backgroundColor="black"/>
            <Image style={styles.imagem} source={require("../assets/senai.png")}/>
            <Text style={styles.text}>{texto}</Text>
        </View>
    );
  }

const styles = StyleSheet.create({

    header: {
        alignItems: 'center',
        color: 'white',
      },

    text : {
        color: 'white',
        marginBottom: 31,
        marginTop: 10,
        fontSize: 20,
      },
    imagem: {
      width: 200,
      height: 52
    }
  })

export default Header;