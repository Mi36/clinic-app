import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import {Icon} from '@ui-kitten/components';
import HomeScreen from '../screens/HomeScreen';
import QuestionEditScreen from '../screens/QuestionEditScreen';
import ClientScreen from '../screens/clientScreens/ClientScreen';
import ListScreen from '../screens/ListScreen';
import InitialScreen from '../screens/InitialScreen';
import AnswersScreen from '../screens/AnswersScreen';
import AdminLogin from '../screens/AdminLogin';
import ClientLogin from '../screens/clientScreens/ClientLogin';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Initial: InitialScreen,
    Admin: AdminLogin,
    ClientLogin: ClientLogin,
  }),
  clientFlow: createStackNavigator({
    Client: ClientScreen,
  }),
  adminFlow: createBottomTabNavigator({
    Qustions: {
      screen: createStackNavigator({
        Home: HomeScreen,
        Update: QuestionEditScreen,
      }),
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon fill="#8F9BB3" name="star" style={{height: 25, width: 24}} />
        ),
      },
    },
    Clients: {
      screen: createStackNavigator({
        ClientList: ListScreen,
        ClientAnswers: AnswersScreen,
      }),
      navigationOptions: {
        tabBarLabel: 'Clients',
        tabBarIcon: ({tintColor}) => (
          <Icon fill="#8F9BB3" name="heart" style={{height: 25, width: 24}} />
        ),
      },
    },
  }),
});

export default createAppContainer(switchNavigator);
