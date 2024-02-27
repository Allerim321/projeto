import Input from "../components/Inputs";
import Header from "../components/Header";
import Botao from "../components/Botao";
import {View, Text, StyleSheet} from "react-native";

function RecSenha() {
    return(
        <View>
            <Header/>
            <Text style={styles.texto}>Insira seu email para recuperar a senha.</Text>
            <Input texto="Email:" placeholder="Insira seu email"/>
            <Botao/>
        </View>
    )
}


const styles = StyleSheet.create({

    texto: {
      margin: 20,
      marginLeft: 80
    }
  })


export default RecSenha