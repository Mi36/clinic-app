import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

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
    Qustions: createStackNavigator({
      Home: HomeScreen,
      Item: Item,
    }),
    Clients: createStackNavigator({
      ClientList: ClientListScreen,
      ClientAnswers: clientAnswersScreen,
    }),
  }),
});

export default createAppContainer(switchNavigator);
