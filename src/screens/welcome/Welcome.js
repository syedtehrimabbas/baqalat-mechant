import React from 'react';
import {images} from "../../assets/images";
import {LOGIN, SIGNUP} from "../../common/ScreenNames";
import {Image, ImageBackground, SafeAreaView, Text, View} from "react-native";
import {AppStyles} from "../../theme/styles";
import {Typography} from "../../theme/Typography";
import colors from "../../theme/colors";
import {RoundedButton} from "../../common/Buttons";


const Welcome = ({navigation}) => {

    return (<ImageBackground
            source={images.welcome}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <SafeAreaView/>
            <View style={[AppStyles.columnContainer, AppStyles.centerItems]}>
                <Image
                    source={images.fruitBG}
                />
                <Text style={[Typography.medium, {fontSize: 25, marginTop: 10}]}>{"Welcome"}</Text>
                <Text style={[Typography.light, {
                    color: colors.neutral,
                    width: '50%',
                    textAlign: 'center'
                }]}>{"Shop online and get your\ngroceries delivered from stores\nto your home in as fast as\npossible"}</Text>

                <RoundedButton
                    text="Create an account"
                    iconSrc={images.signup_icon}
                    background={colors.yellow}
                    onPress={() => navigation.navigate(SIGNUP)}
                />

                <RoundedButton
                    text="Sign in"
                    iconSrc={images.login_icon}
                    background={colors.secondary}
                    onPress={() => navigation.navigate(LOGIN)}
                />
                <Text style={[Typography.light, {
                    color: colors.neutral,
                    width: '50%',
                    textAlign: 'center'
                }]}>{"Login as guest"}</Text>

            </View>

        </ImageBackground>);
};

export default Welcome;