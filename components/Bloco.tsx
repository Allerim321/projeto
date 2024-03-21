import {View, Text, StyleSheet} from "react-native";
import { Link } from "expo-router";

function Bloco() {

    const styles = StyleSheet.create({
    textos: {
        marginHorizontal: 10,
        padding: 10,
        borderBottomColor: "#F5F5F5",
        borderBottomWidth: 2,
    },
    numero: {
        fontWeight: "bold"
    }
})

    return(
        <View style={styles.textos}>
            <Link href="/Descricao" asChild>
                <Text style={styles.numero}>956389</Text>
            </Link>
            <Text>CADEIRA SENAI</Text>
        </View>
    )
    }



export default Bloco