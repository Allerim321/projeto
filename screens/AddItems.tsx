import AddInput from "../components/AddInputs"
import Navbar_itens from "../components/Navbar_itens"
import Footer from "../components/Footer"
import {View, StyleSheet} from 'react-native'

function AddItems(){



    return(
        <>
            <Navbar_itens titulo="Cadastro de itens"/>
            <View style={styles.container}>
                <AddInput texto="N° Inventário"/>
                <AddInput texto="Descrição"/>
                <AddInput texto="Responsável"/>
                <AddInput texto="Local"/>
                <AddInput texto="Data de registro"/>
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