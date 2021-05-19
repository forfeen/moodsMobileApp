import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import MoodCreateScreen from './src/screens/MoodCreateScreen';
import MoodDetailScreen from './src/screens/MoodDetailScreen';
import MoodListScreen from './src/screens/MoodListScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SignUp: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    moodListFlow: createStackNavigator({
      moodList: MoodListScreen,
      moodDetail: MoodDetailScreen
    }),
    MoodCreate: MoodCreateScreen,
    Account: AccountScreen,
  })
});

const App = createAppContainer(switchNavigator);
export default () => {
  return(
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};