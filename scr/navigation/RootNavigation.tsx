import {
  NavigatorScreenParams,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';

import { ImageDetailScreen } from '../screen/ImageDetailScreen';
import { BottomTabNavigation, TypeBottomTabsScreenParams } from './BottomTabNavigation';

type ScreenParams = {
  BottomTab: NavigatorScreenParams<TypeBottomTabsScreenParams>;
  ImageDetail: { url: string };
};

const Stack = createNativeStackNavigator<ScreenParams>();

export const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
      <Stack.Screen name="ImageDetail" component={ImageDetailScreen} />
    </Stack.Navigator>
  );
};

export const useRootNavigation = <RouteName extends keyof ScreenParams>() =>
  useNavigation<NativeStackNavigationProp<ScreenParams, RouteName>>();

export const useRootRoute = <RouteName extends keyof ScreenParams>() =>
  useRoute<RouteProp<ScreenParams, RouteName>>();
