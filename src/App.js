/**
 * @author Spencillian
 * @summary An app front-end that allows students to pre-order food
 * 
 */

import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";

import Info from './components/Info';

import NewShake from './components/Shake/NewShake';
import Confirm from './components/Shake/Confirm';

const ShakeStack = createStackNavigator()

const ShakeScreen = () => {
  return(
    <ShakeStack.Navigator
    screenOptions={{
      gestureEnabled: true,
      gestureDirection: 'vertical',
      transitionSpec: {
        open: TransitionSpecs.FadeInFromBottomAndroidSpec,
        close: TransitionSpecs.FadeOutToBottomAndroidSpec,
      }
    }}
    headerMode='none' mode='modal'>
      <ShakeStack.Screen name="NewShake" component={NewShake}/>
      <ShakeStack.Screen name="Confirm" component={Confirm}/>
    </ShakeStack.Navigator>
  )
}

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
        <Stack.Screen name="ShakeScreen" component={ShakeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App