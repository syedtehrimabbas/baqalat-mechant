import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';

import {ADD_PRODUCT} from '../../common/ScreenNames';
import ApiServices from '../../ApiServices/Services';
import {AppStyles} from '../../theme/styles';
import {BackButtonHeader} from '../../common/Headers';
import {Constant} from '../../common/Constant';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {RoundedButton} from '../../common/Buttons';
import Spinner from '../../common/Spinner';
import {Typography} from '../../theme/Typography';
import UserContext from '../../AuthContaxt';
import colors from '../../theme/colors';
import {images} from '../../assets/images';

const Products = ({navigation}) => {
  const value = useContext(UserContext);

  const [showDelete, setShowDelete] = React.useState(false);
  const [products, setproducts] = React.useState([]);
  const [loading, setloading] = React.useState(true);
  const [selectedItem, setselectedItem] = React.useState(false);

  const ProductItem = ({item}) => {
    return (
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          width: '95%',
          alignSelf: 'center',
          height: 100,
          backgroundColor: colors.lightRed,
          borderRadius: 20,
          margin: 5,
        }}>
        <Image
          source={images.tomato}
          style={{
            width: 60,
            height: 60,
            backgroundColor: colors.white,
            borderRadius: 30,
            borderWidth: 0.5,
            padding: 10,
            borderColor: colors.grey,
            alignSelf: 'center',
          }}
        />

        <View
          style={{
            flexDirection: 'column',
            marginStart: 5,
            alignSelf: 'center',
          }}>
          <Text style={[Typography.Bold, {}]}>{item.title}</Text>

          <Text
            style={[
              Typography.Bold,
              {
                color: colors.primaryColor,
              },
            ]}>
            'KD0.' {item.price}
          </Text>

          <Text
            style={[
              Typography.light,
              {
                color: colors.neutral,
                fontSize: 13,
              },
            ]}>
            {'grocery'}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            position: 'absolute',
            right: 10,
            alignSelf: 'center',
          }}>
          <FontAwesome5
            name="edit"
            color={colors.grey}
            size={17}
            onPress={() => navigation.navigate('EditProduct', {item: item})}
          />

          <TouchableOpacity
            onPress={() => {
              setShowDelete(true);
              setselectedItem(item);
            }}>
            <FontAwesome5
              name="trash"
              color={colors.red}
              size={17}
              style={{marginTop: 15}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  React.useEffect(() => {
    ApiServices.getallProducts((res) => {
      setloading(false);
      console.log('soome', res);
      setproducts(res.response);
    });
  }, []);

  const onModalClose = () => {
    setShowDelete(!showDelete);
  };
  if (loading) {
    return <Spinner loading={loading} />;
  } else {
    return (
      <View
        style={[
          AppStyles.columnContainer,
          {backgroundColor: colors.white, height: '100%', padding: 10},
        ]}>
        <BackButtonHeader
          nav={navigation}
          title="All Products"
          showSearchButton={true}
        />

        <FlatList
          data={products}
          showsVerticalScrollIndicator={false}
          renderItem={ProductItem}
          keyExtractor={(item, index) => index}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={showDelete}
          onRequestClose={() => {
            onModalClose();
          }}>
          <View
            style={[
              AppStyles.containerStyle,
              {padding: 20},
              AppStyles.centerItems,
            ]}>
            <Image
              source={images.alert}
              style={{width: 100, height: 100, resizeMode: 'contain'}}
            />
            <Text style={[Typography.Bold, {fontSize: 22, marginTop: 10}]}>
              {Constant.confirmation}
            </Text>

            <Text
              style={[
                Typography.light,
                {
                  marginTop: 5,
                  textAlign: 'center',
                  color: colors.neutral,
                },
              ]}>
              {'Are you sure you want to delete this'}
            </Text>

            <RoundedButton
              text="Yes, delete"
              background={colors.yellow}
              onPress={() => {
                setloading(true);
                console.log(selectedItem, products);
                ApiServices.deleteProduct(selectedItem.product_id, (res) => {
                  setloading(false);
                  if (res.response.status == 200) {
                    setloading(false);
                    let items = products.filter(
                      (i) => i.product_id !== selectedItem.product_id,
                    );
                    console.log('items', items);
                    setproducts(items);
                  } else {
                    setLoading(false);
                    alert(res.response.message);
                  }
                });

                onModalClose();
              }}
            />
            <RoundedButton
              border={true}
              textColor={colors.grey}
              text="No, cancel"
              background={colors.white}
              onPress={() => {
                onModalClose();
              }}
            />
          </View>
        </Modal>

        <RoundedButton
          text="Add product"
          background={colors.yellow}
          onPress={() => {
            navigation.navigate(ADD_PRODUCT);
          }}
        />
      </View>
    );
  }
};

export default Products;
