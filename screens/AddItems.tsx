import Input from "../components/Inputs"
import Footer from "../components/Footer"
import {View, Text, StyleSheet} from 'react-native'

function AddItems(){
    return(
        <View>
            <Input texto="" placeholder=""/>
            <Footer/>
        </View>
    )
}

export default AddItems