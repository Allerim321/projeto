import Navbar_itens from "../components/Navbar_itens"
import Footer from "../components/Footer"
import {View, StyleSheet} from 'react-native'

function AddItems(){



    return(
        <>
            <Navbar_itens titulo="Scanner"/>
            <View style={styles.container}>
                
            </View>
            <Footer/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})

export default AddItems