import {AppInput, VerticalSpace} from '../common/InputFields';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';
import {LOGIN, SIGNUP} from '../common/ScreenNames';
import React, {useContext} from 'react';

import ApiServices from '../ApiServices/Services';
import {AppStyles} from '../theme/styles';
import AsyncStorage from '@react-native-community/async-storage';
import {RoundedButton} from '../common/Buttons';
import Spinner from '../common/Spinner';
import {Typography} from '../theme/Typography';
import UserContext from '../AuthContaxt';
import colors from '../theme/colors';
import {images} from '../assets/images';

const Login = ({navigation}) => {
  const value = useContext(UserContext);
  console.log('value', value);
  const [phone, onPhoneChange] = React.useState('');
  const [name, onNameChange] = React.useState('');
  const [email, onEmailChange] = React.useState('');
  const [password, onPasswordChange] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const onLoginButton = () => {
    setLoading(true);
    ApiServices.signIn(email, password, (res) => {
      console.log('res---', res);
      if (res.response.status == 200) {
        AsyncStorage.setItem('USER', JSON.stringify(res.response)).then(() => {
          setLoading(false);
          value.setUser(true);
        });
      } else {
        alert(res.response.message);
      }
    });
  };
  return (
    <ImageBackground source={images.welcome} style={{flex: 1, padding: 10}}>
      <SafeAreaView />
      <VerticalSpace space={50} />
      <View style={[AppStyles.columnContainer]}>
        <Text
          style={[
            Typography.medium,
            {
              fontSize: 25,
              marginTop: 10,
              marginLeft: 10,
            },
          ]}>
          {'Sign in'}
        </Text>
        <Spinner loading={loading} />
        <Text
          style={[
            Typography.light,
            {
              color: colors.neutral,
              width: '50%',
              marginTop: 10,
              marginLeft: 10,
            },
          ]}>
          {'Welcome back, login\nand continue shopping'}
        </Text>

        <VerticalSpace space={20} />

        <AppInput
          placeholder={'Email'}
          iconSrc={images.email}
          keyboardType="default"
          returnKeyType="next"
          onChangeText={(text) => onEmailChange(text)}
          value={email}
        />
        <AppInput
          placeholder={'Password'}
          iconSrc={images.lock}
          keyboardType="default"
          returnKeyType="next"
          password={true}
          onChangeText={(text) => onPasswordChange(text)}
          value={password}
        />

        <VerticalSpace space={10} />

        <RoundedButton
          text="Sign in"
          iconSrc={images.login_icon}
          background={colors.yellow}
          onPress={onLoginButton}
        />

        <Text
          style={[
            Typography.Bold,
            {
              color: colors.yellow,
              width: '50%',
              textAlign: 'center',
              alignSelf: 'center',
              marginBottom: 10,
            },
          ]}>
          {'Forgot password?'}
        </Text>

        <Text
          onPress={() => navigation.navigate(SIGNUP)}
          style={[
            Typography.light,
            {
              color: colors.neutral,
              width: '50%',
              textAlign: 'center',
              alignSelf: 'center',
            },
          ]}>
          {'Create an account'}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Login;
