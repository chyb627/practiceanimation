import React from 'react';
import { StyleSheet } from 'react-native';
import { Typography } from '../components/Typography';

export const ImageDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Typography fontSize={20}>Text Detail</Typography>
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
