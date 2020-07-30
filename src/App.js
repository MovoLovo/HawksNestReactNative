/**
 * @author Spencillian
 * @summary An app front-end that allows students to pre-order food
 * 
 */

import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";

import Info from './components/Info'
import New from './components/New'

const Stack = createStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'vertical',
        transitionSpec: {
          open: TransitionSpecs.FadeInFromBottomAndroidSpec,
          close: TransitionSpecs.FadeOutToBottomAndroidSpec,
        }
      }}
      headerMode='none'>
        <Stack.Screen name="Info" component={Info}/>
        <Stack.Screen name="New" component={New}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App