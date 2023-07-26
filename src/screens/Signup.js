import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {
  TextInput,
  RadioButton,
  Checkbox,
  Button,
  Text,
} from 'react-native-paper';
import {COLORS, FONTS, SIZES} from '../constants';
import DatePicker from 'react-native-date-picker';
import VectorIcon from '../helper/VectorIcon';
import {useNavigation} from '@react-navigation/native';

const countries = [
  {label: 'India', value: 'India'},
  {label: 'USA', value: 'USA'},
  {label: 'UK', value: 'UK'},
  // Add more countries as needed
];

const Signup = () => {
  const pointsTo = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('male');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [agree, setAgree] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          {/* Full Name */}
          <TextInput
            left={
              <TextInput.Icon
                icon={() => (
                  <VectorIcon
                    name="person-outline"
                    size={SIZES.RFS(2.3)}
                    color={COLORS.primary}
                    type={'Ionicons'}
                  />
                )}
              />
            }
            label="Full Name"
            mode="outlined"
            value={fullName}
            onChangeText={setFullName}
          />
          {/* Email */}
          <TextInput
            left={
              <TextInput.Icon
                icon={() => (
                  <VectorIcon
                    name="email-outline"
                    type={'MaterialCommunityIcons'}
                    size={SIZES.RFS(2.4)}
                    color={COLORS.primary}
                  />
                )}
              />
            }
            label="Email"
            mode="outlined"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          {/* Phone */}
          <TextInput
            left={
              <TextInput.Icon
                icon={() => (
                  <VectorIcon
                    name={'phone'}
                    type={'Feather'}
                    size={SIZES.RFS(2.3)}
                    color={COLORS.primary}
                  />
                )}
              />
            }
            label="Phone Number"
            mode="outlined"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          {/* Password */}
          <TextInput
            left={
              <TextInput.Icon
                icon={() => (
                  <VectorIcon
                    name={!hidePassword ? 'lock' : 'lock-open'}
                    type={'SimpleLineIcons'}
                    color={COLORS.primary}
                    size={SIZES.RFS(2.2)}
                  />
                )}
              />
            }
            label="Password"
            mode="outlined"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={hidePassword}
            right={
              <TextInput.Icon
                icon={() => (
                  <VectorIcon
                    name={!hidePassword ? 'eye' : 'eye-off'}
                    type={'Feather'}
                    color={COLORS.primary}
                    size={SIZES.RFS(2.2)}
                    onPress={() => setHidePassword(!hidePassword)}
                  />
                )}
              />
            }
          />
          {/* Confirm Password */}
          <TextInput
            left={
              <TextInput.Icon
                icon={() => (
                  <VectorIcon
                    name={'lock'}
                    type={'SimpleLineIcons'}
                    color={COLORS.primary}
                    size={SIZES.RFS(2.2)}
                  />
                )}
              />
            }
            label="Confirm Password"
            mode="outlined"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            right={
              <TextInput.Icon
                icon={() => (
                  <VectorIcon
                    name={'eye'}
                    type={'Feather'}
                    color={COLORS.primary}
                    size={SIZES.RFS(2.2)}
                  />
                )}
              />
            }
          />
          {/* Gender */}
          <RadioButton.Group onValueChange={setGender} value={gender}>
            <View style={styles.radioContainer}>
              <Text style={{...FONTS.body4}}>Gender</Text>
              <View style={styles.radioInput}>
                <RadioButton value="male" />
                <Text>Male</Text>
              </View>
              <View style={styles.radioInput}>
                <RadioButton value="female" />
                <Text>Female</Text>
              </View>
            </View>
          </RadioButton.Group>
          {/* DatePicker */}
          <TextInput
            mode="outlined"
            label="DOB"
            value={dateOfBirth ? dateOfBirth.toDateString() : ''}
            right={
              <TextInput.Icon
                icon={() => (
                  <VectorIcon
                    name="date"
                    size={20}
                    color={COLORS.primary}
                    type={'Fontisto'}
                    onPress={() => setOpen(true)}
                  />
                )}
              />
            }
          />
          {/* Checkbox */}
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={agree ? 'checked' : 'unchecked'}
              onPress={() => setAgree(!agree)}
            />
            <Text>I agree to the terms and conditions.</Text>
          </View>
          {/* Submit Button */}
          <Button
            mode="contained"
            labelStyle={{color: COLORS.white}}
            style={{borderRadius: SIZES.radius}}
            onPress={() => pointsTo.navigate('RickandMorty')}>
            Submit
          </Button>
        </View>
      </ScrollView>
      <DatePicker
        modal
        open={open}
        mode="date"
        date={dateOfBirth}
        onConfirm={date => {
          setOpen(false);
          setDateOfBirth(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        minimumDate={new Date('2000-12-31')}
        maximumDate={new Date('2022-12-31')}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SIZES.padding,
    margin: SIZES.padding,
    rowGap: SIZES.padding2,
  },
  radioContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.darkgray,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    flexDirection: 'row',
    elevation: 1,
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding * 2,
    paddingVertical: SIZES.padding,
  },
  radioInput: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -SIZES.padding * 1.5,
  },
});

export default Signup;
