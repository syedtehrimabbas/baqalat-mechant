import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppCardView from '../components/AppCardView'
import colors from "../theme/colors";
import {Typography} from "../theme/Typography";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';


export const Header = ({icon}) => {
    return (
        <View style={styles.containerStyle}>
            <Image
                style={{width: 100, height: hp(18), tintColor: 'white', resizeMode: 'contain'}}
                source={icon}/>
        </View>
    );
};

export const PropertyHeader = ({icon, righChild}) => {
    return (
        <View style={styles.containerStyle}>
            <View style={{alignSelf: 'center', right: 10, position: 'absolute'}}>
                {righChild}
            </View>
        </View>
    );
};

export const BackButtonHeader = ({nav, title, showSearchButton}) => {
    return <AppCardView
        style={{
            width: '100%',
            height: 50,
            justifyContent: 'center',
            backgroundColor: colors.white
        }}
        cornerRadius={0}
        cardElevation={0}
        children={
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity style={{alignSelf: 'flex-start'}} onPress={() => {
                    nav.goBack()
                }}>
                    <FontAwesome5 name="arrow-left" color={colors.neutral} size={20}/>

                </TouchableOpacity>

                <Text style={[Typography.Bold, {
                    alignSelf: 'center',
                    color: colors.textColor,
                    fontSize: 15
                }]}>
                    {title}
                </Text>
                <TouchableOpacity>
                    <FontAwesome5 name="search" color={showSearchButton ? colors.neutral : colors.white} size={20}/>

                </TouchableOpacity>
            </View>

        }
    />
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
