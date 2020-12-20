import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {Text} from 'react-native';
/*Screens*/
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Icon} from "react-native-paper";
import colors from "../../theme/colors";
import {PROFILE, STORE_HOME} from "../../common/ScreenNames";
import StoreHome from "./StoreHome/StoreHome";
import Profile from "./profile/Profile";
import {Typography} from "../../theme/Typography";

const Tab = createMaterialBottomTabNavigator();

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: {},
        }
    }

    render() {
        return (
            <Tab.Navigator
                barStyle={{
                    backgroundColor: colors.white,
                    paddingTop: 5,
                    paddingBottom: 5,
                    borderTopWidth: 0.5,
                    borderTopColor: colors.grey
                }}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {

                        return <Icon name='ios-list-box' size={size} color={color}/>;
                    },
                })}
                shifting={false}
                activeColor={colors.accentColor}
                inactiveColor={colors.black}
                tabBarOptions={{
                    activeTintColor: colors.black,
                    inactiveTintColor: colors.primaryColor,
                }}>
                <Tab.Screen
                    name={STORE_HOME}
                    component={StoreHome}
                    options={{
                        tabBarLabel: <Text style={[Typography.bottomTabTitleStyle]}/>,
                        tabBarIcon: ({focused, color}) => (
                            <FontAwesome5 name={focused ? 'home' : 'home'} color={focused ? color : colors.neutral}
                                          size={20}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name={PROFILE}
                    component={Profile}
                    options={{
                        tabBarLabel: <Text style={[Typography.bottomTabTitleStyle]}/>,
                        tabBarIcon: ({focused, color}) => (
                            <MaterialIcons name={focused ? 'account-circle' : 'account-circle'}
                                           color={focused ? color : colors.neutral}
                                           size={24}/>
                        ),
                    }}
                />

            </Tab.Navigator>
        );
    }
}

export default HomeScreen;
