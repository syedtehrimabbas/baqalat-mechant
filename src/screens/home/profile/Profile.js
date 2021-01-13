import {} from '../../../common/ScreenNames';

import {Avatar, Card, Paragraph, Text, Title} from 'react-native-paper';
import {FlatList, Image, ScrollView, StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {TextHeader} from '../../../common/Headers';
import {images as avatar} from '../../../assets/images';
import colors from '../../../theme/colors';

export default function Profile({navigation}) {
  const [userDetail, setuserDetail] = React.useState({});
  React.useEffect(() => {
    AsyncStorage.getItem('USER').then(async (userDetail) => {
      let user = await JSON.parse(userDetail);
      setuserDetail(user.data);
      console.log('userrrr', user);
    });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <TextHeader nav={navigation} title="Profile" />
      <View style={{marginTop: hp(3)}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Card.Cover
            style={styles.imageTopstyle}
            source={{uri: 'https://picsum.photos/700'}}
          />
          <Card.Cover
            style={styles.imageTopstyle}
            source={{uri: 'https://picsum.photos/700'}}
          />
        </View>
        {/* ---------------------- */}
        <View style={styles.headingTextContainerStyle}>
          <Text style={{color: colors.secondary, fontWeight: 'bold'}}>
            Personal Detail
          </Text>
          <Text
            style={{color: colors.yellow}}
            onPress={() => {
              navigation.navigate(UPDATEPROFILE);
            }}>
            change
          </Text>
        </View>
        {/* ---------------------- */}
        <View style={styles.infocardStyle}>
          <Card.Cover
            style={styles.profileImageStyle}
            source={{uri: 'https://picsum.photos/700'}}
          />
          <View style={{marginLeft: wp(2), paddingTop: hp(1), width: wp(60)}}>
            <Text style={styles.nametextstyle}>{userDetail.name}</Text>
            <View style={styles.textContainer}>
              <Text style={styles.descriptionTextStyle}>
                {userDetail.email}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.descriptionTextStyle}>+9343534534</Text>
            </View>
            <Text style={styles.descriptionTextStyle}>
              {userDetail.address}
            </Text>
          </View>
        </View>
        {/* ---------------------- */}
        <Card style={styles.cardRowStyle}>
          <View style={styles.rowStyle}>
            <Text style={styles.nametextstyle}>Orders</Text>
            <Icon name="ios-arrow-forward" size={21} />
          </View>
        </Card>
        {/* ---------------------- */}
        <Card style={styles.cardRowStyle}>
          <View style={styles.rowStyle}>
            <Text style={styles.nametextstyle}>Change password</Text>
            <Icon name="ios-arrow-forward" size={21} />
          </View>
        </Card>
        {/* ---------------------- */}
        <Card style={styles.cardRowStyle}>
          <View style={styles.rowStyle}>
            <Text style={styles.nametextstyle}>Contact us</Text>
            <Icon name="ios-arrow-forward" size={21} />
          </View>
        </Card>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  imageTopstyle: {
    height: hp(14),
    width: wp(45),
    overflow: 'hidden',
    borderRadius: wp(2),
  },
  profileImageStyle: {
    height: hp(12),
    width: wp(23),
    overflow: 'hidden',
    borderRadius: wp(2),
  },
  headingTextContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(3),
    paddingTop: hp(3),
    paddingBottom: hp(1),
  },
  infocardStyle: {
    backgroundColor: colors.pinklight,
    paddingVertical: hp(1),
    width: wp(95),
    alignSelf: 'center',
    paddingHorizontal: wp(2),
    flexDirection: 'row',
  },
  nametextstyle: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: wp(4),
  },
  descriptionTextStyle: {
    color: colors.neutral,
    fontWeight: '400',
    fontSize: wp(3),
  },
  textContainer: {
    paddingVertical: hp(0.5),
    borderBottomWidth: 0.5,
    borderColor: colors.neutral,
  },
  cardRowStyle: {
    backgroundColor: colors.pinklight,
    marginTop: hp(3),
    width: wp(95),
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
