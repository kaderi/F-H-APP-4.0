
import Home from './Screens/Home';
import Reports from './Screens/Reports';
import Profile from './Screens/Profile';
import Data from './Screens/Data';
import Ratio from './Screens/Ratio';
import EditProfile from './Screens/EditProfile';
import EditData from './Screens/EditData';
import Register from './Screens/Register';
import Login from './Screens/Login';
import NewData from './Screens/NewData';
import ResetPassword from './Screens/ResetPassword';
import ResetPasswordEdit from './Screens/ResetPasswordEdit';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.testDb')
import React, { useEffect, useState } from 'react';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

console.disableYellowBox = true;

function App() {


  useEffect(() => {

    db.transaction(function (txn) {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS user_registration(id INTEGER PRIMARY KEY AUTOINCREMENT, cName Text, Address Text, phoneno Text, email Text, password Text, confirmPassword Text, image Text,size Text, numberEmployees Text, superfice Text, registrationDate Text,Question Text, Answer Text)',
        []
      );
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS user_data(id INTEGER PRIMARY KEY AUTOINCREMENT, dDate  Text, sales Text, costOfGoods Text, wages  Text, grossProfit  Text, currentAssets Text, inventory  Text, currentLiabilities Text, receivables Text, longTermLiabilities Text, equity Text, openingProfit Text)',
        []
      );
      txn.executeSql(
        'ALTER TABLE user_data ADD sales varchar',
        []
      );
    });
  }, []);
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: 'purple' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login', headerShown: false }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: 'Register', headerShown: false }}
      />

      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ title: 'ResetPassword', headerShown: false }}
      />


      <Stack.Screen
        name="ResetPasswordEdit"
        component={ResetPasswordEdit}
        options={{ title: 'ResetPasswordEdit', headerShown: false }}
      />


      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Profile', headerShown: false }}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: 'EditProfile', headerShown: false }}
      />

      <Stack.Screen
        name="EditData"
        component={EditData}
        options={{ title: 'EditData', headerShown: false }}
      />
      <Stack.Screen
        name="NewData"
        component={NewData}
        options={{ title: 'NewData', headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={TabBar}
        options={{ title: 'Home' }}
      />

    </Stack.Navigator>
  );
}



function TabBar() {
  return (

    <Tab.Navigator barStyle={{ backgroundColor: 'purple' }} activeColor="white" >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Data" component={Data}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="database" color={color} size={26} />
          ),
        }} />

      <Tab.Screen name="Ratio" component={Ratio}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="aspect-ratio" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Reports" component={Reports}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="text-document" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default App;

