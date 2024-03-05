import { StyleSheet, Text, View, TextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps{
    texto: string
}

function Input({texto, placeholder, ...props}:InputProps){
    return(
        <View>
        <Text style={styles.container}>{texto}</Text>
        <TextInput {...props} style={styles.input} placeholder={placeholder}/>
        </View>
)}

const styles = StyleSheet.create({
    input: {
        margin: 20,
        marginTop: 10,
        width: 320,
        borderBottomColor: '#CDCDCD',
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#F5F5F5'

      },
      container:{
        margin: 20,
        marginBottom: 0,
        fontSize: 16
      },
})

export default Input