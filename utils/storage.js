import { AsyncStorage } from 'react-native';

const saveDataInStorage = (key, data) => {
  try {
    return AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    return Promise.resolve({ error });
  }
};

const loadDataFromStorage = key => {
  try {
    return AsyncStorage.getItem(key);
  } catch (error) {
    return Promise.resolve({ error });
  }
};

export {
  saveDataInStorage,
  loadDataFromStorage
};
