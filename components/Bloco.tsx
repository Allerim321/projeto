import { Feather, Octicons } from '@expo/vector-icons';
import {View, StyleSheet} from "react-native";

function Bloco() {
    return(
    <View style={styles.icons}>
    <Octicons name="three-bars" size={24} color="black" />
    <Feather name="search" size={24} color="black" />
    </View>
)}

const styles = StyleSheet.create({

    icons: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
        borderBottomColor: "#F5F5F5"
    }
})

export default Bloco