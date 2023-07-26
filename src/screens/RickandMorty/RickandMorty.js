import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RMCard from './RMCard';
import {COLORS, SIZES} from '../../constants';

export default function RickandMorty() {
  return (
    <View style={styles.container}>
      <Text>RickandMorty Story</Text>
      <View>
        {charactersData.map(charData => (
          <RMCard key={charData.id} character={charData} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SIZES.padding,
    padding: SIZES.padding,
    // backgroundColor: COLORS.emerald,
  },
});

const charactersData = [
  {
    id: 698,
    name: 'Wicker Rick',
    status: 'Dead',
    species: 'Robot',
    type: 'Decoy',
    gender: 'Male',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/698.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/43'],
    url: 'https://rickandmortyapi.com/api/character/698',
    created: '2021-10-16T15:40:51.046Z',
  },
  {
    id: 28,
    name: 'Attila Starwar',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {name: 'unknown', url: ''},
    location: {
      name: 'Interdimensional Cable',
      url: 'https://rickandmortyapi.com/api/location/6',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/28.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/8',
      'https://rickandmortyapi.com/api/episode/13',
      'https://rickandmortyapi.com/api/episode/17',
    ],
    url: 'https://rickandmortyapi.com/api/character/28',
    created: '2017-11-05T09:02:16.595Z',
  },
  {
    id: 726,
    name: 'Sticky',
    status: 'Alive',
    species: 'unknown',
    type: 'Super Sperm Monster',
    gender: 'Male',
    origin: {
      name: 'Morty',
      url: 'https://rickandmortyapi.com/api/location/114',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/726.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/45'],
    url: 'https://rickandmortyapi.com/api/character/726',
    created: '2021-10-17T10:09:46.047Z',
  },
];
