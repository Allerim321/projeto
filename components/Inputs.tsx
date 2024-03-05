import { StyleSheet, Text, View, TextInput } from 'react-native';

type InputProps ={
    texto: string
    placeholder: string
}

function Input({texto, placeholder}:InputProps){
    return(
        <View>
        <Text style={styles.container}>{texto}</Text>
        <TextInput style={styles.input} placeholder={placeholder}/>
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