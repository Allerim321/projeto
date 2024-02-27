import Input from "../components/Inputs";
import Header from "../components/Header";
import Botao from "../components/Botao";
import {View} from "react-native";

function Cadastro(){
    return(
        <View>
        <Header/>
        <Input texto="Nome:" placeholder="Insira seu nome"/>
        <Input texto="Sobrenome:" placeholder="Insira seu sobrenome"/>
        <Input texto="Email:" placeholder="Insira seu email"/>
        <Input texto="Telefone:" placeholder="Insira seu telefone"/>
        <Input texto="Senha:" placeholder="Insira sua senha"/>
        <Input texto="Confirmar senha:" placeholder="Confirme sua senha"/>
        <Botao/>
        </View>
    )
}


export default Cadastro