import React from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {CategoryCard} from '../components';
import {useCategories} from '../services/queries';
import {size} from '../utils/size';

export function AllCategoriesScreen() {
  const {data: categories} = useCategories();

  const renderCategories = ({item}) => (
    <CategoryCard {...item} categoryCardStyle={styles.card} />
  );

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={categories.data}
        renderItem={renderCategories}
        numColumns={3}
        contentContainerStyle={styles.contentContainer}
      />
      {/* {categories.data.map(item => (
        <CategoryCard
          {...item}
          key={item.category_id}
          categoryCardStyle={{
            width: size(96),
            height: size(96),
            backgroundColor: 'red',
          }}
        />
      ))} */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  card: {
    width: size(96),
    height: size(96),
    margin: size(8),
  },
  contentContainer: {
    paddingTop: size(12),
  },
});
