import {StyleSheet} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from "./colors";

export const AppStyles = StyleSheet.create({
    columnContainer: {
        flexDirection: 'column'
    },
    rowContainer: {
        flexDirection: 'row'
    },
    centerItems: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    overlay: {
        backgroundColor: 'black',
        opacity: 0.3,
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    searchStyle: {
        width: wp(90),
        flexDirection: "row",
        alignSelf: 'center',
        height: hp(6),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp(10),
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: 'white',
    }, textinputStyle: {
        width: wp(90),
        paddingLeft: wp(15),
    },
    iconContainerStyle: {
        height: hp(4),
        width: wp(4),
        position: 'absolute',
        left: 20,
        resizeMode: 'contain',
    },
    iconLeft: {
        height: hp(4),
        width: wp(4),
        tintColor: colors.white,
        left: 50,
        position: 'absolute',
        resizeMode: 'contain',
    },
    headingGreyBg: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: colors.iconsColor
    }, modalView: {
        margin: 15,
        height: '90%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }, containerStyle: {
        flex: 1,
        backgroundColor: colors.white
    }
});
