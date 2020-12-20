import React from 'react';
import {Image, Text, View} from 'react-native';
import {AppStyles} from "../../../theme/styles";
import colors from "../../../theme/colors";
import {BackButtonHeader} from "../../../common/Headers";
import {Typography} from "../../../theme/Typography";
import {ADD_PAYMENT_METHD} from "../../../common/ScreenNames";
import {images} from "../../../assets/images";
import {RoundedButton} from "../../../common/Buttons";
import {Constant} from "../../../common/Constant";

const AddPayment = ({navigation}) => {

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <View style={[AppStyles.columnContainer, {backgroundColor: colors.white, height: '100%', padding: 10}]}>
            <BackButtonHeader nav={navigation} title={"Payment method"} showSearchButton={false}/>
            <View style={[AppStyles.containerStyle, {padding: 20}, AppStyles.centerItems]}>

                <Image source={images.alert} style={{width: 100, height: 100, resizeMode: 'contain'}}/>
                <Text style={[Typography.Bold, {fontSize: 22, marginTop: 10}]}>{Constant.emptySetup}</Text>

                <Text style={[Typography.light, {
                    marginTop: 5,
                    textAlign: 'center',
                    color: colors.neutral
                }]}>{"You need to setup a payment method before you can receive payment"}</Text>

            </View>

            <RoundedButton
                iconSrc={images.plus}
                text="Add new payment method"
                background={colors.yellow}
                onPress={() => {
                    navigation.navigate(ADD_PAYMENT_METHD)
                }}
            />

        </View>
    );
};

export default AddPayment;