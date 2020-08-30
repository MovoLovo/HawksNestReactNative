/**
 * @author Spencillian
 * @summary An app front-end that allows students to pre-order food
 * 
 */

import * as React from 'react';

import { AuthProvider } from "./components/Auth/AuthProvider";
import Routes from "./components/Routes/Routes";

const App = () => {
  return(
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  )
}

export default App