// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from "./src/screen/HomeScreen";
import CartScreen from './src/screen/CartScreen';
import FavouritesScreen from './src/screen/FavouritesScreen';

const App = () => {
  return <GestureHandlerRootView style={{ flex: 1 }}>
    <StatusBar />
    <FavouritesScreen />
  </GestureHandlerRootView>
}

export default App;