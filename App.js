import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Preferences} from './src/UtilMethods/AppLocalStorage';
import PreferencesKeys from './src/UtilMethods/PreferencesKeys';
/*Screens*/
import Splash from './src/screens/Splash';
import {
    ADD_PAYMENT_METHD,
    ADD_PAYMENTS,
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
    WELCOME
} from "./src/common/ScreenNames";
import {UserProvider} from './src/AuthContaxt';
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Welcome from "./src/screens/welcome/Welcome";
import SetupLocation from "./src/screens/save_location/SetupLocation";
import UserContext from "./src/AuthContaxt/index";
import HomeScreen from "./src/screens/home/HomeScreen";
import Profile from "./src/screens/home/profile/Profile";
import {Image} from "react-native";
import {images} from "./src/assets/images";
import colors from "./src/theme/colors";
import {Typography} from "./src/theme/Typography";
import Products from "./src/screens/products/Products";
import AddProduct from "./src/screens/products/AddProduct";
import Orders from "./src/screens/orders/Orders";
import Report from "./src/screens/report/Report";
import Payments from "./src/screens/payment/Payments";
import AddPayment from "./src/screens/payment/add/AddPayment";
import AddPaymentMethod from "./src/screens/payment/add/AddPaymentMethod";

const BikesTab = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();

const CustomDrawerContent = (nav, props) => {
    const value = React.useContext(UserContext);
    return (
        <DrawerContentScrollView

            contentContainerStyle={{
                backgroundColor: colors.primaryColor,
                height: '100%',
                paddingTop:70,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10
            }}
            {...props}>

            <DrawerItem
                label="Profile"
                labelStyle={[Typography.Bold, {
                    color: colors.white,
                    borderBottomColor: colors.white,
                    borderBottomWidth: 1,
                    paddingBottom: 10
                }]}
                icon={({color, size}) => <Image style={{width: 20, height: 20, resizeMode: 'contain'}}
                                                source={images.signup_icon}/>}
                onPress={() => {
                }}
            />

            <DrawerItem
                label="Products"
                labelStyle={[Typography.Bold, {
                    color: colors.white,
                    borderBottomColor: colors.white,
                    borderBottomWidth: 1,
                    paddingBottom: 10
                }]}
                icon={({color, size}) => <Image style={{width: 20, height: 20, resizeMode: 'contain'}}
                                                source={images.product_icon}/>}
                onPress={() => {
                    nav.navigation.navigate(PRODUCTS)
                }}
            />
            <DrawerItem
                label="Orders"
                labelStyle={[Typography.Bold, {
                    color: colors.white,
                    borderBottomColor: colors.white,
                    borderBottomWidth: 1,
                    paddingBottom: 10
                }]}
                icon={({color, size}) => <Image style={{width: 20, height: 20, resizeMode: 'contain'}}
                                                source={images.orders_icon}/>}
                onPress={() => {
                    nav.navigation.navigate(ORDERS)
                }}
            />

            <DrawerItem
                label="Report"
                labelStyle={[Typography.Bold, {
                    color: colors.white,
                    borderBottomColor: colors.white,
                    borderBottomWidth: 1,
                    paddingBottom: 10
                }]}
                icon={({color, size}) => <Image style={{width: 20, height: 20, resizeMode: 'contain'}}
                                                source={images.report_icon}/>}
                onPress={() => {
                    nav.navigation.navigate(REPORT)
                }}
            />

            <DrawerItem
                label="Payment"
                labelStyle={[Typography.Bold, {
                    color: colors.white,
                    borderBottomColor: colors.white,
                    borderBottomWidth: 1,
                    paddingBottom: 10
                }]}
                icon={({color, size}) => <Image style={{width: 20, height: 20, resizeMode: 'contain'}}
                                                source={images.payment_icon}/>}
                onPress={() => {
                    nav.navigation.navigate(PAYMENTS)
                }}
            />

        </DrawerContentScrollView>
    );
};
const ProductTabs = () => {
    return (<RootStack.Navigator headerMode="none" initialRouteName={Products}>

        <RootStack.Screen name={PRODUCTS} component={Products}/>
        <RootStack.Screen name={ADD_PRODUCT} component={AddProduct}/>
    </RootStack.Navigator>)
};

const OrdersStack = () => {
    return (<RootStack.Navigator headerMode="none" initialRouteName={Orders}>

        <RootStack.Screen name={ORDERS} component={Orders}/>
    </RootStack.Navigator>)
};

const ReportStack = () => {
    return (<RootStack.Navigator headerMode="none" initialRouteName={Report}>

        <RootStack.Screen name={REPORT} component={Report}/>
    </RootStack.Navigator>)
};

function MyDrawer() {
    const value = React.useContext(UserContext);

    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            initialRouteName={HOME}>
            <Drawer.Screen
                name={HOME}
                component={HomeScreen}
                options={{
                    // borderBottomWidth:
                    title: 'Home Sceen',
                    drawerIcon: ({focused, color, size}) => (
                        <Image
                            source={images.signup_icon}
                        />)
                }}
            />
            <Drawer.Screen
                name={PROFILE}
                component={Profile}
                options={{
                    title: 'Profile',
                    drawerIcon: ({focused, color, size}) => (
                        <Image
                            source={images.signup_icon}
                        />)
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

    let state = {
        user: user,
        setUser: setUser,
        userSession: userSession,
        setUserSession: setUserSession,
        token: token,
        setToken: setToken,
        splash: isSplash,
        setSplash: setSplash
    };

    React.useEffect(() => {
        setTimeout(() => {
            setSplash(false);
            Preferences._GetStoredData(PreferencesKeys.USER).then((user) => {
                if (user !== null) {
                    setUser(true);
                    setUserSession(user);
                    setToken(user.token);
                } else {
                    setUser(false);
                }
            });

        }, 2000);
    }, []);

    if (isSplash) {
        return <Splash/>;
    } else {
        return (
            <UserProvider value={state}>
                <NavigationContainer>
                    <RootStack.Navigator headerMode="none" initialRouteName={HomeScreen}>

                        <RootStack.Screen name={MY_DRAWER} component={MyDrawer}/>

                        <RootStack.Screen name={WELCOME} component={Welcome}/>
                        <RootStack.Screen name={SETUP_LOCATION} component={SetupLocation}/>
                        <RootStack.Screen name={LOGIN} component={Login}/>
                        <RootStack.Screen name={PRODUCTS} component={ProductTabs}/>
                        <RootStack.Screen name={ORDERS} component={OrdersStack}/>
                        <RootStack.Screen name={REPORT} component={ReportStack}/>
                        <RootStack.Screen name={PAYMENTS} component={Payments}/>
                        <RootStack.Screen name={ADD_PAYMENTS} component={AddPayment}/>
                        <RootStack.Screen name={ADD_PAYMENT_METHD} component={AddPaymentMethod}/>

                        <RootStack.Screen name={SIGNUP} component={Signup}/>

                    </RootStack.Navigator>
                </NavigationContainer>
            </UserProvider>
        );
    }
};

export default App;
