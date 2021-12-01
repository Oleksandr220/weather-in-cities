function saveToLocalStorage(state) {
  try {
    const citiesStorageList = JSON.stringify(state);
    localStorage.setItem('cities', citiesStorageList);
  } catch (e) {
    console.warn(e);
  }
}

export default saveToLocalStorage;
