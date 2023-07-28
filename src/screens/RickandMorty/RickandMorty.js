import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import RMCard from './RMCard';
import {COLORS, FONTS, SIZES} from '../../constants';
import axios from 'axios';
import VectorIcon from '../../helper/VectorIcon';

const RickandMorty = () => {
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
        if (!charactersData[activeEpisode]) {
          getRickandMortyCharacters(episodeDetails?.characters);
        }
      } catch (error) {
        console.log('Episode:', error);
      }
    };
    getEpisodeInfo();
  }, [activeEpisode]);

  const getRickandMortyCharacters = useCallback(
    async charactersURL => {
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
          charURL: character?.url,
        }));
        // console.log('🍎', charactersDetails);
        setCharactersData(prevData => ({
          ...prevData,
          [activeEpisode]: charactersDetails,
        }));
      } catch (error) {
        console.log('Charaters:', error);
      }
    },
    [activeEpisode],
  );

  const handlePreviousEpisode = useCallback(() => {
    setActiveEpisode(prevEpisode =>
      Math.max(prevEpisode - 1, startEpisodeNumber),
    );
  }, [startEpisodeNumber]);

  const handleNextEpisode = useCallback(() => {
    setActiveEpisode(prevEpisode =>
      Math.min(prevEpisode + 1, endEpisodeNumber),
    );
  }, [endEpisodeNumber]);

  const {episode, name: episodeName} = episodeInfo;

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
            activeEpisode > startEpisodeNumber ? handlePreviousEpisode : null
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
          onPress={activeEpisode <= endEpisodeNumber ? handleNextEpisode : null}
        />
      </View>
      <FlatList
        data={charactersData[activeEpisode]}
        renderItem={({item}) => <RMCard character={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default React.memo(RickandMorty);

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
    width: SIZES.RW(80),
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: SIZES.padding,
  },
  showSeasonText: {
    flexWrap: 'wrap',
    ...FONTS.body4.fontSize,
    color: COLORS.title,
    textAlign: 'center',
  },
});
