import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {AppStyles} from "../../theme/styles";
import colors from "../../theme/colors";
import {BackButtonHeader} from "../../common/Headers";
import {Typography} from "../../theme/Typography";
import {Menu} from 'react-native-paper';
import {images} from "../../assets/images";
import {Constant} from "../../common/Constant";
import {REPORT} from "../../common/ScreenNames";

const Report = ({navigation}) => {

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <View style={[AppStyles.columnContainer, {backgroundColor: colors.white, height: '100%', padding: 10}]}>
            <BackButtonHeader nav={navigation} title={REPORT} showSearchButton={true}/>

            <View style={{
                padding: 10,
                flexDirection: 'row',
                width: '95%',
                alignSelf: 'center',
                backgroundColor: colors.lightRed,
                borderRadius: 20,
                margin: 5
            }}>
                <View style={{
                    width: 60,
                    height: 60,
                    backgroundColor: colors.lightRedX,
                    borderRadius: 20,
                    alignSelf: 'center',
                    justifyContent: 'center',
                }}>
                    <Image source={images.balance_icon} style={{
                        width: 40,
                        height: 40,
                        alignSelf: 'center'
                    }}/>

                </View>

                <View style={{flexDirection: 'column', marginStart: 5, alignSelf: 'center'}}>

                    <Text style={[Typography.Bold, {
                        color: colors.primaryColor,
                    }]}>{"KD1,203.35"}</Text>

                    <Text style={[Typography.light, {
                        color: colors.neutral,
                        fontSize: 13
                    }]}>{"current balance"}</Text>

                </View>

                <View style={{alignSelf: 'center', position: 'absolute', right: 0}}>
                    <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<TouchableOpacity style={{height: 15, width: 15}} onPress={openMenu}>
                            <Image source={images.menu_icon} style={{resizeMode: 'contain', height: 15, width: 5}}/>
                        </TouchableOpacity>}>
                        <Menu.Item onPress={() => {
                        }} title="Withdraw"/>
                    </Menu>
                </View>
            </View>
            <Text style={[Typography.Bold, {marginStart: 10, color: colors.neutral}]}>
                {Constant.saleReport}
            </Text>

            <View style={[AppStyles.rowContainer]}>
                <View style={[AppStyles.columnContainer, {margin:5,flex: 1,borderRadius:10,borderWidth:0.5,borderColo:colors.grey}, AppStyles.centerItems]}>
                    <Text style={[Typography.Bold, {color: colors.secondary}]}>{"439"}</Text>
                    <Text style={[Typography.medium, {color: colors.neutral}]}>{"Sale"}</Text>

                </View>

                <View style={[AppStyles.columnContainer, {margin:5,flex: 1,borderRadius:10,borderWidth:0.5,borderColo:colors.grey}, AppStyles.centerItems]}>
                    <Text style={[Typography.Bold, {color: colors.secondary}]}>{"419"}</Text>
                    <Text style={[Typography.medium, {color: colors.neutral}]}>{"Orders"}</Text>

                </View>

                <View style={[AppStyles.columnContainer, {margin:5,flex: 1,borderRadius:10,borderWidth:0.5,borderColo:colors.grey}, AppStyles.centerItems]}>
                    <Text style={[Typography.Bold, {color: colors.secondary}]}>{"20"}</Text>
                    <Text style={[Typography.medium, {color: colors.neutral}]}>{"Close"}</Text>

                </View>
            </View>

            <View style={[AppStyles.rowContainer, {flex: 0, padding: 10, justifyContent: 'space-between'}]}>
                <Text style={[Typography.Bold, {color: colors.neutral}]}>
                    {Constant.highlight}
                </Text>

                <TouchableOpacity>
                    <Text style={[Typography.Bold, {fontSize: 12, color: colors.primaryColor}]}>
                        {Constant.viewAll}
                    </Text>

                </TouchableOpacity>

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
export default Report;