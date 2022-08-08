import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  // add splash screen
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
    </View>
  );
};
export default App;
