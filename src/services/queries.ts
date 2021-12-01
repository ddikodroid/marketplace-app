import {useQuery} from 'react-query';
import {fetchBanners} from './apis';
import {fetchCategories} from './apis';
export const useBanners = () => useQuery('banners', fetchBanners);
export const useCategories = () => useQuery('categories', fetchCategories);
