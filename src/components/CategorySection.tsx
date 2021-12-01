import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {size} from '../utils/size';
import {CategoryCard} from './CategoryCard';
import {HomeSectionTitle} from './HomeSectionTitle';

export function CategorySection({data}) {
  const renderCategories = ({item}) => <CategoryCard {...item} />;
  return (
    <>
      <HomeSectionTitle
        title="Kategori"
        onPressSeeAll={() => console.log('Tes')}
      />
      <FlatList
        horizontal
        data={data.slice(0, 8)}
        renderItem={renderCategories}
        overScrollMode="never"
      />
    </>
  );
}

const styles = StyleSheet.create({});
