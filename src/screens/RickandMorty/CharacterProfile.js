import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';
import VectorIcon from '../../helper/VectorIcon';

export default function CharacterProfile(props) {
  const {name, status, species, location, image, charURL} = props.route.params;
  const nameWithEmail = `${name.trim().toLowerCase()}@indicchain.com`;
  return (
    <View style={styles.constainer}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <VectorIcon
          type={'FontAwesome6'}
          name={'gear'}
          color={COLORS.secondary}
          size={SIZES.RFS(3.3)}
        />
        <View></View>
        <VectorIcon
          type={'Fontisto'}
          name={'bell-alt'}
          color={COLORS.secondary}
          size={SIZES.RFS(3.3)}
        />
      </View>
      {/* Profile */}
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} resizeMode="cover" style={styles.image} />
        <View style={{marginVertical: SIZES.RH(4)}}>
          <Text style={styles.characterName}>{name}</Text>
          <Text style={styles.characterEmail}>{nameWithEmail}</Text>
        </View>
      </View>
      {/* Description */}
      <View style={styles.charURLcontainer}>
        <Text style={styles.charURLhead}>Visit My ProFILE</Text>
        <Text style={styles.charURLtext}>{charURL}</Text>
      </View>
      {/* Ticky Inter-section */}
      <View style={styles.trickyContainer}>
        {/* Left */}
        <View style={{flex: 20, justifyContent: 'space-between'}}>
          <View
            style={{
              flex: 50,
              backgroundColor: COLORS.primary,
            }}></View>
          <View
            style={{
              flex: 50,
              backgroundColor: COLORS.white,
              borderTopLeftRadius: SIZES.RW(50),
            }}></View>
        </View>
        {/* Center */}
        <View
          style={{
            flex: 60,
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 50, backgroundColor: COLORS.primary}}></View>
          <View style={{flex: 50, backgroundColor: COLORS.white}}></View>
        </View>
        {/* Right */}
        <View
          style={{
            flex: 20,
            justifyContent: 'space-between',
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              flex: 50,
              backgroundColor: COLORS.primary,
              borderBottomRightRadius: SIZES.RW(50),
            }}></View>
          <View
            style={{
              flex: 50,
              backgroundColor: COLORS.white,
            }}></View>
        </View>
      </View>
      {/* Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailsCard}>
          <View style={{flex: 20}}>
            <View>
              <VectorIcon
                type={'FontAwesome5'}
                name={'map-marker-alt'}
                size={SIZES.RFS(3)}
                color={COLORS.primary}
              />
            </View>
          </View>
          <View style={{flex: 80}}>
            <Text>Last Known Location:</Text>
            <Text>{location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsCard: {
    flexDirection: 'row',
    width: SIZES.RW(85),
    backgroundColor: COLORS.secondary,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  trickyContainer: {
    backgroundColor: COLORS.transparent,
    height: SIZES.RH(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  constainer: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SIZES.padding2,
    paddingHorizontal: SIZES.padding2 * 1.5,
  },
  imageContainer: {
    height: SIZES.RH(30),
    width: SIZES.RW(80),
    alignSelf: 'center',
    // backgroundColor: COLORS.yellow,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 0.3,
  },
  image: {
    width: SIZES.RW(28),
    height: SIZES.RH(14),
    borderRadius: SIZES.radius * 4,
  },
  characterName: {
    ...FONTS.h1,
    color: COLORS.white,
    textAlign: 'center',
  },
  characterEmail: {
    ...FONTS.body5,
    color: COLORS.secondary,
    textAlign: 'center',
  },
  charURLcontainer: {
    height: SIZES.RH(10),
  },
  charURLhead: {
    ...FONTS.h4,
    color: COLORS.secondary,
    textAlign: 'center',
    marginTop: SIZES.padding2,
  },
  charURLtext: {
    width: SIZES.RW(75),
    ...FONTS.body5,
    color: COLORS.primary,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: SIZES.padding,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.radius,
  },
});
