import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {AppStyles} from "../../theme/styles";
import colors from "../../theme/colors";
import {BackButtonHeader} from "../../common/Headers";
import {Typography} from "../../theme/Typography";
import {ADD_PAYMENTS, PAYMENTS} from "../../common/ScreenNames";
import {Menu} from 'react-native-paper';
import {images} from "../../assets/images";
import {RoundedButton} from "../../common/Buttons";

const Payments = ({navigation}) => {

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <View style={[AppStyles.columnContainer, {backgroundColor: colors.white, height: '100%', padding: 10}]}>
            <BackButtonHeader nav={navigation} title={PAYMENTS} showSearchButton={false}/>

            <FlatList
                data={[1, 1, 1]}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <PaymentItem navigation={navigation} item={item}/>}
                keyExtractor={(item, index) => index}
            />

            <RoundedButton
                iconSrc={images.plus}
                text="Add new payment method"
                background={colors.yellow}
                onPress={() => {
                    navigation.navigate(ADD_PAYMENTS)
                }}
            />

        </View>
    );
};

const PaymentItem = ({navigation, item}) => {

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return <View style={{
        padding: 10,
        flexDirection: 'column',
        width: '95%',
        alignSelf: 'center',
        backgroundColor: colors.lightRed,
        borderRadius: 20,
        margin: 5
    }}>
        <View style={[AppStyles.rowContainer, {justifyContent: 'space-between'}]}>

            <Text style={[Typography.Bold]}>{"Preferred"}</Text>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<TouchableOpacity onPress={openMenu}>
                    <Image source={images.menu_icon} style={{resizeMode: 'contain', height: 15, width: 5}}/>
                </TouchableOpacity>}>
                <Menu.Item onPress={() => {
                }} title="Edit"/>
                <Menu.Item onPress={() => {
                }} title="Delete"/>
            </Menu>

        </View>

        <View style={{
            borderStyle: 'dotted',
            borderWidth: 0.5,
            borderRadius: 1,
            borderColor: colors.grey,
            width: '100%',
            height: 0.5,
            margin: 10,
            marginEnd: 0,
            marginStart: 0
        }}>
        </View>

        <View style={{flexDirection: 'row', marginTop: 5,}}>
            <Image source={images.card} style={{width: 20, height: 20, resizeMode: 'contain'}}/>

            <Text style={[Typography.light, {
                color: colors.secondary,
                fontSize: 13,
                marginStart: 10
            }]}>{"Direct to Local Bank (KU) - Account ending\nin 0183"}</Text>

        </View>

    </View>
};
export default Payments;