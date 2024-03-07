import {View, StyleSheet} from 'react-native'
import { MaterialCommunityIcons, Foundation } from '@expo/vector-icons';


function Footer(){
    return(
    <View style={styles.footer}>
    <View style={styles.icons_footer}>
        <MaterialCommunityIcons style={styles.separar_icons} name="camera-flip-outline" size={24} color="#595959" />
        <Foundation style={styles.separar_icons} name="list-number" size={24} color="#595959" />
    </View>
    </View>
)}

const styles = StyleSheet.create({
    footer: {
        borderTopColor: "#CBCBCB",
        borderTopWidth: 2,
        height: 60,
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
})

export default Footer

