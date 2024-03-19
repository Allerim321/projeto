import {View, Text, TextInput, StyleSheet, TextInputProps} from 'react-native'
import { useState } from 'react'

interface InputProps extends TextInputProps{
    texto: string,
    conteudo: string
}

export default function AddInput({texto, conteudo, ...props}:InputProps){
    const [hover, setHover] = useState('#5d5c5c')

    const styles = StyleSheet.create({
        inputContainer: {
            position: 'relative',
            marginTop: 30,
        },
        label: {
            position: 'absolute',
            backgroundColor: 'white',
            paddingHorizontal: 8,
            top: -6,
            left: 10,
            zIndex: 1,
            fontSize: 12,
            maxWidth: 110
        },
        input: {
            height: 40,
            borderRadius: 5,
            borderWidth: 1,
            paddingLeft: 18,
            borderColor: hover
        },
        asterisco: {
            color: "red"
        },
        conteudo: {
            color: "#595959",
            justifyContent: "flex-end"
        }
    })

    return(
        <View>
            <View style={styles.inputContainer}>
                    <Text style={styles.label}>{texto}<Text style={styles.asterisco}> *</Text></Text>
                <TextInput {...props} style={styles.input} placeholder={conteudo} onFocus={() =>{
                setHover('#F39200')
                }} onBlur={() =>{
                setHover('#5d5c5c')
                }}
            />
            </View>
        </View>
    )
}