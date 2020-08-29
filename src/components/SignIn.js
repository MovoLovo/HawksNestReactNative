import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin, GoogleSigninButton, statusCodes, } from "@react-native-community/google-signin";

const SignIn = () => {
  const nav = useNavigation()
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [userInfo, setUserInfo] = React.useState({})

  React.useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
    })
    _signInSilently()
  }, [])

  React.useEffect(() => {
    console.log(userInfo);
  })

  const _signIn = async () => {
    try{
      await GoogleSignin.hasPlayServices()
      const info = await GoogleSignin.signIn()
      orgAuth(info)
    } catch (error) {
      if(error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
        alert(`Google Play Service is Unavailable`)
      }else if(error.code === statusCodes.SIGN_IN_CANCELLED){
        console.log(`Status > Login : Cancelled`)
      }else{
        alert('Bro you done fucked up')
        console.log(error)
      }
    }
  }

  const _signInSilently = async () => {
    try{
      await GoogleSignin.hasPlayServices()
      const info = await GoogleSignin.signInSilently()
      orgAuth(info)
    } catch (error) {
      if(error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
        alert('Play service not available')
      }else{
        console.log(error)
      }
    }
  }

  const signOut = async () => {
    try{
      await GoogleSignin.revokeAccess()
      await GoogleSignin.signOut()
      setLoggedIn(false)
      setUserInfo({})
    } catch (error) {
      if(error.code === statusCodes.SIGN_IN_REQUIRED){
        alert('Sign In Required')
      }else{
        console.error(error);
      }
    }
  }

  const orgAuth = (info) => {
    const org = info?.user?.email.split('@')[1]
    if(org === `avonoldfarms.com`){
      setLoggedIn(true)
      setUserInfo(info)
      // nav.navigate('Info')
    }else if(org){
      alert('Please use a Avon Old Farms School email')
      signOut()
    }else{
      console.log(`Not Logged In: ${info}`);
    }
  }

  return(
    <View style={s.container}>
      <View style={s.header}>

      </View>
      <GoogleSigninButton
        style={s.signInButton}
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Dark}
        onPress={_signIn}
      />
      <Button
        title="Log Out"
        onPress={signOut}
      />
    </View>
  )
}

const s = StyleSheet.create({
  container: {

  },
  signInButton: {

  },
  header: {
    
  }
})

export default SignIn