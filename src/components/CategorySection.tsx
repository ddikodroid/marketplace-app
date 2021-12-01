import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {size} from '../utils/size';
import {CategoryCard} from './CategoryCard';
import {HomeSectionTitle} from './HomeSectionTitle';

export function CategorySection({data}) {
  const renderCategories = ({item}) => (
    <CategoryCard {...item} categoryCardStyle={styles.card} />
  );
  return (
    <View>
      <HomeSectionTitle
        title="Kategori"
        onPressSeeAll={() => console.log('Tes')}
      />
      <FlatList
        horizontal
        data={data.slice(0, 6)}
        renderItem={renderCategories}
        overScrollMode="never"
        contentContainerStyle={styles.sectionContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginLeft: size(12),
    marginVertical: size(8),
  },
  sectionContainer: {
    paddingRight: size(12),
  },
});
