
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Product from '../screens/Product';
import NavigationsStrings from './NavigationsStrings';
import BottomStack from './BottomStack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen
        name={NavigationsStrings.BOTTOM_STACK}
        component={BottomStack}></Stack.Screen>
      <Stack.Screen
        name={NavigationsStrings.PRODUCT}
        component={Product}></Stack.Screen>
    </Stack.Navigator>
  );
};


export default AppStack;
