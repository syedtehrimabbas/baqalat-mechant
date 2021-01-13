import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import ApiServices from '../../ApiServices/Services';
import {AppInputWithLabel} from '../../common/InputFields';
import {AppStyles} from '../../theme/styles';
import {BackButtonHeader} from '../../common/Headers';
import {Constant} from '../../common/Constant';
import DocumentPicker from 'react-native-document-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import {RoundedButton} from '../../common/Buttons';
import Spinner from '../../common/Spinner';
import {Typography} from '../../theme/Typography';
import colors from '../../theme/colors';

const EditProduct = ({navigation, route}) => {
  const [loading, setLoading] = React.useState(false);
  const [images, setimages] = React.useState([]);
  const [title, settitle] = React.useState('');
  const [des, setdes] = React.useState('');
  const [Category, setCategory] = React.useState('');
  const [tag, settag] = React.useState('');
  const {item} = route.params;
  const selectImages = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      for (const res of results) {
        let image = {
          uri: res.uri,
          type: res.type,
          name: res.name,
        };
        images.push(image);
      }
      console.log(images);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  const onsubmit = () => {
    setLoading(true);
    if (title == '') {
      alert('Please enter title');
      setLoading(false);
    } else if (des == '') {
      alert('Please enter some description');
      setLoading(false);
    } else if (Category == '') {
      alert('Please enter some Category');
      setLoading(false);
    } else if (images == undefined || images.length < 0) {
      setLoading(false);

      alert('Please select some images');
    } else {
      ApiServices.editProduct(
        item.product_id,
        title,
        des,
        Category,
        images,
        (res) => {
          setLoading(false);
          if (res.response.status == 200) {
            alert(res.response.message);
            navigation.goBack();
          } else {
            alert(res.response.message);
          }
        },
      );
    }
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
        <SafeAreaView />

        <BackButtonHeader
          nav={navigation}
          title="Edit Product"
          showSearchButton={false}
        />

        <Text style={[Typography.light, {fontSize: 16, marginStart: 10}]}>
          {Constant.image}
        </Text>
        <View style={AppStyles.rowContainer}>
          <ImageInput onImageSelector={selectImages} />
          <ImageInput />
          <ImageInput />
          <ImageInput />
          <ImageInput />
        </View>

        <AppInputWithLabel
          keyboardType="default"
          returnKeyType="next"
          label="Title"
          isDescription={false}
          value={title}
          onChangeText={(text) => settitle(text)}
        />
        <AppInputWithLabel
          keyboardType="default"
          returnKeyType="next"
          label="Description"
          isDescription={true}
          value={des}
          onChangeText={(text) => setdes(text)}
        />

        <AppInputWithLabel
          keyboardType="default"
          returnKeyType="next"
          label="Category"
          isDescription={false}
          value={Category}
          onChangeText={(text) => setCategory(text)}
        />

        <AppInputWithLabel
          keyboardType="default"
          returnKeyType="next"
          label="Tag (optional)"
          isDescription={false}
          value={tag}
          onChangeText={(text) => settag(text)}
        />

        <RoundedButton
          text="Add product"
          background={colors.yellow}
          onPress={onsubmit}
        />
      </View>
    );
  }
};

const ImageInput = ({onImageSelector}) => {
  return (
    <TouchableOpacity
      style={{
        width: 60,
        height: 60,
        borderWidth: 0.5,
        borderColor: colors.grey,
        borderRadius: 30,
        margin: 5,
        justifyContent: 'center',
        backgroundColor: colors.white,
      }}
      onPress={onImageSelector}>
      <FontAwesome5
        name="plus"
        color={colors.grey}
        size={17}
        style={{
          alignSelf: 'center',
        }}
      />
    </TouchableOpacity>
  );
};
export default EditProduct;
