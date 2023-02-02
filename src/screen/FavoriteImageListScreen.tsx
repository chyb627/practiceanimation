import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header/Header';
import { PhotoListItem } from '../components/photoListItem';
import { RootState } from '../store/store';

export const FavoriteImageListScreen = () => {
  const imageList = useSelector((state: RootState) => state.favorite.favoriteList);
  console.log('imageList::', imageList);

  return (
    <View style={styles.container}>
      <Header>
        <Header.Title title="FAVORITE" />
      </Header>

      <FlatList
        style={{ flex: 1 }}
        data={imageList}
        renderItem={({ item }) => {
          return <PhotoListItem url={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
