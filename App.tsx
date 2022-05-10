import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#FA8021" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}
