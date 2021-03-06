import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../containers/Auth/LoginScreen';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../config';

Ionicons.loadFont();

const Stack = createNativeStackNavigator;
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function SettingsScreen2() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
function SettingsScreen3() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
function SettingsScreen4() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
const Hello = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: Colors.royalblue,
          tabBarInactiveTintColor: Colors.gray,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'search' : 'search'}
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: Colors.royalblue,
          tabBarInactiveTintColor: Colors.gray,
        }}
      />
      <Tab.Screen
        name="SettingsScreen2"
        component={SettingsScreen2}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: Colors.royalblue,
          tabBarInactiveTintColor: Colors.gray,
        }}
      />
      <Tab.Screen
        name="SettingsScreen3"
        component={SettingsScreen3}
        options={{
          tabBarLabel: 'Offer',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'pricetag' : 'pricetag-outline'}
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: Colors.royalblue,
          tabBarInactiveTintColor: Colors.gray,
        }}
      />
      <Tab.Screen
        name="SettingsScreen4"
        component={SettingsScreen4}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: Colors.royalblue,
          tabBarInactiveTintColor: Colors.gray,
        }}
      />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Hello" component={Hello} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default Router;
