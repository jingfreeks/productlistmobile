import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Product} from '@/screens';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import type {RootNavigationProps,AppNavigationProps} from './types';
import {colors} from '@/service/themes';
const Tab = createBottomTabNavigator<RootNavigationProps&AppNavigationProps>();

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Product"
      screenOptions={{
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.black,
      }}>
      <Tab.Screen
        component={Product}
        name={"Product"}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <FontAwesome color={colors.gray} name={'home'} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabScreen;
