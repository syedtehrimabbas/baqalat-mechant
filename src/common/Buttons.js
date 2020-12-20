import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from "../theme/colors";
import {Typography} from "../theme/Typography";
import {AppStyles} from "../theme/styles";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const RoundedButton = ({text, iconSrc, background, border, textColor, onPress}) => {
    return (
        <TouchableOpacity style={[{
            backgroundColor: background,
            height: 50,
            width: 270,
            borderRadius: 100,
            margin: 10,
            alignSelf: 'center',
            borderColor: colors.grey,
            borderWidth: border ? 0.5 : 0
        }, AppStyles.centerItems]}

                          onPress={onPress && onPress}>

            <View style={AppStyles.rowContainer}>

                <Image source={iconSrc}
                       style={{
                           width: 20,
                           height: 18.75,
                           alignSelf: 'center',
                           resizeMode: 'contain',
                           left: 30
                       }}/>

                <Text style={[Typography.medium, {
                    color: textColor ? textColor : colors.white,
                    lineHeight: 24,
                    textAlign: 'center',
                    marginStart: -20,
                    flex: 2,
                    fontSize: 14
                }]}>{text}</Text>

            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        height: hp(8),
        width: wp(100),
        backgroundColor: colors.primaryColor,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
