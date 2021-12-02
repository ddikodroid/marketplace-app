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
  useInfiniteQuery(
    'allProducts',
    ({pageParam = 1}) => fetchProducts(pageParam),
    {
      select: products => {
        const allProducts = [];
        products.pages
          ? products.pages.forEach(result => allProducts.push(result.data))
          : null;

        const flattenedAllProducts = allProducts.flat();
        return flattenedAllProducts;
      },
      getNextPageParam: lastPage => {
        const {total_page: totalPages, next} = lastPage.meta;
        return next !== totalPages ? next : undefined;
      },
    },
  );
