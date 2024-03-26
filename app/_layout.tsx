import { Stack } from 'expo-router/stack';

export default function Layout() {
    return (<Stack screenOptions={{
            headerTransparent: true,
            headerTintColor: "white",
            headerTitle: "",
            statusBarStyle: "light",
            statusBarColor: ""
        }}>
        <Stack.Screen name='index' options={{
            statusBarColor: "black"
        }}/>
        <Stack.Screen name='Cadastro' options={{
            statusBarColor: "#FF0000"
        }}/>
        <Stack.Screen name='RecSenha' options={{
            statusBarColor: "#011E83"
        }}/>
        <Stack.Screen name='drawer' options={{
            headerShown: false
        }}/>
        </Stack>
    )
}
