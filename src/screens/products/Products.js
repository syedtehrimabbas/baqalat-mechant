import React from 'react';
import {FlatList, Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {AppStyles} from "../../theme/styles";
import colors from "../../theme/colors";
import {BackButtonHeader} from "../../common/Headers";
import {images} from "../../assets/images";
import {Typography} from "../../theme/Typography";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {RoundedButton} from "../../common/Buttons";
import {ADD_PRODUCT} from "../../common/ScreenNames";
import {Constant} from "../../common/Constant";

const Products = ({navigation}) => {
    const [showDelete, setShowDelete] = React.useState(false);

    const onDelete = () => {
        setShowDelete(true)
    };

    const onModalClose = () => {
        setShowDelete(!showDelete);
    };
    return (
        <View style={[AppStyles.columnContainer, {backgroundColor: colors.white, height: '100%', padding: 10}]}>
            <BackButtonHeader nav={navigation} title="All Products" showSearchButton={true}/>

            <FlatList
                data={[1, 1, 1, 1, 1, 1, 1, 1]}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <ProductItem navigation={navigation} item={item} onDelete={onDelete}/>}
                keyExtractor={(item, index) => index}
            />


            <Modal
                animationType="slide"
                transparent={true}
                visible={showDelete}
                onRequestClose={() => {
                    onModalClose()
                }}
            ><View style={[AppStyles.containerStyle, {padding: 20}, AppStyles.centerItems]}>

                <Image source={images.alert} style={{width: 100, height: 100, resizeMode: 'contain'}}/>
                <Text style={[Typography.Bold, {fontSize: 22, marginTop: 10}]}>{Constant.confirmation}</Text>

                <Text style={[Typography.light, {
                    marginTop: 5,
                    textAlign: 'center',
                    color: colors.neutral
                }]}>{"Are you sure you want to delete this"}</Text>

                <RoundedButton
                    text="Yes, delete"
                    background={colors.yellow}
                    onPress={() => {
                        onModalClose()
                    }}
                />
                <RoundedButton
                    border={true}
                    textColor={colors.grey}
                    text="No, cancel"
                    background={colors.white}
                    onPress={() => {
                        onModalClose()
                    }}
                />

            </View>

            </Modal>

            <RoundedButton
                text="Add product"
                background={colors.yellow}
                onPress={() => {
                    navigation.navigate(ADD_PRODUCT)
                }}
            />

        </View>
    );
};

const ProductItem = ({navigation, item, onDelete}) => {
    return <View style={{
        padding: 10,
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        height: 100,
        backgroundColor: colors.lightRed,
        borderRadius: 20,
        margin: 5
    }}>
        <Image source={images.tomato} style={{
            width: 60,
            height: 60,
            backgroundColor: colors.white,
            borderRadius: 30,
            borderWidth: 0.5,
            padding: 10,
            borderColor: colors.grey,
            alignSelf: 'center'
        }}/>

        <View style={{flexDirection: 'column', marginStart: 5, alignSelf: 'center'}}>
            <Text style={[Typography.Bold, {}]}>{"Fresh Tomato (0.20 kg)"}</Text>

            <Text style={[Typography.Bold, {
                color: colors.primaryColor,
            }]}>{"KD0.75"}</Text>

            <Text style={[Typography.light, {
                color: colors.neutral,
                fontSize: 13
            }]}>{"grocery"}</Text>

        </View>

        <View style={{flexDirection: 'column', position: 'absolute', right: 10, alignSelf: 'center'}}>
            <FontAwesome5 name="edit" color={colors.grey} size={17}/>

            <TouchableOpacity onPress={onDelete}>
                <FontAwesome5 name="trash" color={colors.red} size={17} style={{marginTop: 15}}/>
            </TouchableOpacity>

        </View>

    </View>
};
export default Products;