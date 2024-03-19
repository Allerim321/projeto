import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Navbar_itens from "../components/Navbar_itens"
import AddInput from "../components/AddInputs"
import Footer from "../components/Footer"
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function Editar(){
    return(
        <>
            <Navbar_itens iconeD={<AntDesign name="arrowleft" size={24} color="white" />}
            titulo="Descrição de itens" iconeE={<AntDesign name="checkcircle" size={24} color="white" />}/>
            <View style={styles.container}>
            <AddInput texto="N° Inventário" conteudo="957689"/>
                <AddInput texto="Descrição" conteudo="Cadeira giratória"/>
                <AddInput texto="Responsável" conteudo="Carlos"/>
                <AddInput texto="Local" conteudo="C13"/>
                <AddInput texto="Data de registro" conteudo="05/03/2024"/>
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