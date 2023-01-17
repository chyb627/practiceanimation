import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Header } from '../components/Header/Header';
import { RemoteImage } from '../components/RemoteImage';

export const ImageDetailScreen = (props) => {
  const navigation = useNavigation();
  const route = useRoute();

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Header>
        <Header.Group>
          <Header.Icon iconName={'arrow-back'} onPress={onPressBack}>
            <Header.Title title="IMAGE DETAIL" />
          </Header.Icon>
        </Header.Group>
      </Header>

      <View style={styles.item}>
        <RemoteImage url={route.params.url} width={width} height={width * 1.5} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
