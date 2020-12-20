import React from 'react';
import {images} from "../../assets/images";
import {Image, ImageBackground, SafeAreaView, Text, View} from "react-native";
import {AppStyles} from "../../theme/styles";
import {Typography} from "../../theme/Typography";
import colors from "../../theme/colors";
import {RoundedButton} from "../../common/Buttons";


const SetupLocation = ({navigation}) => {

    return (<ImageBackground
        source={images.welcome}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <SafeAreaView/>
        <View style={[AppStyles.columnContainer, AppStyles.centerItems]}>
            <Image
                source={images.deliveryAddress}
            />
            <Text style={[Typography.medium, {
                fontSize: 25, marginTop: 10,
                textAlign: 'center'
            }]}>{"Setup your delivery\nlocation"}</Text>
            <Text style={[Typography.light, {
                color: colors.neutral,
                width: '50%',
                textAlign: 'center'
            }]}>{"Setup up your delivery location to\nexperience a top notch service"}</Text>


            <RoundedButton
                text="Setup delivery location"
                background={colors.yellow}
            />


        </View>

    </ImageBackground>);
};

export default SetupLocation;