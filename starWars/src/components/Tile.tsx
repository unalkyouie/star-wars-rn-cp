import React, {useEffect, useState} from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';

interface Person {
  name: string;
  mass: number;
}
const BASE_URL = 'https://swapi.dev/api/';
const resource = 'people/';
const fetchApi = async () => {
  const res = await fetch(BASE_URL + resource);
  const response = res.json();
  return response;
};

const getNumberOfItems = async () => {
  const response = await fetchApi();
  return response.count;
};
const getRandomElement = async () => {
  const numberOfElements = await getNumberOfItems();
  const elementIndex = Math.floor(Math.random() * numberOfElements);
  const res = await fetch(BASE_URL + resource + elementIndex);
  const response = await res.json();
  return response;
};
const getDetails = async (name: string) => {
  try {
    const res = await fetch(`${BASE_URL}${resource}?search=${name}`);
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
const getNameOfRandomElement = async () => {
  const res = await getRandomElement();
  const name = await res.name;
  return name;
};

const Tile = () => {
  const [name, setName] = useState('');
  const [personData, setPersonData] = useState<Person>({});

  const details = async () => {
    const res = await getDetails(name);
    const per: Person = res.results[0];
    setPersonData(per);
  };

  const getRandName = async () => {
    const res = await getNameOfRandomElement();
    setName(res);
  };
  useEffect(() => {
    getRandName();
    details();
  }, []);

  return (
    <Card>
      <Card.Content>
        <Title>{personData.name}</Title>
        <Paragraph>{personData.mass}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default Tile;
