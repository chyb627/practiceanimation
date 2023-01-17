import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { TypeIconName } from '../components/Icons';
import { TabIcon } from '../components/TabIcon';
import { FavoriteImageListScreen } from '../screen/FavoriteImageListScreen';
import { ImageListScreen } from '../screen/ImageListScreen';

export type TypeBottomTabsScreenParams = {
  ImageList: undefined;
  FavoriteImageList: undefined;
};

const Tabs = createBottomTabNavigator<TypeBottomTabsScreenParams>();

export const BottomTabNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const getIconName = (): TypeIconName => {
            if (route.name == 'ImageList') {
              return 'home';
            }

            // if (route.name === 'FavoriteImageList') {
            return 'star';
            // }
          };
          const routeIconName = getIconName();
          return <TabIcon iconName={routeIconName} iconColor={color} />;
        },
      })}>
      <Tabs.Screen name="ImageList" component={ImageListScreen}></Tabs.Screen>
      <Tabs.Screen name="FavoriteImageList" component={FavoriteImageListScreen}></Tabs.Screen>
    </Tabs.Navigator>
  );
};

export const useBotomTabNavigation = <RouteName extends keyof TypeBottomTabsScreenParams>() =>
  useNavigation<BottomTabNavigationProp<TypeBottomTabsScreenParams, RouteName>>();

export const useBottomTabRoute = <RouteName extends keyof TypeBottomTabsScreenParams>() =>
  useRoute<RouteProp<TypeBottomTabsScreenParams, RouteName>>();
