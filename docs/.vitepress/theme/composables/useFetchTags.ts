import { ref } from 'vue';
import iconTags from '../../data/iconTagsIndex.json';

const useFetchTags = () => {
  return {
    data: ref(iconTags),
    isFinished: ref(true),
    error: ref(null),
    statusCode: ref(200),
    execute: () => {},
  };
};

export default useFetchTags;
