import React from "react";
import { View, Text, StyleSheet, Button, StatusBar, Image, TouchableOpacity } from "react-native";
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









const WhatNew = () => {
    


    const navigation = useNavigation();
   
    const { colors } = useTheme();

    const theme = useTheme();
    return (



        <ScrollView style={styles.container}>
            
            

           
                
           
            <View style={styles.cardsWrapper}>
                <Text style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#333'
                }}> What's Running Hot </Text>
                <View style={styles.card}>
                    <View style={styles.cardImageWrapper}>
                        <Image
                            source={require('../../HomeScreen/banner1.png')}
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
                            source={require('../../HomeScreen/banner1.png')}
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
                            source={require('../../HomeScreen/banner1.png')}
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
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    slideContainer: {
        height: 200,
        width: '90%',
        marginTop: 5,
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
        marginTop: 5,
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
        backgroundColor: '#f3c6ff',
        borderRadius: 50,
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
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff'
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
export default WhatNew;