import React from 'react';
import bottomTab from './bottomtab';
import {Productdetails} from '@/screens'
import type {AppNavigationProps, RootNavigationProps} from './types';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<RootNavigationProps & AppNavigationProps>();

export const Appnavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={bottomTab}
        name={'BottomTab'}
        options={{
          headerBackTitleVisible: false,
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

    </Stack.Navigator>
  );
};
