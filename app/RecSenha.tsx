import Input from "../components/Inputs";
import Header from "../components/Header";
import Botao from "../components/Botao";
import { Link } from "expo-router";
import {View, Text, StyleSheet} from "react-native";

function RecSenha() {
    return(
        <View>
          <View style={styles.cor}>
            <Header texto="Recuperação de Senha"/>
          </View>
          <View style={styles.container}>
            <View style={styles.texto}>
              <Text>Insira seu email para recuperar a senha.</Text>
            </View>
              <Input texto="Email:" placeholder="Insira seu email"/>
              <Link href="/index" asChild><Botao texto="Recuperar senha"/></Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    cor: {
        backgroundColor: "#011E83",
        padding: 50,
        paddingBottom: 20,
        marginBottom: 20,
    },
    texto: {
      margin: 20,
      alignItems: "center",
    },
    container: {
      alignItems: "center"
    }
  })


export default RecSenha