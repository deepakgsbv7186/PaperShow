import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';
import Clipboard from '@react-native-clipboard/clipboard';

export default function RMCard({character}) {
  const {name, status, species, location, image} = character;
  const copyToClipboard = () => {
    Clipboard.setString(name);
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor:
            status === 'Alive'
              ? COLORS.emerald
              : status === 'unknown'
              ? COLORS.yellow
              : COLORS.red,
        },
      ]}
      onPress={() => console.log(name)}>
      <Image
        source={{uri: image}}
        resizeMode="contain"
        style={styles.imgContainer}
      />
      <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.infoTitle} onPress={copyToClipboard}>
          <Text style={styles.title}>{name}</Text>
        </TouchableOpacity>

        <View style={styles.infoDetails}>
          <View
            style={[
              styles.detailsStatus,
              {
                backgroundColor:
                  status === 'Alive'
                    ? COLORS.emerald
                    : status === 'unknown'
                    ? COLORS.yellow
                    : COLORS.red,
              },
            ]}></View>
          <Text style={styles.details}>{status}</Text>
          <Text style={styles.details}>{species}</Text>
        </View>
        <Text
          style={[
            styles.details,
            {
              ...FONTS.body5,
              color: COLORS.darkgray,
              marginTop: SIZES.padding / 2,
            },
          ]}>
          Last known location:
        </Text>
        <View style={styles.infoDetails}>
          <Text style={styles.details}>{location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    rowGap: SIZES.padding,
    marginVertical: SIZES.padding,
    borderRadius: SIZES.radius,
    elevation: SIZES.padding,
    minHeight: SIZES.RH(15),
  },
  imgContainer: {
    width: SIZES.RW(30),
    height: SIZES.RH(15),
    borderTopLeftRadius: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
  },
  infoContainer: {
    paddingHorizontal: SIZES.padding2,
    backgroundColor: COLORS.white,
    flexDirection: 'column',
    width: SIZES.RW(60),
  },
  infoTitle: {
    marginTop: SIZES.padding2,
  },
  title: {
    color: COLORS.black,
    ...FONTS.body4,
  },
  infoDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.padding,
  },
  details: {
    color: COLORS.black,
    ...FONTS.h,
  },
  detailsStatus: {
    width: SIZES.RW(2),
    height: SIZES.RH(1),
    borderRadius: SIZES.RW(10),
  },
});
