import {View, Text, TextInput, StyleSheet, TextInputProps} from 'react-native'
import { useState } from 'react'

interface InputProps extends TextInputProps{
    texto: string
}

export default function AddInput({texto, ...props}:InputProps){
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
            left: 12,
            zIndex: 1,
            fontSize: 12,
            maxWidth: 110
        },
        input: {
            height: 40,
            borderRadius: 5,
            borderWidth: 1,
            paddingLeft: 35,
            borderColor: hover
        },
        asterisco: {
            color: "red"
        }
    })

    return(
        <View>
            <View style={styles.inputContainer}>
                    <Text style={styles.label}>{texto}<Text style={styles.asterisco}> *</Text></Text>
                <TextInput {...props} style={styles.input} onFocus={() =>{
                setHover('#F39200')
                }} onBlur={() =>{
                setHover('#5d5c5c')
                }}
            />
            </View>
        </View>
    )
}