import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes, } from "@react-native-community/google-signin";

const SignIn = () => {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [userInfo, setUserInfo] = React.useState([])

  React.useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId: '',
      offlineAccess: false,
    })
  })

  const _signIn = async () => {
    try{
      await GoogleSignin.hasPlayServices()
      const {accessToken, idToken} = await GoogleSignin.signIn()
      setLoggedIn(true)
    } catch (error) {
      if(error.code === statusCodes.SIGN_IN_CANCELLED){
        alert('Cancelled')
      }else if(error.code === statusCodes.IN_PROGRESS){
        alert('In Progress')
      }else if(error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
        alert('Play service not available')
      }else{
        alert('Bro you done fucked up')
      }
    }
  }

  const signOut = async () => {
    try{
      await GoogleSignin.revokeAccess()
      await GoogleSignin.signOut()
      setLoggedIn(false)
      setUserInfo([])
    } catch (error) {
      console.error(error)
    }
  }

  // TODO: Configure Native Projects
  return(
    <View>
      <GoogleSigninButton
        style={s.signInButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={_signIn}
      />
    </View>
  )
}

const s = StyleSheet.create({
  signInButton: {
    width: 192,
    height: 48,
  }
})

export default SignIn