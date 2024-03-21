import Input from "../components/Inputs";
import Header from "../components/Header";
import Botao from "../components/Botao";
import { Link } from "expo-router";
import {View, StyleSheet, ScrollView} from "react-native";

function Cadastro(){
    return(
        <ScrollView>
        <View style={styles.cor}>
        <Header texto="Cadastre-se"/>
        </View>
        <View style={styles.container}>
            <Input texto="Nome:" placeholder="Insira seu nome"/>
            <Input texto="Sobrenome:" placeholder="Insira seu sobrenome"/>
            <Input texto="Email:" placeholder="Insira seu email"/>
            <Input texto="Telefone:" placeholder="Insira seu telefone"/>
            <Input texto="Senha:" placeholder="Insira sua senha"/>
            <Input texto="Confirmar senha:" placeholder="Confirme sua senha"/>
            <View style={styles.botao}>
                <Link href="/index" asChild><Botao texto="Cadastre-se"/></Link>
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cor: {
        backgroundColor: "red",
        padding: 50,
        paddingBottom: 20,
        marginBottom: 20,
    },
    botao:{
        marginBottom: 20
    },
    container: {
        alignItems: "center"
    }
})

export default Cadastro