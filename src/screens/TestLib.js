import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../constants';
import MyIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import VectorIcon from '../helper/VectorIcon';
import {RadioButton} from 'react-native-paper';

export default function TestLib() {
  const [checked, setChecked] = useState('first');
  return (
    <>
      <View style={{backgroundColor: COLORS.primary, padding: SIZES.padding}}>
        <Text style={{...FONTS.h4, color: COLORS.white}}>TestLib</Text>
        <MyIcon name="lock-outline" size={SIZES.RFS(10)} />
        <VectorIcon
          name={'staro'}
          size={SIZES.RFS(10)}
          color={COLORS.white}
          type={'AntDesign'}
        />
      </View>
      <RadioButton
        value="first"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
        // color={COLORS.primary}
        // uncheckedColor={COLORS.primary}
      />
      <RadioButton
        value="second"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
        // color={COLORS.primary}
        // uncheckedColor={COLORS.primary}
      />
    </>
  );
}

const styles = StyleSheet.create({});
