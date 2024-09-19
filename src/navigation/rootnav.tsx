import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import bottomTab from './bottomtab';
import {Appnavigation} from './appnavigation';
import {Productdetails} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {RootNavigationProps, AppNavigationProps} from './types';

const Stack = createNativeStackNavigator<
  AppNavigationProps & RootNavigationProps
>();

const RootNavigationScreen = () => {
  const navigationRef = useNavigationContainerRef<
    AppNavigationProps & RootNavigationProps
  >();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={'BottomTab'}
        screenOptions={{
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          component={Appnavigation}
          name={'BottomTab'}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={Productdetails}
          name={'Productdetails'}
          options={{
            headerBackTitleVisible: false,
            headerShown: true,
            title: 'Product Details',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigationScreen;
