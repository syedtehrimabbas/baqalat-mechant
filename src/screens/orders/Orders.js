import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {AppStyles} from "../../theme/styles";
import colors from "../../theme/colors";
import {BackButtonHeader} from "../../common/Headers";
import {Typography} from "../../theme/Typography";
import {ORDERS} from "../../common/ScreenNames";
import {Menu} from 'react-native-paper';
import {images} from "../../assets/images";

const Orders = ({navigation}) => {

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <View style={[AppStyles.columnContainer, {backgroundColor: colors.white, height: '100%', padding: 10}]}>
            <BackButtonHeader nav={navigation} title={ORDERS} showSearchButton={true}/>
            <View style={[AppStyles.rowContainer,{alignItems:'center',alignSelf:'flex-end',marginEnd:10}]}>
                <Text style={[Typography.Bold,{marginEnd:5}]}>{"All"}</Text>

                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<TouchableOpacity onPress={openMenu}>
                        <Image source={images.arrow_down} style={{resizeMode: 'contain', height: 13, width: 13}}/>
                    </TouchableOpacity>}>
                    <Menu.Item onPress={() => {
                    }} title="Unfulfilled"/>
                    <Menu.Item onPress={() => {
                    }} title="Fulfilled"/>
                    <Menu.Item onPress={() => {
                    }} title="Paid"/>

                    <Menu.Item onPress={() => {
                    }} title="Unpaid"/>

                    <Menu.Item onPress={() => {
                    }} title="Refund & Close"/>
                </Menu>
            </View>

            <FlatList
                data={[1, 1, 1, 1, 1, 1, 1, 1]}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <OrderItem navigation={navigation} item={item}/>}
                keyExtractor={(item, index) => index}
            />

        </View>
    );
};

const OrderItem = ({navigation, item}) => {

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

            <Text style={[Typography.Bold]}>{"KbNSwAZGT1865"}</Text>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<TouchableOpacity onPress={openMenu}>
                    <Image source={images.menu_icon} style={{resizeMode: 'contain', height: 15, width: 5}}/>
                </TouchableOpacity>}>
                <Menu.Item onPress={() => {
                }} title="Unfulfilled"/>
                <Menu.Item onPress={() => {
                }} title="Fulfilled"/>
                <Menu.Item onPress={() => {
                }} title="Paid"/>

                <Menu.Item onPress={() => {
                }} title="Unpaid"/>

                <Menu.Item onPress={() => {
                }} title="Refund & Close"/>
            </Menu>

        </View>

        <View style={{
            borderStyle: 'dotted',
            borderWidth: 0.5,
            borderRadius: 1,
            borderColor: colors.grey,
            width: '90%',
            height: 0.5,
            margin: 10,
        }}>
        </View>

        <View style={{flexDirection: 'row', marginTop: 5, justifyContent: 'space-between'}}>

            <Text style={[Typography.medium, {
                color: colors.neutral,
            }]}>{"Status"}</Text>

            <Text style={[Typography.light, {
                color: colors.neutral,
                fontSize: 13
            }]}>{"fulfilled"}</Text>

        </View>
        <View style={{flexDirection: 'row', marginTop: 5, justifyContent: 'space-between'}}>

            <Text style={[Typography.medium, {
                color: colors.neutral,
            }]}>{"Payment"}</Text>

            <Text style={[Typography.light, {
                color: colors.secondary,
                fontSize: 13
            }]}>{"Paid"}</Text>

        </View>
        <View style={{flexDirection: 'row', marginTop: 5, justifyContent: 'space-between'}}>

            <Text style={[Typography.medium, {
                color: colors.neutral,
            }]}>{"Items"}</Text>

            <Text style={[Typography.light, {
                color: colors.secondary,
                fontSize: 13
            }]}>{"2 Items purchased"}</Text>

        </View>

        <View style={{flexDirection: 'row', marginTop: 5, justifyContent: 'space-between'}}>

            <Text style={[Typography.medium, {
                color: colors.neutral,
            }]}>{"Total"}</Text>

            <Text style={[Typography.Bold, {
                color: colors.primaryColor,
                fontSize: 13
            }]}>{"KD 8.06"}</Text>

        </View>

    </View>
};
export default Orders;