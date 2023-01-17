import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Header } from '../components/Header/Header';
import { Typography } from '../components/Typography';
import { IMAGE_LIST } from '../../constants';
import { PhotoListItem } from '../components/photoListItem';

export const ImageListScreen = () => {
  return (
    <View style={styles.container}>
      <Header>
        <Header.Group>
          <Header.Title title="IMAGE LIST" />
        </Header.Group>
      </Header>

      <View style={styles.item}>
        <FlatList
          style={{ flex: 1 }}
          data={IMAGE_LIST}
          renderItem={({ item }) => {
            return <PhotoListItem url={item} />;
          }}
        />
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
