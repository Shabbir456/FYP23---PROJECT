import React, { useState } from "react";
import {
    View, Text, StyleSheet, Button, StatusBar,
    useWindowDimensions,
    Image, TouchableOpacity, ActivityIndicator
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import { Avatar } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { ScrollView } from "react-native";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { auth, storage } from "../../firebase";
import { getDownloadURL, ref as Ref, uploadBytes } from "firebase/storage";








const HomeScreen = () => {

    const { height } = useWindowDimensions();

    const [isLoading, setIsLoading] = useState(true);
    const [imageUrl, setimageUrl] = useState('');
    const user = getAuth()
    const uuid = user.currentUser.uid
    const storageRef = Ref(storage, 'MarketersProfiles/' + uuid)
    useEffect(() => {
        try {
            getDownloadURL(Ref(storage, 'UserProfiles/' + uuid)).then((url) => {
                setimageUrl(url)
                console.log("Image URL" + imageUrl)

            })
        } catch (e) {
            console.log(e)

        }

        // simulating a long-running task
        setTimeout(() => {
            setIsLoading(false);

        }, 2000);
    }, []);



    const navigation = useNavigation();
    const SocialTipsPress = () => {
        navigation.navigate('SocialTips')


    }
    const ProfileSetUp = () => {
        navigation.navigate("UserProfile")
    }
    const HashtagPress = () => {
        navigation.navigate('HashtagScreen')


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
    const MarketerPressed = () => {
        navigation.navigate('MarketerList')


    }
    const LogOutPressed = () => {
        auth.signOut().then(() => {
            console.log("SignOut")
            navigation.navigate("SignIn")
        })
    }


    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                <ActivityIndicator size="large" color="#9d00c8" style={styles.indicator} animating />
                <Text style={{ paddingTop: 10 }}>Welcome to Digio Marketers</Text>
            </View>
        );
    }

    const { colors } = useTheme();

    const theme = useTheme();
    return (



        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row', marginRight: 0, backgroundColor: '#9d00c8', shadowColor: '#ccc', marginBottom: 0, height: '7%' }}>
                <Ionicons name="ios-menu" size={25}
                    backgroundColor="#9d00c8" color={'#fff'} style={{ alignSelf: 'center', marginLeft: 15 }}></Ionicons>



                <Text style={{ alignSelf: 'center', marginLeft: 15, fontSize: 18, fontWeight: '700', color: '#fff' }}>DIGIO - Dashboard</Text>
                <TouchableOpacity style={{ marginLeft: 80, marginTop: 10, marginBottom: 10, shadowColor: '#ccc' }} onPress={() => ProfileSetUp()}>
                    <Avatar.Image source={{ uri: imageUrl === '' ? 'https://as1.ftcdn.net/v2/jpg/02/25/63/26/1000_F_225632636_1YVaNrZsCkNYEAUeGXciCPm7xQCXibTa.jpg' : imageUrl }} style={{ backgroundColor: '#9d00c8', borderWidth: 1, borderColor: '#fff', borderRadius: 40, borderWidth: 24.5, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
                        size={45}
                    />

                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 10, marginTop: 18, marginBottom: 10, shadowColor: '#ccc' }} onPress={() => LogOutPressed()}>
                    <MaterialCommunityIcons name="logout" size={35} />
                </TouchableOpacity>

            </View>



            <View style={styles.slideContainer}>
                <Swiper autoplay height={200} horizontal={false} activeDotColor="#9D00C8">
                    <View style={styles.slide}>
                        <Image source={require('../HomeScreen/banner2.png')}
                            resizeMode="stretch"
                            style={styles.sliderImage} />
                    </View>

                    <View style={styles.slide}>
                        <Image source={require('../HomeScreen/banner1.png')}
                            resizeMode="stretch"
                            style={styles.sliderImage} />
                    </View>

                    <View style={styles.slide}>
                        <Image source={require('../HomeScreen/banner3.png')}
                            resizeMode="stretch"
                            style={styles.sliderImage} />
                    </View>

                </Swiper>
            </View>
            
            <View style={styles.catetogryContainer}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => HashtagPress(navigation)} >
                    
                        <View style={styles.catetogryIcon}>
                            <Fontisto name="hashtag" size={25} color='#9d00c8' />
                        </View>
                
                    <Text style={styles.categoryBtnTxt}>Hashtag Finder</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => SocialTipsPress(navigation)}>
                    <View style={styles.catetogryIcon}>
                        <MaterialCommunityIcons name="lightbulb-on" size={25} color='#9d00c8' />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Business Tips</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => Keyword(navigation)}>
                    <View style={styles.catetogryIcon}>
                        <MaterialCommunityIcons name="notebook-edit-outline" size={25} color='#9d00c8' />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Keywords</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.catetogryContainer, { marginTop: 10 }]}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => MarketerPressed(navigation)}>
                    <View style={styles.catetogryIcon}>
                        <Fontisto name="persons" size={25} color='#9d00c8' />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Marketers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => SizeGuide(navigation)}>
                    <View style={styles.catetogryIcon}>
                        <MaterialCommunityIcons name="resize" size={25} color='#9d00c8' />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Size Guide</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => WhatNewPressed(navigation)}>
                    <View style={styles.catetogryIcon}>
                        <Ionicons name="newspaper-outline" size={25} color='#9d00c8' />
                    </View>
                    <Text style={styles.categoryBtnTxt}>What's New</Text>
                </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: '#f3c6ff', borderColor: '#f3c6ff', borderTopWidth: 2, borderStartWidth: 2, borderEndWidth: 2, borderRadius: 50, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
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
                </View>

            </View>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'

    },
    slideContainer: {
        height: 300,
        width: '98%',
        marginTop: -5,
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
        width: 80,
        height: 80,
        backgroundColor: '#f7d9ff',
        borderRadius: 20,
        borderColor: '#9d00c8',
        
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#9d00c8'
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
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    cardImageWrapper: {
        flex: 1,
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
        borderColor: '#f7d9ff',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#f7d9ff'
    },
    cardTitle: {
        fontWeight: 'bold',
        color: '#9d00c8'
    },
    cardDetails: {
        fontSize: 12,
        color: '#9d00c8'
    }
})
export default HomeScreen;