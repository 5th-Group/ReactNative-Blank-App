import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Navigate from './src/components/Navigation/MainNav';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={true} />
      <Navigate></Navigate>
    </NavigationContainer>
  );
};

export default App;
