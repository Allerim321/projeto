import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Navbar_itens from "../components/Navbar_itens"
import Footer from "../components/Footer"
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Link } from 'expo-router';

export default function Descrição(){
    return(
        <>
            <Navbar_itens iconeD={<Link href="/Inventarios" asChild><AntDesign name="arrowleft" size={24} color="white"/></Link>}
            titulo="Descrição de itens" iconeE={<AntDesign name="reload1" size={24} color="white"/>}/>
            <View style={styles.container}>
                <View style={styles.conjunto}>
                    <Text style={styles.titulo}>N° do inventário:</Text>
                    <Text style={styles.texto}>957689</Text>
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
        <Link href="/Editar" asChild>
        <TouchableOpacity>
        <MaterialCommunityIcons style={styles.add} name="pencil-circle" size={50} color="red" />
        </TouchableOpacity>
        </Link>
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
    },
    add:{
        position: "absolute",
        right: 10,
        bottom: 70
    },
    texto:{ 
        color: "#595959"
    }
})