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

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
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

export default createAppContainer(switchNavigator);