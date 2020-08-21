import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import {Icon} from '@ui-kitten/components';
import HomeScreen from '../screens/HomeScreen';
import Item from '../screens/Item';
import ClientScreen from '../screens/clientScreens/ClientScreen';
import ClientListScreen from '../screens/ClientListScreen';
import Initial from '../screens/Initial';
import clientAnswersScreen from '../screens/clientAnswersScreen';
import AdminLogin from '../screens/AdminLogin';
import ClientLogin from '../screens/ClientLogin';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Initial: Initial,
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
        Item: Item,
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
        ClientList: ClientListScreen,
        ClientAnswers: clientAnswersScreen,
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
