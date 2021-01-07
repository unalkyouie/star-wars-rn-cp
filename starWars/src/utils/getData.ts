const BASE_URL = 'https://swapi.dev/api/';
const resource = 'people/';

export const getData = async (url?: string) => {
  try {
    const res = await fetch(BASE_URL + resource + url);
    const response = res.json();
    return response;
  } catch (error) {
    throw new Error(`Unable to connect, please try again`);
  }
};
