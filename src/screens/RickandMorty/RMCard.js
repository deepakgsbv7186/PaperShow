import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';

export default function RMCard({character}) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            character.status === 'Alive' ? COLORS.emerald : COLORS.red,
        },
      ]}>
      <Image
        source={{uri: character.image}}
        resizeMode="contain"
        style={styles.imgContainer}
      />
      <View style={styles.infoContainer}>
        <View style={styles.infoTitle}>
          <Text style={styles.title}>{character.name}</Text>
        </View>
        <View style={styles.infoDetails}>
          <View
            style={[
              styles.detailsStatus,
              {
                backgroundColor:
                  character.status === 'Alive' ? COLORS.emerald : COLORS.red,
              },
            ]}></View>
          <Text style={styles.details}>{character.status}</Text>
          <Text style={styles.details}>{character.species}</Text>
        </View>
        <Text
          style={[
            styles.details,
            {...FONTS.body5, color: COLORS.gray, marginTop: SIZES.padding / 2},
          ]}>
          Last known location:
        </Text>
        <View style={styles.infoDetails}>
          <Text style={styles.details}>{character.location.name}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    rowGap: SIZES.padding,
    marginVertical: SIZES.padding,
    borderRadius: SIZES.radius,
    elevation: SIZES.padding,
  },
  imgContainer: {
    width: SIZES.RW(30),
    height: SIZES.RH(15),
    borderTopLeftRadius: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
  },
  infoContainer: {
    paddingHorizontal: SIZES.padding2,
    backgroundColor: COLORS.infoText,
    flexDirection: 'column',
    width: SIZES.RW(60),
  },
  infoTitle: {
    marginTop: SIZES.padding,
  },
  title: {
    color: COLORS.white,
    ...FONTS.h2,
  },
  infoDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.padding,
  },
  details: {
    color: COLORS.white,
    ...FONTS.h,
  },
  detailsStatus: {
    width: SIZES.RW(2),
    height: SIZES.RH(1),
    borderRadius: SIZES.RW(10),
  },
});
