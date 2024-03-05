import Input from "../components/Inputs"
import Navbar_itens from "../components/Navbar_itens"
import Footer from "../components/Footer"
import {View, Text, TextInput, StyleSheet} from 'react-native'

function AddItems(){
    return(
        <View>
            <Navbar_itens/>
            
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nº Inventário *</Text>
            <TextInput
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Descrição *</Text>
            <TextInput
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Local * </Text>
            <TextInput
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Responsável *</Text>
            <TextInput
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Data de Registro *</Text>
            <TextInput
              style={styles.input}
            />
          </View>
        </View>
            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
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
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 35,
    }
})

export default AddItems