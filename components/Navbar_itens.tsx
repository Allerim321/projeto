import {View, StyleSheet, Text} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

type InputProps={
    titulo: string
    }

function Navbar_itens({titulo}: InputProps){
    return(
        <View>
            <View style={styles.container}>
                <AntDesign name="arrowleft" size={24} color="white" />
                <Text style={styles.texto}>{titulo}</Text>
                <AntDesign name="pluscircleo" size={24} color="white" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        height: 50,
        padding: 10,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    texto: {
        color: "white"
    }
})

export default Navbar_itens