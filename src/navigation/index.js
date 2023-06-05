import React from "react";
import { View, Text, Button, ActivityIndicatorBase, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from "../SignInScreen";
import SignUpScreen from "../SignUpScreen";
import ForgetPassword from "../ForgetPassword";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import AccountSelection from "../components/AccountSelection";
import BusinessSignUp from "../components/BusinessSingup/BusinessSignUp";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MarketerSignUp from "../components/MarketerSignUp/MarketerSignUp";
import UserSignUp from "../UserSignUp/UserSignUp";
import SocialTips from "../components/MainTabMenu/SocialTips";
import HashtagScreen from "../components/MainTabMenu/HashtagScreen/HashtagScreen";
import Keyword from "../components/MainTabMenu/Keyword";
import SizeGuide from "../components/MainTabMenu/SizeGuide/SizeGuide";
import InstagramSize from "../components/MainTabMenu/SizeGuide/instagramsize";
import FbSize from "../components/MainTabMenu/SizeGuide/fbsize";
import WhatNew from "../components/MainTabMenu/WhatNew";
import HomeScreenMarketer from "../components/HomeScreenMarketer";
import UserList from "../components/HomeScreenMarketer/UserList";
import ChatScreen from "../components/ChatScreen";
import MarketerProfileSetUp from "../components/HomeScreenMarketer/MarketerProfile/MarketerProfile";
import ViewProfile from "../components/HomeScreenMarketer/MarketerProfile/ViewProfile";
import UserProfile from "../components/HomeScreen/UserProfile";
import ViewProfileUser from "../components/HomeScreen/UserProfile/ViewProfileUser";
import UserProfileView from "../components/HomeScreenMarketer/UserList/UserView";
import MarketerList from "../components/MainTabMenu/MarketerList/MarketerList";
import MarketerView from "../components/MainTabMenu/MarketerList/MarketerView";
import Stripe from "../stripe"
import Payment from "../Payment";


const Stack = createNativeStackNavigator();





const Navigation = () => {
    

    return (



        <NavigationContainer>


            <Stack.Navigator>
                <Stack.Screen name="SignIn" component={SignInScreen}
                    options={{
                        title: "",
                        headerStyle: {
                            backgroundColor: '#9d00c8',
                            shadowColor: '#fff'
                        }
                    }} />
                <Stack.Screen name="HomeScreen" component={HomeScreen}

                    options={{
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: '#fff',
                            shadowColor: '#fff',
                        },

                        headerTintColor: '#fff',

                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: '#272124',
                        },

                        title: 'DigiO',
                        headerLeft: () => (
                            <Icon.Button name="ios-menu" size={25}
                                backgroundColor="#fff" color={'#272124'} ></Icon.Button>

                        ),
                        headerRight: () => (
                            <View style={{ flexDirection: 'row', marginRight: 1 }}>
                                <Icon.Button name="ios-search" size={25}
                                    backgroundColor="#fff" color={'#272124'} />
                                <TouchableOpacity onPress={() => { }}>
                                    <Avatar.Image source={{ uri: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' }}
                                        size={43}
                                    />
                                </TouchableOpacity>

                            </View>

                        ),




                    }} />

                <Stack.Screen name="HomeScreenMarketer" component={HomeScreenMarketer}

                    options={{
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: '#9d00c8',
                            shadowColor: '#fff',
                            
                        },

                        headerTintColor: '#fff',

                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: '#fff',
                        },

                        title: 'DigiO - Marketers',
                        headerLeft: () => (
                            <Icon.Button name="ios-menu" size={25}
                                backgroundColor="#9d00c8" color={'#fff'} ></Icon.Button>

                        ),
                        headerRight: () => (
                            <View style={{ flexDirection: 'row', marginRight: 1 }}>
                                <Icon.Button name="ios-search" size={25}
                                    backgroundColor="#9d00c8" color={'#fff'} />
                              
            
                            </View>

                        ),




                    }} />


                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="UserList" component={UserList} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="MarketerProfileSetUp" component={MarketerProfileSetUp} options={{
                    headerShown: false
                }} />
                 <Stack.Screen name="stripe" component={Stripe} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="ViewProfile" component={ViewProfile } options={{
                    headerShown: false
                }} />
                <Stack.Screen name="ViewProfileUser" component={ViewProfileUser} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="UserProfileView" component={UserProfileView} options={{
                    headerShown: false
                }} />
                 {/* <Stack.Screen name="BusinessTip" component={BusinessTip} options={{
                    headerShown: false
                }} /> */}
                <Stack.Screen name="MarketerView" component={MarketerView} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="MarketerList" component={MarketerList } options={{
                    headerShown: false
                }} />

                <Stack.Screen name="UserProfile" component={UserProfile} options={{
                    headerShown: false
                }} />

                <Stack.Screen name="ChatScreen" options={{
                    headerShown: false,
                        title: ''
                        }}  component={ChatScreen} />
                <Stack.Screen name="ForgetPass" component={ForgetPassword} />
                <Stack.Screen name="Payment" component={Payment} />

                <Stack.Screen name="AccountSelection" component={AccountSelection}
                    options={{
                        headerStyle: {
                            elavation: 0,
                            backgroundColor: '#fff'
                        },
                        title: ''

                    }} />
                <Stack.Screen name="BusinessSignUp" component={BusinessSignUp}
                    options={{
                        headerStyle: {
                            backgroundColor: '#fff'
                        },
                        title: ''

                    }} />
                <Stack.Screen name="MarketerSignUp" component={MarketerSignUp}
                    options={{
                        headerStyle: {
                            backgroundColor: '#fff'
                        },
                        title: ''

                    }} />
                <Stack.Screen name="UserSignUp" component={UserSignUp}
                    options={{
                        headerStyle: {
                            backgroundColor: '#fff'
                        },
                        title: ''

                    }} />
                <Stack.Screen name="SocialTips" component={SocialTips}
                    options={{
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: '#fff'
                        },
                        title: ''

                    }} />
                <Stack.Screen name="HashtagScreen" component={HashtagScreen}
                    options={{
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: '#fff'
                        },
                        title: ''

                    }} />
                <Stack.Screen name="Keyword" component={Keyword}
                    options={{
                        headerStyle: {
                            backgroundColor: '#fff'
                        },
                        title: ''

                    }} />
                <Stack.Screen name="SizeGuide" component={SizeGuide}
                    options={{
                        headerStyle: {
                            backgroundColor: '#fff'
                        },
                        title: ''

                    }} />
                <Stack.Screen name="instagramsize" component={InstagramSize}
                    options={{
                        headerStyle: {
                            backgroundColor: '#002a3c'
                        },
                        title: ''

                    }} />
                <Stack.Screen name="Fbsize" component={FbSize}
                    options={{
                        headerStyle: {
                            backgroundColor: '#002a3c'
                        },
                        title: ''


                    }} />
                <Stack.Screen name="WhatNew" component={WhatNew}
                    options={{
                        headerStyle: {
                            backgroundColor: '#fff'
                        },
                        title: ''

                    }} />


            </Stack.Navigator>

        </NavigationContainer>
    );
};
export default Navigation;