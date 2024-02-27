import { View, Text, StyleSheet } from "react-native"
import Botao from "../components/Botao";
import Header from "../components/Header";
import Input from "../components/Inputs";
import React from 'react';

function Login () {
    return(
    <View>
    <Header />
    <Text style={styles.texto}>Faça login para acessar o sistema</Text>
    <Input />
    <Input />
    <Botao />
    <View style={styles.links}>
    <Text>Cadastre-se</Text>
    <Text>Esqueceu a senha?</Text>
    </View>
    </View>
    )
}

const styles = StyleSheet.create({

    texto: {
      margin: 20,
      marginLeft: 80
    },
    links: {
        margin: 20,
        justifyContent: "space-between",
        flexDirection: "row"
    }
  })


export default Login