import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import colors from "../theme/colors";
import {Typography} from "../theme/Typography";
import {AppStyles} from "../theme/styles";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const AppInput = ({placeholder, iconSrc, keyboardType, returnKeyType, password}) => {
    return (<View style={[AppStyles.rowContainer, {
        borderRadius: 5,
        borderColor: colors.light,
        borderWidth: 0.5,
        padding: 5,
        margin: 10
    }]}>

        <Image source={iconSrc}
               style={{
                   width: 14,
                   height: 15.75,
                   tintColor: colors.neutral,
                   alignSelf: 'center',
                   resizeMode: 'contain'
               }}/>

        <TextInput
            style={[Typography.regularTxT, {
                width: '90%',
                height: 40,
                fontSize: 15,
                letterSpacing: 2,
                paddingStart: 10
            }]}
            keyboardType={keyboardType}
            placeholder={placeholder}
            returnKeyType={returnKeyType}
            secureTextEntry={password}
        />

    </View>);
};


export const AppInputWithLabel = ({keyboardType, returnKeyType, label, isDescription}) => {
    return (<View style={[AppStyles.columnContainer, {
        margin: 10,
        marginTop: 5,
    }]}>
        <Text style={[Typography.light, {fontSize: 16, marginBottom: 10}]}>
            {label}
        </Text>

        <View style={[AppStyles.columnContainer, {
            borderRadius: 5,
            borderColor: colors.light,
            borderWidth: 0.5,
            padding: 5
        }]}>

            <TextInput
                style={[Typography.regularTxT, {
                    width: '90%',
                    height: isDescription ? 100 : 40,
                    fontSize: 15,
                    letterSpacing: 2,
                    paddingStart: 5,
                    textAlignVertical: 'top',
                }]}
                multiline={isDescription}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
            />

        </View>

    </View>);
};


export const VerticalSpace = ({space}) => {
    return (<View style={{height: space, width: '100%'}}/>)
};

export const HorizontalSpace = ({space}) => {
    return (<View style={{width: space}}/>)
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
