import {View, StyleSheet, Text} from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons';

function Navbar_itens(){
    return(
        <View>
            <View style={styles.container}>
                <AntDesign name="arrowleft" size={24} color="white" />
                <Text style={styles.texto}>Cadastro de itens</Text>
                <Ionicons name="add-circle-outline" size={24} color="white" />
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