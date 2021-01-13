import 'react-native-gesture-handler';

import {
  ADD_PAYMENTS,
  ADD_PAYMENT_METHD,
  ADD_PRODUCT,
  HOME,
  LOGIN,
  MY_DRAWER,
  ORDERS,
  PAYMENTS,
  PRODUCTS,
  PROFILE,
  REPORT,
  SETUP_LOCATION,
  SIGNUP,
  WELCOME,
} from './src/common/ScreenNames';
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';

import AddPayment from './src/screens/payment/add/AddPayment';
import AddPaymentMethod from './src/screens/payment/add/AddPaymentMethod';
import AddProduct from './src/screens/products/AddProduct';
import ApiServices from './src/ApiServices/Services';
import AsyncStorage from '@react-native-community/async-storage';
import EditProduct from './src/screens/products/EditProduct';
import HomeScreen from './src/screens/home/HomeScreen';
import {Image} from 'react-native';
import Login from './src/screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import Orders from './src/screens/orders/Orders';
import Payments from './src/screens/payment/Payments';
import {Preferences} from './src/UtilMethods/AppLocalStorage';
import PreferencesKeys from './src/UtilMethods/PreferencesKeys';
import Products from './src/screens/products/Products';
import Profile from './src/screens/home/profile/Profile';
import React from 'react';
import Report from './src/screens/report/Report';
import SetupLocation from './src/screens/save_location/SetupLocation';
import Signup from './src/screens/Signup';
import Splash from './src/screens/Splash';
import {Typography} from './src/theme/Typography';
import UserContext from './src/AuthContaxt/index';
import {UserProvider} from './src/AuthContaxt';
import Welcome from './src/screens/welcome/Welcome';
import colors from './src/theme/colors';
import {createStackNavigator} from '@react-navigation/stack';
import {images} from './src/assets/images';

/*Screens*/

const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();

const CustomDrawerContent = (nav, props) => {
  const value = React.useContext(UserContext);
  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        backgroundColor: colors.primaryColor,
        height: '100%',
        paddingTop: 70,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      }}
      {...props}>
      <DrawerItem
        label="Profile"
        labelStyle={[
          Typography.Bold,
          {
            color: colors.white,
            borderBottomColor: colors.white,
            borderBottomWidth: 1,
            paddingBottom: 10,
          },
        ]}
        icon={({color, size}) => (
          <Image
            style={{width: 20, height: 20, resizeMode: 'contain'}}
            source={images.signup_icon}
          />
        )}
        onPress={() => nav.navigation.navigate(PROFILE)}
      />

      <DrawerItem
        label="Products"
        labelStyle={[
          Typography.Bold,
          {
            color: colors.white,
            borderBottomColor: colors.white,
            borderBottomWidth: 1,
            paddingBottom: 10,
          },
        ]}
        icon={({color, size}) => (
          <Image
            style={{width: 20, height: 20, resizeMode: 'contain'}}
            source={images.product_icon}
          />
        )}
        onPress={() => {
          nav.navigation.navigate(PRODUCTS);
        }}
      />
      <DrawerItem
        label="Orders"
        labelStyle={[
          Typography.Bold,
          {
            color: colors.white,
            borderBottomColor: colors.white,
            borderBottomWidth: 1,
            paddingBottom: 10,
          },
        ]}
        icon={({color, size}) => (
          <Image
            style={{width: 20, height: 20, resizeMode: 'contain'}}
            source={images.orders_icon}
          />
        )}
        onPress={() => {
          nav.navigation.navigate(ORDERS);
        }}
      />

      <DrawerItem
        label="Report"
        labelStyle={[
          Typography.Bold,
          {
            color: colors.white,
            borderBottomColor: colors.white,
            borderBottomWidth: 1,
            paddingBottom: 10,
          },
        ]}
        icon={({color, size}) => (
          <Image
            style={{width: 20, height: 20, resizeMode: 'contain'}}
            source={images.report_icon}
          />
        )}
        onPress={() => {
          nav.navigation.navigate(REPORT);
        }}
      />

      <DrawerItem
        label="Payment"
        labelStyle={[
          Typography.Bold,
          {
            color: colors.white,
            borderBottomColor: colors.white,
            borderBottomWidth: 1,
            paddingBottom: 10,
          },
        ]}
        icon={({color, size}) => (
          <Image
            style={{width: 20, height: 20, resizeMode: 'contain'}}
            source={images.payment_icon}
          />
        )}
        onPress={() => {
          nav.navigation.navigate(PAYMENTS);
        }}
      />

      <DrawerItem
        label="Sign out"
        style={{marginTop: 200, borderBottomWidth: 0}}
        labelStyle={[
          Typography.Bold,
          {
            color: colors.white,
            borderBottomColor: colors.white,
            borderBottomWidth: 1,
            paddingBottom: 10,
          },
        ]}
        icon={({color, size}) => (
          <Image
            style={{width: 20, height: 20, resizeMode: 'contain'}}
            source={images.payment_icon}
          />
        )}
        onPress={() =>
          ApiServices.logout(() => {
            AsyncStorage.removeItem('USER').then(() => {
              value.setUser(false);
            });
          })
        }
      />
    </DrawerContentScrollView>
  );
};

