const BASE_URL = 'https://swapi.dev/api/';
const resource = 'people/';

export const getData = async (url?: string) => {
  try {
    const uri = url ? url : '';
    const res = await fetch(`${BASE_URL}${resource}${uri}`, {
      method: 'GET',
      headers: {
        Accept: ' application/json',
        'Content-Type': 'application/json',
      },
    });
    const response = await res.json();
    return response;
  } catch (error) {
    throw new Error(`Unable to connect, please try again`);
  }
};
