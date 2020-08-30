import * as React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from "@react-native-community/google-signin";

import { AuthContext } from "../../Auth/AuthProvider";

const SignIn = () => {
  const { _signInSilently, _signIn } = React.useContext(AuthContext)

  React.useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
    })
    _signInSilently()
  }, [])

  return(
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.headerText}>Welcome to the Hawks Nest Pre-Order App</Text>
      </View>
      <View style={s.body}>
        <GoogleSigninButton
          style={s.signInButton}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={_signIn}
        />
        <Text style={s.tip}>Please sign in with an AOF email address</Text>
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'rgba(231,76,60,1)',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    height: Dimensions.get("window").height * .35,
    width: Dimensions.get("window").width * .5,
    alignSelf: 'center',
    transform: [
      {scaleX: 2}
    ],
  },
  headerText: {
    fontSize: Dimensions.get("window").width * .09,
    textAlign: 'center',
    alignSelf: 'center',
    color: 'white',
    paddingBottom: 25,
    width: Dimensions.get("window").width * .7,
    transform: [
      {scaleX: .5}
    ]
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 150
  },
  signInButton: {
    alignSelf: 'center',
  },
  tip: {
    paddingTop: 20,
    alignSelf: 'center',
    color: 'rgba(0,0,0,0.6)',
  }
})

export default SignIn