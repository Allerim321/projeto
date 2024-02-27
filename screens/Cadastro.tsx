import Input from "../components/Inputs";
import Header from "../components/Header";
import Botao from "../components/Botao";
import {View, StyleSheet} from "react-native"

function Cadastro(){
    return(
        <View>
        <View>
        <Header/></View>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Botao/>
        </View>
    )
}


export default Cadastro