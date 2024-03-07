import { StyleSheet, Text, View, TextInput, TextInputProps } from 'react-native';
import { useState } from 'react';

interface InputProps extends TextInputProps{
    texto: string
}

function Input({texto, placeholder, ...props}:InputProps){
const [hover, setHover] = useState('#f5f5f5')

const styles = StyleSheet.create({
    input: {
        margin: 20,
        marginTop: 10,
        width: 320,
        borderBottomColor: '#CDCDCD',
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderColor: hover
      },
      container:{
        margin: 20,
        marginBottom: 0,
        fontSize: 16
      },
})

    return(
        <View>
        <Text style={styles.container}>{texto}</Text>
        <TextInput {...props} style={styles.input} placeholder={placeholder} onFocus={() =>{
          setHover('#F39200')
        }} onBlur={() =>{
          setHover('#F5F5F5')
        }} />
        </View>
)}



export default Input