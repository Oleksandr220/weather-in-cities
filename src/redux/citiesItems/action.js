const addCity = data => ({ data, type: 'ADD_CITY' });
const updateCity = data => ({ data, type: 'UPDATE_CITY' });
const removeCity = data => ({ data, type: 'REMOVE_CITY' });

export { addCity, removeCity, updateCity };
