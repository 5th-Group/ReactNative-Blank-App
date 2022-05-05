import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {PersistGate} from 'redux-persist/integration/react';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

// Components
import Auth from './src/screens/Auth/Auth';

// CONST
import {COLORS} from './src/constants/constants';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store/store';
import {injectStore} from './src/api/apiClientPost';
injectStore(store);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar
            animated={true}
            backgroundColor={COLORS.primary}
            hidden={true}
          />
          <Auth></Auth>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
