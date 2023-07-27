import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import RMCard from './RMCard';
import {COLORS, FONTS, SIZES} from '../../constants';
import axios from 'axios';
import VectorIcon from '../../helper/VectorIcon';

export default function RickandMorty() {
  const startEpisodeNumber = 1;
  const endEpisodeNumber = 50;
  const [charactersData, setCharactersData] = useState({});
  const [episodeInfo, setEpisodeInfo] = useState({});
  const [activeEpisode, setActiveEpisode] = useState(1);
  useEffect(() => {
    const getEpisodeInfo = async () => {
      try {
        const URL = `https://rickandmortyapi.com/api/episode/${activeEpisode}`;
        const episodeAPI = await axios.get(URL);
        const episodeDetails = episodeAPI?.data;
        setEpisodeInfo(episodeDetails);
        getRickandMortyCharacters(episodeDetails?.characters);
      } catch (error) {
        console.log('Episode:', error);
      }
    };
    getEpisodeInfo();
  }, [activeEpisode]);

  const getRickandMortyCharacters = async charactersURL => {
    try {
      const characterPromises = charactersURL.map(async _URL => {
        const response = await axios.get(_URL);
        return {...response.data};
      });

      const allCharacters = await Promise.all(characterPromises);
      const charactersDetails = allCharacters.map(character => ({
        id: character?.id,
        name: character?.name,
        status: character?.status,
        species: character?.species,
        location: character?.location?.name,
        image: character?.image,
      }));

      setCharactersData(charactersDetails);
      // console.log('adsflkajdsf-----', charactersData);
    } catch (error) {
      console.log('Charaters:', error);
    }
  };
  const {episode, name: episodeName} = episodeInfo;
  // console.log('chara🌈', charactersData);
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>RickandMorty Story</Text>
      <View style={styles.episodeNav}>
        <VectorIcon
          name={
            activeEpisode > startEpisodeNumber ? 'leftcircleo' : 'stepbackward'
          }
          type={'AntDesign'}
          size={SIZES.RFS(3)}
          color={
            activeEpisode > startEpisodeNumber ? COLORS.primary : COLORS.gray
          }
          onPress={
            activeEpisode > startEpisodeNumber
              ? () => setActiveEpisode(previous => previous - 1)
              : null
          }
        />

        <View style={styles.showSeasonTextContainer}>
          <Text style={styles.showSeasonText}>
            {episode}: {episodeName}
          </Text>
        </View>
        <VectorIcon
          name={
            activeEpisode <= endEpisodeNumber ? 'rightcircleo' : 'stepforward'
          }
          type={'AntDesign'}
          size={SIZES.RFS(3)}
          color={
            activeEpisode <= endEpisodeNumber ? COLORS.primary : COLORS.gray
          }
          onPress={
            activeEpisode <= endEpisodeNumber
              ? () => setActiveEpisode(previous => previous + 1)
              : null
          }
        />
      </View>
      <FlatList
        data={charactersData}
        renderItem={({item}) => <RMCard character={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SIZES.padding,
    padding: SIZES.padding,
  },
  headText: {
    ...FONTS.h1,
    color: COLORS.primary,
    alignSelf: 'center',
    padding: SIZES.padding,
    elevation: 2,
  },
  episodeNav: {
    marginVertical: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  showSeasonTextContainer: {
    minHeight: SIZES.RH(5),
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding,
    flexWrap: 'wrap',
  },
  showSeasonText: {
    ...FONTS.body4,
    color: COLORS.title,
  },
});
