import * as React from "react";
import { GoogleSignin, statusCodes, } from "@react-native-community/google-signin";
import PropTypes from 'prop-types';

export const AuthContext = React.createContext({})

export const AuthProvider = ({ children }) => {
  const [signinStatus, setSigninStatus] = React.useState(false)

  const orgAuth = async (info) => {
    const org = info?.user?.email.split('@')[1]
    if(org === `avonoldfarms.com`){
      setSigninStatus(true)
      console.log('Signed in');
    }else if(org){
      alert('Please use a Avon Old Farms School email')
      signOut()
    }else{
      console.log(`Not Logged In: ${info}`);
    }
  }

  const _signIn = async () => {
    try{
      await GoogleSignin.hasPlayServices()
      const info = await GoogleSignin.signIn()
      await orgAuth(info)
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
      await orgAuth(info)
    } catch (error) {
      if(error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
        alert('Play service not available')
      }else if(error.code === statusCodes.SIGN_IN_REQUIRED){
        console.log('Failed silent signin attempt');
      }else{
        console.log(error)
      }
    }
  }

  const signOut = async () => {
    try{
      await GoogleSignin.revokeAccess()
      await GoogleSignin.signOut()
      setSigninStatus(false)
    } catch (error) {
      if(error.code === statusCodes.SIGN_IN_REQUIRED){
        alert('Sign In Required')
      }else{
        console.error(error);
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signinStatus,
        setSigninStatus,
        _signIn,
        _signInSilently,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.any
}