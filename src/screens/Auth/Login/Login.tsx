import React, {useState} from 'react';
import {Button, Text, View} from 'react-native-ui-lib';
import {TextInput} from '@react-native-material/core';
import {StyleSheet} from 'react-native';
import {RootStackParamList} from '@/types/stackRoutes';
import {StackScreenProps} from '@react-navigation/stack';
import {useActions} from './useActions';
import {appColors} from '@/theme/appColors';
import {AuthContext} from '@/context/AuthContext';
import {ProfileIcon} from '@/assets/svg/ProfileIcon';

export const Login = (props: StackScreenProps<RootStackParamList>) => {
  const {handleNavigateTabs} = useActions(props);
  const {handleLogin} = AuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const setError = (error: string) => {
    setIsError(!isError);
    console.log('ERROR Login', error);
  };

  return (
    <View
      padding-16
      flex
      centerV
      backgroundColor={appColors.BACKGROUND_SCREEN_COLOR}>
      <View center marginB-20>
        <ProfileIcon width={200} height={200} color={appColors.BLACK} />
      </View>
      <Text style={styles.title}>¡Welcome!</Text>
      <TextInput
        style={styles.textInput}
        variant="outlined"
        label="Email"
        value={email}
        onChangeText={e => setEmail(e)}
      />
      <TextInput
        style={styles.textInput}
        variant="outlined"
        label="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={e => setPassword(e)}
      />
      <Button
        label="Login"
        backgroundColor={appColors.PRIMARY_TEXT_COLOR}
        onPress={() =>
          handleLogin({email, password}, () => handleNavigateTabs(), setError)
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    width: '100%',
    marginBottom: 16,
    borderRadius: 900,
  },
});
