import Navbar_itens from "../../../components/Navbar_itens"
import Footer from "../../../components/Footer"
import {View, Image, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

function Scanner(){
    return(
        <>
            <Navbar_itens iconeD={<Link href="/Inventarios" asChild><AntDesign name="arrowleft" size={24} color="white"/></Link>}
            titulo="Scanner" iconeE={<AntDesign name="reload1" size={24} color="white"/>}/>
            <View style={styles.container}>
                <Image style={styles.imagem} source={require(".../assets/code_scanner.png")}/>
            </View>
            <Footer/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    imagem: {
        width: 300
    }
})

export default Scanner