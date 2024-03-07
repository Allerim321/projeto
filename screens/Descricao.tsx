import Navbar_itens from "../components/Navbar_itens"
import Footer from "../components/Footer"
import {View, Text, StyleSheet} from 'react-native'

export default function Descrição(){
    return(
        <>
            <Navbar_itens titulo="Descrição de itens"/>
            <View style={styles.container}>
                <View style={styles.conjunto}>
                    <Text style={styles.titulo}>N° do inventário:</Text>
                    <Text>957689</Text>
                </View>
                <View style={styles.conjunto}>
                    <Text style={styles.titulo}>Descrição:</Text>
                    <Text>Cadeira giratória</Text>
                </View>
                <View style={styles.conjunto}>
                    <Text style={styles.titulo}>Responsável:</Text>
                    <Text>Carlos</Text>
                </View>
                <View style={styles.conjunto}>
                    <Text style={styles.titulo}>Local:</Text>
                    <Text>Sala C13</Text>
                </View>
                <View style={styles.conjunto}>
                    <Text style={styles.titulo}>Data de registro:</Text>
                    <Text>05/03/2024</Text>
                </View>
        </View>
        <Footer/>
        </>
)}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin: 30,
        marginLeft: 20
    },
    conjunto:{
        margin: 10
    },
    titulo:{
        fontWeight: "bold"
    }
})