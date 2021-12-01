function loadFromLocalStorage() {
  try {
    const citiesStorageList = localStorage.getItem('cities');
    if (citiesStorageList === null) return undefined;
    return JSON.parse(citiesStorageList);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

export default loadFromLocalStorage;
