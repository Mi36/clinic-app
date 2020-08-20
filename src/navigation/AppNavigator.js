import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
import Item from '../screens/Item';
import ClientScreen from '../screens/ClientScreen';
import ClientListScreen from '../screens/ClientListScreen';
import Initial from '../screens/Initial';
import clientAnswersScreen from '../screens/clientAnswersScreen';

const AppNavigator = createStackNavigator({
  Initial: Initial,
  Home: HomeScreen,
  Item: Item,
  Client: ClientScreen,
});
const clientNavigator = createStackNavigator({
  ClientList: ClientListScreen,
  ClientAnswers: clientAnswersScreen,
});

const TabNavigator = createBottomTabNavigator({
  Home: AppNavigator,
  Clients: clientNavigator,
});

export default createAppContainer(TabNavigator);
