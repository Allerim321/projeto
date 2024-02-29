import {ScrollView, View, StyleSheet} from "react-native";
import { Feather, Octicons, MaterialCommunityIcons, Foundation, Ionicons } from '@expo/vector-icons';
import Bloco from "../components/Bloco";

function Inventario(){
    return(
        <>
        <ScrollView>
            <View style={styles.icons}>
            <Octicons name="three-bars" size={24} color="black" />
            <Feather name="search" size={24} color="black" />
            </View>
            <Bloco />
            <Bloco />
            <Bloco />
            <Bloco />
            <Bloco />
            <Bloco />
            <Bloco />
            <Bloco />
            <Bloco />
            <Bloco />
            <Bloco />
            <Ionicons style={styles.add} name="add-circle-sharp" size={50} color="red" />
        </ScrollView>
        <View style={styles.footer}>
            <View style={styles.icons_footer}>
                <MaterialCommunityIcons style={styles.separar_icons} name="camera-flip-outline" size={24} color="white" />
                <Foundation style={styles.separar_icons} name="list-number" size={24} color="white" />
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({

    icons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        padding: 10,
        borderBottomColor: "#F5F5F5",
        borderBottomWidth: 2
    },
    footer: {
        backgroundColor: "red",
        height: 60
    },
    icons_footer: {
        justifyContent: "center",
        flexDirection: "row",
        margin: 20
    },
    separar_icons: {
        marginHorizontal: 10
    },
    add: {
        position: "absolute",
        right: 10,
        bottom: 200
    }
})

export default Inventario