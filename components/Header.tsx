import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

function Header() {
    return (
        <View style={styles.header}>
            <StatusBar backgroundColor="black"/>
            <Image style={styles.imagem} source={require("../assets/senai.png")}/>
            <Text style={styles.text}>Login</Text>
        </View>
    );
  }

const styles = StyleSheet.create({

    header: {
        backgroundColor: 'black',
        alignItems: 'center',
        color: 'white',
        padding: 50,
        paddingBottom: 20,
        marginBottom: 20,
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