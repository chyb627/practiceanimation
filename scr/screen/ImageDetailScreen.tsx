import React, { useCallback } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Button } from '../components/Button';
import { Header } from '../components/Header/Header';
import { Icon } from '../components/Icons';
import { RemoteImage } from '../components/RemoteImage';
import { Typography } from '../components/Typography';
import { useRootNavigation, useRootRoute } from '../navigation/RootNavigation';

export const ImageDetailScreen: React.FC = (props) => {
  const navigation = useRootNavigation<'ImageDetail'>();
  const route = useRootRoute<'ImageDetail'>();

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const { width } = useWindowDimensions();

  const onPressDownload = useCallback(() => {
    console.log('download');
  }, []);

  return (
    <View style={styles.container}>
      <Header>
        <Header.Group>
          <Header.Icon iconName={'arrow-back'} onPress={onPressBack} />
          <Header.Title title="IMAGE DETAIL" />
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
            <Typography fontSize={14} color={'white'}>
              DOWNLOAD
            </Typography>
            <Icon name="download-outline" size={20} color="white" />
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
