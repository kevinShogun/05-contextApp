import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottonTabsNavigator} from './presentation/navigators/BottonTabsNavigators';

export const Main = () => {
  return (
    <NavigationContainer>
      <BottonTabsNavigator />
    </NavigationContainer>
  );
};
