import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Button } from '../components/Button';
import { Header } from '../components/Header/Header';
import { Icon } from '../components/Icons';
import { RemoteImage } from '../components/RemoteImage';
import { Typography } from '../components/Typography';

export const ImageDetailScreen = (props) => {
  const navigation = useNavigation();
  const route = useRoute();

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);
  const { width } = useWindowDimensions();

  const onPressDownload = useCallback(() => {
    console.log('download');
  }, []);

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

      <Button onPress={onPressDownload}>
        <View style={{ paddingBottom: 24, backgroundColor: 'black' }}>
          <View
            style={{
              height: 52,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Typography color={'white'}>DOWNLOAD</Typography>
            <Icon name="download" size={24} color="white" />
          </View>
        </View>
      </Button>
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
