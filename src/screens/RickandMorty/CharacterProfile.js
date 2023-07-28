import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function CharacterProfile(props) {
  const {name, status, species, location, image, charURL} = props.route.params;

  return (
    <View>
      <Text>
        {name} {charURL}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
