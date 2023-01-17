import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Typography } from '../components/Typography';

export const ImageListScreen = () => {
  return (
    <View style={styles.container}>
      <Typography fontSize={20}>Text List</Typography>
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
