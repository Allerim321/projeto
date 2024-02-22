import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

function Header() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black"/>
            <Image source={require('./assets/senai_logo.png')}/>
            <Text style={styles.text}>Bem Vindo(a)</Text>
        </View>
    );
  }
  
const styles = StyleSheet.create({

    container: {
        backgroundColor: 'red',
        alignItems: 'center',
        color: 'white',
    
      },

    text : {
        color: 'white',
        marginBottom: 31,
        marginTop: 10,
        fontSize: 20,
      },
    
  })

export default Header;