import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Typography } from '../components/Typography';

export const FavoriteImageListScreen = () => {
  return (
    <View style={styles.container}>
      <Typography fontSize={20}>FAVORITE IMAGE</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
