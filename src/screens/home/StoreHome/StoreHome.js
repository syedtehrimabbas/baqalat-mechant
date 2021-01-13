import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import ApiServices from '../../../ApiServices/Services';
import AppCardView from '../../../components/AppCardView';
import {AppStyles} from '../../../theme/styles';
import {Constant} from '../../../common/Constant';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {PRODUCTS} from '../../../common/ScreenNames';
import Spinner from '../../../common/Spinner';
import {Typography} from '../../../theme/Typography';
import colors from '../../../theme/colors';
import {images} from '../../../assets/images';

const StoreHome = ({navigation}) => {
  const [products, setproducts] = useState([]);
  const [popularProducts, setpopularProducts] = useState([]);
  const [loading, setLoading] = React.useState(true);
  const [profile, setprofile] = useState({});

  React.useEffect(() => {
    ApiServices.getstoreproduct((res) => {
      setLoading(false);
      console.log('store99999', res);
      setproducts(res.response.products);
      setpopularProducts(res.response.popular_product);
      setprofile(res.response.profile);
    });
  }, []);
  if (loading) {
    return <Spinner loading={loading} />;
  } else {
    return (
      <ScrollView>
        <View
          style={[
            AppStyles.columnContainer,
            {backgroundColor: colors.white, height: '100%', padding: 10},
          ]}>
          <AppCardView
            style={{
              width: 100,
              height: 100,
              alignSelf: 'center',
              marginTop: 10,
              justifyContent: 'center',
              backgroundColor: colors.white,
              padding: 10,
            }}
            cornerRadius={10}
            cardElevation={5}
            children={
              <View style-={AppStyles.columnContainer}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={images.store_logo}
                />
              </View>
            }
          />

          <Text
            style={[
              Typography.Bold,
              {fontSize: 20, marginTop: 10, textAlign: 'center'},
            ]}>
            {profile.name}
          </Text>
          <View style={[AppStyles.rowContainer, AppStyles.centerItems]}>
            <FontAwesome5
              name="map-marker-alt"
              color={colors.neutral}
              size={15}
            />

            <Text
              style={[
                Typography.light,
                {
                  marginTop: 5,
                  textAlign: 'center',
                  color: colors.neutral,
                },
              ]}>
              {profile.address}
            </Text>
          </View>

          <View
            style={[
              AppStyles.rowContainer,
              {flex: 0, padding: 10, justifyContent: 'space-between'},
            ]}>
            <Text style={[Typography.Bold, {fontSize: 16}]}>
              {Constant.popular.toUpperCase()}
            </Text>
          </View>

          <FlatList
            horizontal
            data={popularProducts}
            showsHorizontalScrollIndicator={false}
            renderItem={ProductItem}
            keyExtractor={(index) => index}
          />

          <View
            style={[
              AppStyles.rowContainer,
              {flex: 0, padding: 10, justifyContent: 'space-between'},
            ]}>
            <Text style={[Typography.Bold, {fontSize: 16}]}>
              {Constant.products.toUpperCase()}
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate(PRODUCTS)}>
              <Text style={[Typography.Bold, {color: colors.primaryColor}]}>
                {Constant.viewAll}
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal
            data={popularProducts}
            showsHorizontalScrollIndicator={false}
            renderItem={ProductItem}
            keyExtractor={(item, index) => index}
          />
        </View>
      </ScrollView>
    );
  }
};
const ProductItem = ({item}) => {
  console.log('item------------------', item);
  return (
    <AppCardView
      style={{
        width: 170,
        height: 230,
        margin: 10,
        backgroundColor: colors.white,
        padding: 10,
      }}
      cornerRadius={20}
      cardElevation={2}
      children={
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            borderColor: colors.light,
            flexDirection: 'column',
          }}>
          <View
            style={{
              position: 'absolute',
              bottom: -10,
              right: -10,
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 10,
              backgroundColor: colors.accentColor,
            }}>
            <FontAwesome5
              name="plus"
              color={colors.white}
              size={17}
              style={{
                alignSelf: 'center',
              }}
            />
          </View>

          <View
            style={{
              position: 'absolute',
              top: -10,
              left: -12,
              width: 70,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomRightRadius: 10,
              backgroundColor: colors.primaryColor,
            }}>
            <Text
              style={[Typography.light, {color: colors.white, fontSize: 13}]}>
              {'10% Off'}
            </Text>
          </View>

          <FontAwesome5
            name="heart"
            color={colors.red}
            size={25}
            style={{
              alignSelf: 'flex-end',
            }}
          />
          <Image
            style={{height: 100, width: 100, alignSelf: 'center'}}
            source={images.tomato}
          />
          <Text
            style={[
              Typography.Bold,
              {
                marginTop: 10,
              },
            ]}>
            {item.title}
          </Text>

          <Text
            style={[
              Typography.Bold,
              {
                position: 'absolute',
                bottom: 0,
                left: 0,
                color: colors.primaryColor,
              },
            ]}>
            'KD0.'{item.price}
          </Text>
        </View>
      }
    />
  );
};
export default StoreHome;
