import React from 'react';
import {Text, View} from 'react-native';
import {Typography} from "../../../theme/Typography";
import {AppStyles} from "../../../theme/styles";
import colors from "../../../theme/colors";

const Profile = () => {
    return (
        <View
            style={[AppStyles.columnContainer,{backgroundColor:colors.white,height:'100%'}]}>
            <Text style={Typography.Bold}>{"Profile"}</Text>

        </View>
    );
};
export default Profile;