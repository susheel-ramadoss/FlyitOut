
import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
// import {
//   NavigationContainer,
//   DefaultTheme as NavigationDefaultTheme,
//   DarkTheme as NavigationDarkTheme
// } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import {
//   Provider as PaperProvider,
//   DefaultTheme as PaperDefaultTheme,
//   DarkTheme as PaperDarkTheme
// } from 'react-native-paper';

// import { DrawerContent } from './screens/DrawerContent';

import MyStack from './Navigation/Navigation';

// import { AuthContext } from './components/context';

// import RootStackScreen from './screens/RootStackScreen';

// import AsyncStorage from '@react-native-community/async-storage';

// const Drawer = createDrawerNavigator();
const App = () => {
  return (
    // <AuthContext.Provider value={authContext}>
    // <NavigationContainer theme={theme}>
    //   {/* { loginState.userToken === null ? (
    //     <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
    //     </Drawer.Navigator>
    //   )
    // : */}
    // {/* } */}
    // </NavigationContainer>
    // </AuthContext.Provider>
    <MyStack />
  );
};

export default App;
