import React from 'react';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';
import {AppStyles} from "../theme/styles";
import colors from "../theme/colors";
import {Typography} from "../theme/Typography";
import ApiServices from "../ApiServices/Services";
import {images} from "../assets/images";
import {AppInput, VerticalSpace} from "../common/InputFields";
import {RoundedButton} from "../common/Buttons";
import {LOGIN, SIGNUP} from "../common/ScreenNames";

const Login = ({navigation}) => {
    const [phone, onPhoneChange] = React.useState('');
    const [name, onNameChange] = React.useState('');
    const [email, onEmailChange] = React.useState('');
    const [password, onPasswordChange] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const doRegister = () => {
        setLoading(true);
        const data = JSON.stringify({"email": email, "name": name, "phone": phone, "password": password});

        ApiServices.signup(data)
            .then((response) => response.json())
            .then((res) => {
                setLoading(false);
                console.log(res);
                if (res.ResponseHeader.ResponseCode === 200) {
                    navigation.pop()
                }
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            })
            .done();
    };

    const onLoginButton = () => {
        navigation.pop()
    };
    return (<ImageBackground
        source={images.welcome}
        style={{flex: 1, padding: 10}}>
        <SafeAreaView/>
        <VerticalSpace space={50}/>
        <View style={[AppStyles.columnContainer]}>

            <Text style={[Typography.medium, {
                fontSize: 25, marginTop: 10,
                marginLeft: 10
            }]}>{"Sign in"}</Text>
            <Text style={[Typography.light, {
                color: colors.neutral,
                width: '50%',
                marginTop: 10,
                marginLeft: 10,
            }]}>{"Welcome back, login\nand continue shopping"}</Text>

            <VerticalSpace space={20}/>

            <AppInput
                placeholder={"Email"}
                iconSrc={images.email}
                keyboardType="default"
                returnKeyType="next"
            />
            <AppInput
                placeholder={"Password"}
                iconSrc={images.lock}
                keyboardType="default"
                returnKeyType="next"
                password={true}
            />

            <VerticalSpace space={10}/>

            <RoundedButton
                text="Sign in"
                iconSrc={images.login_icon}
                background={colors.yellow}
            />

            <Text
                style={[Typography.Bold, {
                    color: colors.yellow,
                    width: '50%',
                    textAlign: 'center',
                    alignSelf: 'center',
                    marginBottom: 10,
                }]}>{"Forgot password?"}</Text>

            <Text
                onPress={() => navigation.navigate(SIGNUP)}
                style={[Typography.light, {
                    color: colors.neutral,
                    width: '50%',
                    textAlign: 'center',
                    alignSelf: 'center'
                }]}>{"Create an account"}</Text>

        </View>

    </ImageBackground>);
};

export default Login;