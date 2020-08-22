import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from '@ui-kitten/components';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@ui-kitten/components';
import HomeScreen from '../screens/HomeScreen';
import QuestionUpdateScreen from '../screens/QuestionUpdateScreen';
import ClientScreen from '../screens/clientScreens/ClientScreen';
import ListScreen from '../screens/ListScreen';
import InitialScreen from '../screens/InitialScreen';
import AnswersScreen from '../screens/AnswersScreen';
import AdminLogin from '../screens/AdminLogin';
import ClientLogin from '../screens/clientScreens/ClientLogin';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const createBottomTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Qustions"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Questions',
            tabBarIcon: () => (
              <Icon fill="#8F9BB3" name="heart" style={styles.icon} />
            ),
          }}
        />
        <Tab.Screen
          name="Clients"
          component={ListScreen}
          options={{
            tabBarLabel: 'Clients',
            tabBarIcon: () => (
              <Icon fill="#8F9BB3" name="star" style={styles.icon} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="Admin Login" component={AdminLogin} />
        <Stack.Screen name="Client Login" component={ClientLogin} />
        <Stack.Screen
          name="AdminScreen"
          children={createBottomTabs}
          options={({navigation}) => ({
            title: 'Questions',
            headerRight: () => (
              <Button
                onPress={() => {
                  navigation.navigate('Admin Login');
                }}>
                Logout
              </Button>
            ),
          })}
        />
        <Stack.Screen
          name="ClientScreen"
          component={ClientScreen}
          options={({navigation}) => ({
            title: 'Submit Your Answer',
            headerRight: () => (
              <Button
                onPress={() => {
                  navigation.navigate('Client Login');
                }}>
                Logout
              </Button>
            ),
          })}
        />
        <Stack.Screen name="Update" component={QuestionUpdateScreen} />
        <Stack.Screen name="ClientAnswers" component={AnswersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 24,
  },
});

export default AppNavigator;

// const switchNavigator = createSwitchNavigator({
//   loginFlow: createStackNavigator({
//     Initial: InitialScreen,
//     Admin: AdminLogin,
//     ClientLogin: ClientLogin,
//   }),
//   clientFlow: createStackNavigator({
//     Client: ClientScreen,
//   }),
//   adminFlow: createBottomTabNavigator({
//     Qustions: {
//       screen: createStackNavigator({
//         Home: HomeScreen,
//         Update: QuestionEditScreen,
//       }),
//       navigationOptions: {
//         tabBarLabel: 'Home',
//         tabBarIcon: ({tintColor}) => (
//           <Icon fill="#8F9BB3" name="star" style={{height: 25, width: 24}} />
//         ),
//       },
//     },
//     Clients: {
//       screen: createStackNavigator({
//         ClientList: ListScreen,
//         ClientAnswers: AnswersScreen,
//       }),
//       navigationOptions: {
//         tabBarLabel: 'Clients',
//         tabBarIcon: ({tintColor}) => (
//           <Icon fill="#8F9BB3" name="heart" style={{height: 25, width: 24}} />
//         ),
//       },
//     },
//   }),
// });

// export default createAppContainer(switchNavigator);
