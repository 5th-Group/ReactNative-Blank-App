import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

// Components
import Navigate from './src/components/Navigation/MainNav/MainNav';

// CONST
import {COLORS} from './src/constants/constants';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor={COLORS.primary}
          hidden={false}
        />
        <Navigate></Navigate>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
