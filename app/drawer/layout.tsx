import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { ScreenStackHeaderSearchBarView } from 'react-native-screens';

export default function DrawerLayout(){
        return <Drawer screenOptions={{
                headerLeft: () =>(
                        <DrawerToggleButton />
                ),
                headerRight: () =>(
                        ScreenStackHeaderSearchBarView ({
                                placeholder: "Pesquisar"
                        })
                )
        }}>
                <Drawer.Screen name="Home" />
        </Drawer>
}