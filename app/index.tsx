import { View, Text, StyleSheet } from "react-native"
import Botao from "../components/Botao";
import Header from "../components/Header";
import Input from "../components/Inputs";
import React from 'react';
import { Link } from 'expo-router';

function Login () {
    return(
    <View>
      <View style={styles.cor_header}>
        <Header texto="Login"/>
      </View>
    <View style={styles.container}>
      <View style={styles.texto}>
        <Text >Faça login para acessar o sistema</Text></View>
        <Input texto="Email:" placeholder="Digite seu email"/>
        <Input texto="Senha:" placeholder="Digite sua senha"/>
        <Link href="/Inventarios" asChild><Botao texto="Entrar"/></Link>
        <View style={styles.links}>
        <Link href="/Cadastro" asChild><Text style={styles.cor}>Cadastre-se</Text></Link>
        <Link href="/RecSenha" asChild><Text style={styles.cor}>Esqueceu a senha?</Text></Link>
      </View>
    </View>
    </View>
    )
}

const styles = StyleSheet.create({

    cor_header: {
      backgroundColor: "black",
      padding: 50,
      paddingBottom: 20,
      marginBottom: 20,
    },
    texto: {
      alignItems: "center",
      margin: 20
    },
    links: {
        width: 320,
        margin: 20,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    cor: {
        color: "#011E83"
    },
    container: {
        alignItems: "center"
    }
  })


export default Login