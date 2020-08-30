import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../Auth/AuthProvider";

import HomeStack from './HomeStack'
import AuthStack from './AuthStack'

const Routes = () => {
  const { signinStatus } = React.useContext(AuthContext)

  return (
    <NavigationContainer>
      {signinStatus ? <HomeStack/> : <AuthStack/>}
    </NavigationContainer>
  )
}

export default Routes