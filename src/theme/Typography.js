import colors from './../theme/colors';
import {Platform} from 'react-native';

export const Typography = {
    regularTxT: {
        fontSize: (Platform.OS === 'ios') ? 16 : 16,
        fontFamily: "Poppins-Regular",
        color: colors.secondary,
    },
    light: {
        fontSize: (Platform.OS === 'ios') ? 16 : 16,
        fontFamily: "Poppins-Light",
        color: colors.secondary,
    },
    medium: {
        fontSize: (Platform.OS === 'ios') ? 16 : 16,
        fontFamily: "Poppins-Medium",
        color: colors.secondary,
    },
    thin: {
        fontSize: (Platform.OS === 'ios') ? 16 : 16,
        fontFamily: "Poppins-Thin",
        color: colors.secondary,
    },
    ExtraBold: {
        fontSize: (Platform.OS === 'ios') ? 16 : 16,
        color: colors.secondary,
        fontFamily: "Poppins-ExtraBold"
    },
    Bold: {
        fontSize: (Platform.OS === 'ios') ? 16 : 16,
        color: colors.secondary,
        fontWeight: 'bold',
        fontFamily: "Poppins-Bold"
    },
    LargeBold: {
        fontSize: (Platform.OS === 'ios') ? 16 : 16,
        color: colors.secondary,
        fontFamily: "Poppins-Bold"
    },
    buttonTxt: {
        fontSize: (Platform.OS === 'ios') ? 14 : 12,
        fontFamily: "raleway",
        flex: 1,
        margin: 16,
        color: colors.white,
        paddingLeft: 11,
    },
    bottomTabTitleStyle: {
        fontSize: (Platform.OS === 'ios') ? 14 : 12,
        fontFamily: "Poppins-Thin"
    },
};
