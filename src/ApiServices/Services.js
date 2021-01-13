export const BASE_API_URL = 'https://baqalat.cyphersol.com/BaqalatMarchantApi';

import AsyncStorage from '@react-native-community/async-storage';
let endPoints = {
  signup: 'signup',
  signin: 'login',
  activate: 'activate',
  cars: 'car_adds',
  bikes: 'bike_adds',
  properties: 'property_adds',
  carDetails: 'car_add_detail',
  bikeDetails: 'bike_add_detail',
  propertyDetails: 'property_add_detail',
};

class Services {
  token = async () => {
    let user = await AsyncStorage.getItem('USER');
    let userToken = JSON.parse(user);
    return userToken.accesstoken;
  };

  getAbsoluteUrl = (endPoint) => {
    console.log('End Pint=> ' + endPoint + '\nUrl=> ', BASE_API_URL);
    console.log(BASE_API_URL + endPoint);
    return BASE_API_URL + endPoint;
  };

  requestHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  //-------------SignUp-------------------
  signup(data) {
    console.log('post data : ', data);

    let options = {
      headers: this.requestHeaders,
      method: 'POST',
    };

    options.body = new FormData();
    for (let key in data) {
      options.body.append(key, data[key]);
    }

    return fetch(this.getAbsoluteUrl(endPoints.signup), {
      method: 'POST',
      headers: this.requestHeaders,
      body: data,
    });
  }

  //-------------SignIn-------------------
  signIn(email, password, callback) {
    console.log('post data : ', email, password);
    var myHeaders = new Headers();
    myHeaders.append(
      'Cookie',
      '__cfduid=da72c5ddfe79870dfd326b0a7d1c5604f1609167265',
    );

    var formdata = new FormData();
    formdata.append('email', email);
    formdata.append('password', password);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://baqalat.cyphersol.com/BaqalatMarchantApi/login',
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) =>
        callback({isSuccess: true, response: JSON.parse(result)}),
      )
      .catch((error) => callback({isSuccess: false, response: error}));
  }

  //-------------getCarAdDetails-------------------
  getCarAdDetails(token, id) {
    return fetch(this.getAbsoluteUrl(`${endPoints.carDetails}/add_id/${id}`), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer' + ' ' + token,
      },
    });
  }

  //-------------getBikeAds-------------------
  getBikeAds() {
    return fetch(this.getAbsoluteUrl(endPoints.bikes), {
      method: 'GET',
      headers: this.requestHeaders,
    });
  }

  //-------------getBikeAdDetails-------------------
  getBikeAdDetails(token, id) {
    return fetch(this.getAbsoluteUrl(`${endPoints.bikeDetails}/add_id/${id}`), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer' + ' ' + token,
      },
    });
  }

  //-------------getPropertiesAds-------------------
  getPropertiesAds() {
    return fetch(this.getAbsoluteUrl(endPoints.properties), {
      method: 'GET',
      headers: this.requestHeaders,
    });
  }

  //-------------getBikeAdDetails-------------------
  async getstoreproduct(callback) {
    let token = await this.token();
    var myHeaders = new Headers();
    myHeaders.append('accesstoken', token);
    myHeaders.append(
      'Cookie',
      '__cfduid=dc4943bba071aa449921e0848668777001608456887',
    );

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'https://baqalat.cyphersol.com/BaqalatMarchantApi/homedata',
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) =>
        callback({isSuccess: true, response: JSON.parse(result)}),
      )
      .catch((error) => callback({isSuccess: false, response: error}));
  }
  logout = async () => {
    let token = await this.token();
    var myHeaders = new Headers();
    myHeaders.append('accesstoken', token);
    myHeaders.append(
      'Cookie',
      '__cfduid=dc4943bba071aa449921e0848668777001608456887',
    );

    var raw = '';

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://baqalat.cyphersol.com/BaqalatMarchantApi/storelogout',
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) =>
        callback({isSuccess: true, response: JSON.parse(result)}),
      )
      .catch((error) => callback({isSuccess: false, response: error}));
  };
  getallProducts = async (callback) => {
    let token = await this.token();
    var myHeaders = new Headers();
    myHeaders.append('accesstoken', token);
    myHeaders.append(
      'Cookie',
      '__cfduid=dc4943bba071aa449921e0848668777001608456887',
    );

    var raw = '';

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://baqalat.cyphersol.com/BaqalatMarchantApi/getstoreproduct',
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) =>
        callback({isSuccess: true, response: JSON.parse(result)}),
      )
      .catch((error) => callback({isSuccess: false, response: error}));
  };

  addproduct = async (title, des, Category, images, callback) => {
    let token = await this.token();
    var myHeaders = new Headers();
    myHeaders.append('accesstoken', token);
    myHeaders.append(
      'Cookie',
      '__cfduid=dc4943bba071aa449921e0848668777001608456887',
    );

    var formdata = new FormData();
    formdata.append('title', title);
    formdata.append('description', des);
    formdata.append('catgry_id', Category);
    formdata.append('price', '100');
    images.map((i) => formdata.append('image[]', i));
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://baqalat.cyphersol.com/BaqalatMarchantApi/Addproduct',
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) =>
        callback({isSuccess: true, response: JSON.parse(result)}),
      )
      .catch((error) => callback({isSuccess: false, response: error}));
  };

  editProduct = async (id, title, des, Category, images, callback) => {
    let token = await this.token();
    var myHeaders = new Headers();
    myHeaders.append('accesstoken', token);
    myHeaders.append(
      'Cookie',
      '__cfduid=dc4943bba071aa449921e0848668777001608456887',
    );

    var formdata = new FormData();
    formdata.append('product_id', id);
    formdata.append('title', title);
    formdata.append('description', des);
    formdata.append('catgry_id', Category);
    formdata.append('price', '100');
    images.map((i) => formdata.append('image[]', i));
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://baqalat.cyphersol.com/BaqalatMarchantApi/Addproduct',
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) =>
        callback({isSuccess: true, response: JSON.parse(result)}),
      )
      .catch((error) => callback({isSuccess: false, response: error}));
  };

  deleteProduct = async (id, callback) => {
    let token = await this.token();
    var myHeaders = new Headers();
    myHeaders.append('accesstoken', token);
    myHeaders.append(
      'Cookie',
      '__cfduid=dc4943bba071aa449921e0848668777001608456887',
    );

    var formdata = new FormData();
    formdata.append('product_id', id);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://baqalat.cyphersol.com/BaqalatMarchantApi/deletestoreproduct',
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) =>
        callback({isSuccess: true, response: JSON.parse(result)}),
      )
      .catch((error) => callback({isSuccess: false, response: error}));
  };
}

const ApiServices = new Services();
export default ApiServices;
