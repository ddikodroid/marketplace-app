import {useInfiniteQuery, useQuery} from 'react-query';
import {
  fetchBanners,
  fetchProducts,
  fetchProduct,
  fetchCategories,
} from './apis';

export const useBanners = () => useQuery('banners', fetchBanners);
export const useCategories = () => useQuery('categories', fetchCategories);
export const useProducts = () => useQuery('products', fetchProduct);
export const useInfiniteProducts = () =>
  useInfiniteQuery('infiniteProducts', fetchProducts);
