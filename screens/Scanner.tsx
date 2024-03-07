import Navbar_itens from "../components/Navbar_itens"
import Footer from "../components/Footer"
import {View, Image, StyleSheet} from 'react-native'

function Scanner(){
    return(
        <>
            <Navbar_itens titulo="Scanner"/>
            <View style={styles.container}>
                <Image style={styles.imagem} source={require("../assets/code_scaner.png")}/>
            </View>
            <Footer/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    imagem: {
        width: 100
    }
})

export default Scanner