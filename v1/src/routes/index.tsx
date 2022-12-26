import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Drinks from '../pages/Drinks';
import Details from '../pages/Details';

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
                name='Drinks'
                component={Drinks}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Details'
                component={Details}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}