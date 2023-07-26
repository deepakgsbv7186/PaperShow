import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {TextInput as PaperTextInput} from 'react-native-paper';
import {COLORS, SIZES} from '../constants';

const CustomInput = ({left, right, ...props}) => (
  <PaperTextInput
    {...props}
    render={inputProps => (
      <View style={styles.inputContainer}>
        {left && <View style={styles.adornmentContainer}>{left}</View>}
        <TextInput style={styles.input} {...inputProps} />
        {right && <View style={styles.adornmentContainer}>{right}</View>}
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
  },
  adornmentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding * 2,
  },
});

export default CustomInput;
