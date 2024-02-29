import {Text, View, StyleSheet} from "react-native";
import { Feather, Octicons } from '@expo/vector-icons';
import Bloco from "../components/Bloco";

function Inventario(){
    return(
        <View>
            <View style={styles.icons}>
            <Octicons name="three-bars" size={24} color="black" />
            <Feather name="search" size={24} color="black" />
            </View>
            <Bloco />
        </View>
    )
}

const styles = StyleSheet.create({

    icons: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
        borderColor: "#F5F5F5"
    }
})


export default Inventario