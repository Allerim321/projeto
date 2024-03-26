import { Link } from 'expo-router'
import { LinkProps } from 'next/link'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface props extends LinkProps {
    texto: string;
};

function Botao({texto, ...props}: props){
    return (
        <Link {...props} style={styles.container} asChild>
            <TouchableOpacity {...props} style={styles.button}>
                <Text style={styles.buttonText}>{texto}</Text>
            </TouchableOpacity>
        </Link>
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