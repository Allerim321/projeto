import AddInput from "../components/AddInputs"
import Navbar_itens from "../components/Navbar_itens"
import Footer from "../components/Footer"
import {View, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

function AddItems(){

    return(
        <>
            <Navbar_itens iconeD={<Link href="/Inventarios" asChild><AntDesign name="arrowleft" size={24} color="white" /></Link>}
            titulo="Cadastro de itens" iconeE={<Link href="/Inventarios" asChild><AntDesign name="pluscircleo" size={24} color="white" /></Link>}/>
            <View style={styles.container}>
                <AddInput texto="N° Inventário" conteudo=""/>
                <AddInput texto="Descrição" conteudo=""/>
                <AddInput texto="Responsável" conteudo=""/>
                <AddInput texto="Local" conteudo=""/>
                <AddInput texto="Data de registro" conteudo=""/>
            </View>
            <Footer/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 20
    }
})

export default AddItems