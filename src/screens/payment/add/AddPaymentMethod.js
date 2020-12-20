import React from 'react';
import {Text, View} from 'react-native';
import {AppStyles} from "../../../theme/styles";
import colors from "../../../theme/colors";
import {BackButtonHeader} from "../../../common/Headers";
import {images} from "../../../assets/images";
import {RoundedButton} from "../../../common/Buttons";
import {AppInputWithLabel} from "../../../common/InputFields";
import {RadioButton} from 'react-native-paper';
import {Typography} from "../../../theme/Typography";

const AddPaymentMethod = ({navigation}) => {

    const [checked, setChecked] = React.useState('first');

    return (
        <View style={[AppStyles.columnContainer, {backgroundColor: colors.white, height: '100%', padding: 10}]}>
            <BackButtonHeader nav={navigation} title={"Add payment method"} showSearchButton={false}/>

            <AppInputWithLabel
                keyboardType="default"
                returnKeyType="next"
                label="SWIFT Code"
                isDescription={false}
            />

            <AppInputWithLabel
                keyboardType="default"
                returnKeyType="next"
                label="Account Number"
                isDescription={false}
            />

            <AppInputWithLabel
                keyboardType="default"
                returnKeyType="next"
                label="Name on Account"
                isDescription={false}
            />

            <AppInputWithLabel
                keyboardType="default"
                returnKeyType="next"
                label="Address"
                isDescription={false}
            />

            <AppInputWithLabel
                keyboardType="default"
                returnKeyType="next"
                label="Mobile number"
                isDescription={false}
            />
            <View style={AppStyles.rowContainer}>
                <RadioButton
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                    style={{margin: 10}}
                />
                <Text
                    style={[Typography.medium, {
                        fontSize: 13,
                        marginEnd: 20
                    }]}>{"I attest that I am the owner and have full authorization to this bank account."}</Text>
            </View>


            <RoundedButton
                iconSrc={images.plus}
                text="Add method"
                background={colors.yellow}
                onPress={() => {
                    navigation.pop()
                }}
            />

        </View>
    );
};

export default AddPaymentMethod;