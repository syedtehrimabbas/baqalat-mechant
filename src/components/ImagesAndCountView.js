import React from 'react'
import {Text, View} from "react-native";
import colors from "../theme/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {Typography} from "../theme/Typography";

export const ImagesAndCountView = ({count, imagesCount}) => {
    return <View style={{
        flexDirection: 'row', left: 10, position: 'absolute',
        bottom: 10,
    }}>
        <View style={{
            height: 20,
            padding: 5,
            borderRadius: 5,
            backgroundColor: colors.dark_grey,
            alignItems: 'center',
            flexDirection: 'row'
        }}>
            <FontAwesome5 name="eye" color="white"/>
            <Text style={[Typography.regularTxT, {marginLeft: 2, color: colors.white, fontSize: 13}]}>
                {count}
            </Text>
        </View>


        <View style={{
            height: 20,
            padding: 5,
            borderRadius: 5,
            marginStart: 5,
            backgroundColor: colors.dark_grey,
            alignItems: 'center',
            flexDirection: 'row'
        }}>
            <FontAwesome5 name="camera" color="white"/>
            <Text style={[Typography.regularTxT, {marginLeft: 2, color: colors.white, fontSize: 13}]}>
                {imagesCount}
            </Text>
        </View>

    </View>
};