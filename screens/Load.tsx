import {View, Image, StyleSheet, ActivityIndicator} from "react-native";

function Load(){
    return(
        <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/senai.png")}/>
        <ActivityIndicator size="large" color="white" style={styles.loader}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    loader: {
        marginTop: 20
    },
    image: {
        width: 200,
        height: 52
    }
})

export default Load