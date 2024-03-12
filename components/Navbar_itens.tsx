import {View, StyleSheet, Text} from 'react-native'
import { StatusBar } from 'expo-status-bar';


function Navbar_itens({...props}){
    return(
        <>
        <StatusBar backgroundColor="black"/>
            <View style={styles.container}>
                {props.iconeD}
                <Text style={styles.texto}>{props.titulo}</Text>
                {props.iconeE}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        marginTop: 24,
        height: 50,
        padding: 10,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    texto: {
        color: "white"
    }
})

export default Navbar_itens