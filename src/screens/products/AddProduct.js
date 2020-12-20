import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import colors from "../../theme/colors";
import {RoundedButton} from "../../common/Buttons";
import {AppStyles} from "../../theme/styles";
import {BackButtonHeader} from "../../common/Headers";
import {AppInputWithLabel} from "../../common/InputFields";
import {Typography} from "../../theme/Typography";
import {Constant} from "../../common/Constant";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const AddProduct = ({navigation}) => {
    const [loading, setLoading] = React.useState(false);

    return (<View style={[AppStyles.columnContainer, {backgroundColor: colors.white, height: '100%', padding: 10}]}>
        <SafeAreaView/>

        <BackButtonHeader nav={navigation} title="Add Product" showSearchButton={false}/>

        <Text style={[Typography.light, {fontSize: 16, marginStart: 10}]}>
            {Constant.image}
        </Text>
        <View style={AppStyles.rowContainer}>
            <ImageInput/>
            <ImageInput/>
            <ImageInput/>
            <ImageInput/>
            <ImageInput/>
        </View>

        <AppInputWithLabel
            keyboardType="default"
            returnKeyType="next"
            label="Title"
            isDescription={false}
        />
        <AppInputWithLabel
            keyboardType="default"
            returnKeyType="next"
            label="Description"
            isDescription={true}
        />

        <AppInputWithLabel
            keyboardType="default"
            returnKeyType="next"
            label="Category"
            isDescription={false}
        />

        <AppInputWithLabel
            keyboardType="default"
            returnKeyType="next"
            label="Tag (optional)"
            isDescription={false}
        />

        <RoundedButton
            text="Add product"
            background={colors.yellow}
            onPress={() => {
            }}
        />

    </View>);
};
const ImageInput = () => {
    return (<TouchableOpacity style={{
        width: 60,
        height: 60,
        borderWidth: 0.5,
        borderColor: colors.grey,
        borderRadius: 30,
        margin: 5,
        justifyContent: 'center',
        backgroundColor: colors.white
    }} onPress={() => alert("choose image")}>
        <FontAwesome5 name="plus" color={colors.grey} size={17} style={{
            alignSelf: 'center'
        }}/>
    </TouchableOpacity>)
};
export default AddProduct;