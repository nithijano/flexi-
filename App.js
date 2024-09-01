
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screen/Home';
import Profile from './screen/Profile';
import Onboard from './screen/Onboard';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        
      <Stack.Screen options={{headerShown: false}} name='Onboarding' component={Onboard}/>
        <Stack.Screen name='Home' component={Home}/>
        
        <Stack.Screen name='Profile' component={Profile}/>
        {/* <Stack.Screen name='Products' component={Products}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