function MyDrawer() {
  const value = React.useContext(UserContext);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName={HOME}>
      <Drawer.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          // borderBottomWidth:
          title: 'Home Sceen',
          drawerIcon: ({focused, color, size}) => (
            <Image source={images.signup_icon} />
          ),
        }}
      />
      <Drawer.Screen
        name={PRODUCTS}
        component={Products}
        options={{
          // borderBottomWidth:
          title: 'Products',
          drawerIcon: ({focused, color, size}) => (
            <Image source={images.signup_icon} />
          ),
        }}
      />
      <Drawer.Screen
        name={PROFILE}
        component={Profile}
        options={{
          title: 'Profile',
          drawerIcon: ({focused, color, size}) => (
            <Image source={images.signup_icon} />
          ),
        }}
      />

      <Drawer.Screen
        name={REPORT}
        component={Report}
        options={{
          title: 'Reports',
          drawerIcon: ({focused, color, size}) => (
            <Image source={images.signup_icon} />
          ),
        }}
      />
      <Drawer.Screen
        name={ORDERS}
        component={Orders}
        options={{
          title: 'Orders',
          drawerIcon: ({focused, color, size}) => (
            <Image source={images.signup_icon} />
          ),
        }}
      />
      <Drawer.Screen
        name={PAYMENTS}
        component={Payments}
        options={{
          title: 'Payments',
          drawerIcon: ({focused, color, size}) => (
            <Image source={images.signup_icon} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  const [user, setUser] = React.useState(false);
  const [token, setToken] = React.useState('');
  const [userSession, setUserSession] = React.useState({});
  const [isSplash, setSplash] = React.useState(true);
  const [products, setproducts] = React.useState([]);

  let state = {
    user: user,
    setUser: setUser,
    userSession: userSession,
    setUserSession: setUserSession,
    token: token,
    setToken: setToken,
    splash: isSplash,
    setSplash: setSplash,
    products: products,
    setproducts: setproducts,
  };
  console.log(user, 'user');
  React.useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('USER').then((user) => {
        console.log('user', user);
        if (user !== null) {
          setUser(true);
          setSplash(false);
          setUserSession(user);
          setToken(user.token);
        } else {
          setUser(false);
          setSplash(false);
        }
      });
    }, 2000);
  }, []);

  if (isSplash) {
    return <Splash />;
  } else {
    return (
      <UserProvider value={state}>
        <NavigationContainer>
          <RootStack.Navigator headerMode="none" initialRouteName={WELCOME}>
            {!user ? (
              <>
                <RootStack.Screen name={WELCOME} component={Welcome} />
                <RootStack.Screen
                  name={SETUP_LOCATION}
                  component={SetupLocation}
                />
                <RootStack.Screen name={SIGNUP} component={Signup} />
                <RootStack.Screen name={LOGIN} component={Login} />
              </>
            ) : (
              <>
                <RootStack.Screen name={MY_DRAWER} component={MyDrawer} />
                <RootStack.Screen name={ORDERS} component={Orders} />
                <RootStack.Screen name={PRODUCTS} component={Products} />
                <RootStack.Screen name={ADD_PRODUCT} component={AddProduct} />
                <RootStack.Screen name={PAYMENTS} component={Payments} />
                <RootStack.Screen
                  name={'EditProduct'}
                  component={EditProduct}
                />

                <RootStack.Screen name={ADD_PAYMENTS} component={AddPayment} />
                <RootStack.Screen
                  name={ADD_PAYMENT_METHD}
                  component={AddPaymentMethod}
                />
              </>
            )}
          </RootStack.Navigator>
        </NavigationContainer>
      </UserProvider>
    );
  }
};

export default App;
