import React from 'react'
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack'

import Info from '../Screens/Main/Info'
import NewShake from '../Screens/Shake/NewShake'
import Confirm from '../Screens/Shake/Confirm'
import Settings from '../Screens/Main/Settings'

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

const HomeStack = () => {
  return (
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
      <Stack.Screen name='Settings' component={Settings}/>
    </Stack.Navigator>
  )
}

export default HomeStack