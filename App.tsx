import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import RecSenha from "./screens/RecSenha";
import Load from "./screens/Load";
import Inventario from "./screens/Inventarios";
import AddItems from "./screens/AddItems";
import Descrição from "./screens/Descricao";
import Scanner from "./screens/Scanner";
import Editar from "./screens/Editar";


const App = () => {
  return(
    <Editar />
  )
}

const Stack = createNativeStackNavigator();

export default App