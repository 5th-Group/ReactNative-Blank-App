import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Navigate from './src/components/Navigation/MainNav/MainNav';
import {constants} from './src/constants/constants';

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
      <StatusBar
        animated={true}
        backgroundColor={constants.primaryColor}
        hidden={false}
      />
      <Navigate></Navigate>
    </NavigationContainer>
  );
};

export default App;
