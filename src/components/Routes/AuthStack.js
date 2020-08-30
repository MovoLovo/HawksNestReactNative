import * as React from 'react'
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";

import SignIn from '../Screens/AuthScreens/SignIn'

const Stack = createStackNavigator()

const AuthStack = () => {
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
      headerMode='none'
    >
      <Stack.Screen name='SignIn' component={SignIn}/>
    </Stack.Navigator>
  )
}

export default AuthStack