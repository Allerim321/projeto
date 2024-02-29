import Input from "../components/Inputs";
import Header from "../components/Header";
import Botao from "../components/Botao";
import {View, StyleSheet, ScrollView} from "react-native";

function Cadastro(){
    return(
        <ScrollView>
        <View style={styles.cor}>
        <Header texto="Cadastre-se"/>
        </View>
        <Input texto="Nome:" placeholder="Insira seu nome"/>
        <Input texto="Sobrenome:" placeholder="Insira seu sobrenome"/>
        <Input texto="Email:" placeholder="Insira seu email"/>
        <Input texto="Telefone:" placeholder="Insira seu telefone"/>
        <Input texto="Senha:" placeholder="Insira sua senha"/>
        <Input texto="Confirmar senha:" placeholder="Confirme sua senha"/>
        <Botao/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cor: {
        backgroundColor: "red",
        padding: 50,
        paddingBottom: 20,
        marginBottom: 20,
    }
})

export default Cadastro