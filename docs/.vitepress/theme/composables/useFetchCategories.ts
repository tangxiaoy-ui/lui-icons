import { ref } from 'vue';
import iconCategories from '../../data/iconCategoriesIndex.json';

const useFetchCategories = () => {
  return {
    data: ref(iconCategories),
    isFinished: ref(true),
    error: ref(null),
    statusCode: ref(200),
    execute: () => {},
  };
};

export default useFetchCategories;
