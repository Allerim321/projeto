import {View, Text, StyleSheet} from "react-native";

function Bloco() {
    return(
        <View style={styles.textos}>

            <Text style={styles.numero}>956389</Text>
            <Text>CADEIRA SENAI</Text>
        </View>
    )
    }

const styles = StyleSheet.create({
    textos: {
        marginHorizontal: 10,
        padding: 10,
        borderBottomColor: "#F5F5F5",
        borderBottomWidth: 2
    },
    numero: {
        fontWeight: "bold"
    }
})

export default Bloco