import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, Icon} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {toggleLoading} from '../actions/questionAction';
import AdminLogin from '../screens/AdminLogin';
import AnswersScreen from '../screens/AnswersScreen';
import ClientLogin from '../screens/clientScreens/ClientLogin';
import ClientScreen from '../screens/clientScreens/ClientScreen';
import HomeScreen from '../screens/HomeScreen';
import InitialScreen from '../screens/InitialScreen';
import ListScreen from '../screens/ListScreen';
import QuestionUpdateScreen from '../screens/QuestionUpdateScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const dispatch = useDispatch();
  const createBottomTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Admin"
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
        <Stack.Screen
          name="Initial"
          component={InitialScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Admin Login" component={AdminLogin} />
        <Stack.Screen name="Client Login" component={ClientLogin} />
        <Stack.Screen
          name="AdminScreen"
          children={createBottomTabs}
          options={({navigation}) => ({
            title: 'Admin',
            headerLeft: null,
            headerRight: () => (
              <Button
                onPress={() => {
                  dispatch(toggleLoading());
                  navigation.navigate('Initial');
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
            headerLeft: null,
            headerRight: () => (
              <Button
                onPress={() => {
                  navigation.navigate('Initial');
                }}>
                Logout
              </Button>
            ),
          })}
        />
        <Stack.Screen name="Update" component={QuestionUpdateScreen} />
        <Stack.Screen
          name="ClientAnswers"
          component={AnswersScreen}
          options={() => ({
            title: 'Client Answers',
          })}
        />
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
