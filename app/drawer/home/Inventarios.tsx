import {ScrollView, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Feather, Octicons, MaterialCommunityIcons, Foundation, Ionicons } from '@expo/vector-icons';
import Bloco from "../../../components/Bloco";
import { Link } from 'expo-router';

function Inventario(){
    return(
        <>
        <ScrollView>
            <View style={styles.icons}>
            <Octicons name="three-bars" size={24} color="black" />
            <Text>Lista</Text>
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
            <Bloco />
            <Bloco />
            <Bloco />
            <Bloco />
            <Bloco />
        </ScrollView>
        <Link href="/AddItems" asChild>
            <TouchableOpacity>
            <Ionicons style={styles.add} name="add-circle-sharp" size={50} color="red" />
            </TouchableOpacity>
        </Link>
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
        margin: 20,
        marginBottom: 0
    },
    separar_icons: {
        marginHorizontal: 10
    },
    add: {
        position: "absolute",
        right: 10,
        bottom: 60
    }
})

export default Inventario