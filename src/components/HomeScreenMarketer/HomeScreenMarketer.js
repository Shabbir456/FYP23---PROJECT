import React, { useState } from "react";
import { View, Text, StyleSheet, Button, StatusBar, Image, RefreshControl, TouchableOpacity, ActivityIndicator } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { ScrollView } from "react-native";
//import { firebase } from '../../firebase';
import { FlatList } from "react-native-gesture-handler";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { auth } from "../../firebase";
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';
import { Key } from "react";
import { storage } from "../../firebase";
import { getDownloadURL, ref as Ref, uploadBytes } from "firebase/storage";




import { child, getDatabase, ref, onValue, } from "firebase/database";








const HomeScreenMarketer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [imageUrl, setimageUrl] = useState('');
    const user = getAuth()
    const uuid = user.currentUser.uid
    const storageRef = Ref(storage, 'MarketersProfiles/' + uuid)

    
    useEffect(() => {
        try {
        getDownloadURL(Ref(storage, 'MarketersProfiles/' + uuid)).then((url) => {
            setimageUrl(url)
            console.log("Image URL" + imageUrl)

        })
    } catch (e) {
        console.log("Error")

    }
    
        // simulating a long-running task
        setTimeout(() => {
            setIsLoading(false);

        }, 2000);
    }, []);

    const [allUsers, setallusers] = useState([]);
    const BusinessOwners = () => {


        navigation.navigate('UserList')




    }



    const navigation = useNavigation();
    const ProfileSetUp = () => {
        navigation.navigate('MarketerProfileSetUp')

    }
    const SocialTipsPress = () => {
        navigation.navigate('stripe')


    }
    const Keyword = () => {
        navigation.navigate('Keyword')


    }
    const SizeGuide = () => {
        navigation.navigate('SizeGuide')


    }
    const WhatNewPressed = () => {
        navigation.navigate('WhatNew')


    }
    const LogOutPressed =()=> {
        auth.signOut().then(()=>{
            console.log("SignOut")
            navigation.navigate("SignIn")
        })
    }

    const { colors } = useTheme();

    const theme = useTheme();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                <ActivityIndicator size="large" color="#9d00c8" style={styles.indicator} animating />
                <Text style={{ paddingTop: 10, color: '#9d00c8' }}>Welcome to Digio Marketers</Text>
            </View>
        );
    }

    return (



        

        <ScrollView style={styles.container}>
             
           




            <View style={{ flexDirection: 'row', marginRight: 0, backgroundColor: '#9d00c8', shadowColor: '#ccc', marginBottom: 20 }}>
                <Ionicons name="ios-menu" size={25}
                    backgroundColor="#9d00c8" color={'#fff'} style={{ alignSelf: 'center', marginLeft: 15 }}></Ionicons>

                <Text style={{ alignSelf: 'center', marginLeft: 15, fontSize: 18, fontWeight: '700', color: '#fff' }}>DIGIO - Dashboard</Text>
                <TouchableOpacity style={{ marginLeft: 80, marginTop: 10, marginBottom: 10, shadowColor: '#ccc' }} onPress={() => ProfileSetUp()}>
                    <Avatar.Image source={{ uri: imageUrl === '' ? 'https://as1.ftcdn.net/v2/jpg/02/25/63/26/1000_F_225632636_1YVaNrZsCkNYEAUeGXciCPm7xQCXibTa.jpg' : imageUrl }} style={{ backgroundColor: '#9d00c8', borderWidth: 1, borderColor: '#fff', borderRadius: 40, borderWidth: 24.5, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
                        size={45}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginLeft: 10, marginTop: 16, marginBottom: 10, shadowColor: '#ccc' }} onPress={()=>LogOutPressed()}>
                    <MaterialCommunityIcons name="logout" size={40}/>
            </TouchableOpacity>
              

            </View>
        
          
            <View style={styles.slideContainer}>
                <Swiper autoplay height={100} horizontal={false} activeDotColor="#9D00C8">
                    <View style={styles.slide}>
                        <Image source={require('../HomeScreen/banner4.png')}
                            resizeMode="stretch"
                            style={styles.sliderImage} />
                    </View>

                </Swiper>
            </View>
            <View style={styles.catetogryContainer}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => BusinessOwners()} >
                    <View style={styles.catetogryIcon}>
                        <Fontisto name="persons" size={25} color='#fff' />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Business Owners</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => SocialTipsPress()}>
                    <View style={styles.catetogryIcon}>
                        <MaterialCommunityIcons name="lightbulb-on" size={25} color='#fff' />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Busness Tips</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => WhatNewPressed(navigation)}>
                    <View style={styles.catetogryIcon}>
                        <Ionicons name="newspaper-outline" size={25} color='#fff' />
                    </View>
                    <Text style={styles.categoryBtnTxt}>What's New</Text>
                </TouchableOpacity>


            </View>
          

            <View style={{ backgroundColor: '#ececec', borderColor: '#ececec', borderTopWidth: 2, borderStartWidth: 2 , borderEndWidth: 2,borderRadius:50, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
            <View style={styles.cardsWrapper}>
                <Text style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#9d00c8'
                }}> What's Running Hot </Text>
                <View style={styles.card}>
                    <View style={styles.cardImageWrapper}>
                        <Image
                            source={require('../HomeScreenMarketer/FbHomeIcon.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg} />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>
                            Facebook Meta New Update
                        </Text>
                        <Text style={styles.cardDetails}>Here's the
                            top updates for Facebook, it's been own by Meta</Text>
                    </View>
                </View>
                <View style={[styles.card, { marginTop: 2 }]}>
                    <View style={styles.cardImageWrapper}>
                        <Image
                            source={require('../HomeScreenMarketer/InstaHome.jpg')}
                            resizeMode="contain"
                            style={styles.cardImg} />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>
                            Instagram New Update
                        </Text>
                        <Text style={styles.cardDetails}>Here's the
                            top updates for Instagram, it's been own by Meta</Text>
                    </View>
                </View>
                <View style={[styles.card, { marginTop: 2 }]}>
                    <View style={styles.cardImageWrapper}>
                        <Image
                            source={require('../HomeScreenMarketer/InstaHome2.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg} />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>
                            Instagram New Update
                        </Text>
                        <Text style={styles.cardDetails}>Here's the
                            top updates for Instagram, it's been own by Meta</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardImageWrapper}>
                        <Image
                            source={require('../HomeScreenMarketer/FbHomeIcon.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg} />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>
                            Facebook Meta New Update
                        </Text>
                        <Text style={styles.cardDetails}>Here's the
                            top updates for Facebook, it's been own by Meta</Text>
                    </View>
                </View>

            </View>
            
            
</View>
    



        </ScrollView>
     






    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dbd4de'

    },
    catetogryContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,

    },
    indicator: {
        width: 80,
        height: 80,
        backgroundColor: '#f3c6ff',
        borderRadius: 15

    },
    slideContainer: {
        height: 250,
        width: '98%',
        marginTop: -20,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '80%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    catetogryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 0,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center'

    },
    catetogryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#9d00c8',
        borderRadius: 20,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#000'
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
       
    },
    card: {
        height: 100,
   
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 5,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImageWrapper: {
        flex: 1.5,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,

    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#f5f5f5',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#f5f5f5'
    },
    cardTitle: {
        fontWeight: 'bold',
        color: '#9d00c8'
    },
    cardDetails: {
        fontSize: 12,
        color: '#444'
    }

})
export default HomeScreenMarketer;