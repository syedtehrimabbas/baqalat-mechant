import React from 'react'
import {View} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const FavAndShare = () => {
    return <View style={{
        flexDirection: 'row', right: 10, position: 'absolute',
        bottom: 10,
    }}>

        <FontAwesome5 name="heart" color="white" size={20} style={{
            marginStart: 10,
            marginEnd: 5,
            alignItems: 'center',
            flexDirection: 'row'
        }}/>

        <FontAwesome5 name="share-alt" color="white" size={20} style={{
            marginStart: 10,
            marginEnd: 10,
            alignItems: 'center',
            flexDirection: 'row'
        }}/>

    </View>
};