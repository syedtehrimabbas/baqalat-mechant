import React from 'react';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';
import {AppStyles} from "../theme/styles";
import colors from "../theme/colors";
import {Typography} from "../theme/Typography";
import ApiServices from "../ApiServices/Services";
import {images} from "../assets/images";
import {AppInput, VerticalSpace} from "../common/InputFields";
import {RoundedButton} from "../common/Buttons";
import {LOGIN, SETUP_LOCATION} from "../common/ScreenNames";

const Signup = ({navigation}) => {
    const [phone, onPhoneChange] = React.useState('');
    const [name, onNameChange] = React.useState('');
    const [email, onEmailChange] = React.useState('');
    const [password, onPasswordChange] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const onLogin = () => {
        if (name.length === 0) {
            alert("Name is required")
        } else if (email.length === 0) {
            alert("Email is required")
        } else if (phone.length < 11) {
            alert("Phone is incorrect")
        } else if (password.length === 0) {
            alert("Please enter password")
        } else {
            doRegister()
        }
    };

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
                }else{
                    alert(res.ResponseHeader.ResponseMessage)
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
            }]}>{"Sign Up"}</Text>
            <Text style={[Typography.light, {
                color: colors.neutral,
                width: '50%',
                marginTop: 10,
                marginLeft: 10,
            }]}>{"Create an account\nnow and start shopping"}</Text>

            <VerticalSpace space={20}/>

            <AppInput
                placeholder={"Name"}
                iconSrc={images.signup_icon}
                keyboardType="default"
                returnKeyType="next"
            />

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
            <AppInput
                placeholder={"Re-enter Password"}
                iconSrc={images.lock}
                keyboardType="default"
                returnKeyType="done"
                password={true}
            />

            <RoundedButton
                text="Create account"
                iconSrc={images.signup_tick}
                background={colors.yellow}
                onPress={() => navigation.navigate(SETUP_LOCATION)}
            />

            <Text
                onPress={() => navigation.navigate(LOGIN)}
                style={[Typography.light, {
                    color: colors.neutral,
                    width: '50%',
                    textAlign: 'center',
                    alignSelf: 'center'
                }]}>{"Login"}</Text>

        </View>

    </ImageBackground>);
};

export default Signup;