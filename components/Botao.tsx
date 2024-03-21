import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface props extends TouchableOpacityProps {
    texto: string;
};

function Botao({texto, ...props}: props){
    return (
        <View style={styles.container}>
            <TouchableOpacity {...props} style={styles.button}>
                <Text style={styles.buttonText}>{texto}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'baseline',
        marginTop: 20
    },

    button: {
        width: 320,
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
});

export default Botao;