import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Recipe from '../pages/Recipe';
import Drink from '../pages/Drink';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Recipe'
                component={Recipe}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Drink'
                component={Drink}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}