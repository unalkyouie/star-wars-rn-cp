const BASE_URL = 'https://swapi.dev/api/';

export const getData = async (url: string) => {
  try {
    const res = await fetch(`${BASE_URL}${url}`, {
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
