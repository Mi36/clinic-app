import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import Item from '../screens/Item';
import ClientScreen from '../screens/ClientScreen';
import ClientListScreen from '../screens/ClientListScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Item: Item,
  Client: ClientScreen,
  ClientList: ClientListScreen,
});

export default createAppContainer(AppNavigator);
