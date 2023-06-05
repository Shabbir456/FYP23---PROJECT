import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Swiper from "react-native-swiper";







const MarketerTips = () => {



    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            
            <View style={styles.slideContainer}>
            <Swiper autoplay height={200} horizontal={false} activeDotColor="#9D00C8">
               <View style={styles.slide}>
                <Image source={require('')}
                resizeMode="stretch"
                style={styles.sliderImage} />
               </View>

            </Swiper>
        </View>
        <View style={styles.categoryBtn2}>
            <View style={styles.catetogryIcon2}>
        <Text style={{ marginLeft: 70, fontSize: 30, fontStyle: 'italic', fontWeight: '900', color: '#fee500' }}> DAILY SOCIAL TIPS </Text>
        </View></View>
        <View style={styles.categoryBtn}>
            <View style={styles.catetogryIcon}>
             
              
            
                <MaterialCommunityIcons style={{marginLeft: 20}} name="lightbulb-on" size={30} color='#fee500'
                 />   
                 <Text style={{marginLeft: 60, marginTop: -28, fontStyle: 'italic', fontWeight: 'bold', fontSize: 20, color: '#fff'}}> 
                 Instagram Account Type</Text> 
            </View>
            
            
            </View>
            
        <View style={styles.cardsWrapper} >
            <View style={styles.card}>
            <View style={styles.cardImageWrapper}>
            <Image 
            source={require('')}
                resizeMode="cover"
                style={styles.cardImg} />
            </View>
            <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>
                   Business Account / Professional Account
                </Text>
                <Text style={styles.cardDetails}>Here's the 
                top updates for Facebook, it's been own by Meta</Text>
            </View>
            </View>
            </View>
            <View style={styles.categoryBtn}>
            <View style={styles.catetogryIcon}>
             
              
            
                <MaterialCommunityIcons style={{marginLeft: 20}} name="lightbulb-on" size={30} color='#fee500'
                 />   
                 <Text style={{marginLeft: 60, marginTop: -28, fontStyle: 'italic', fontWeight: 'bold', fontSize: 20, color: '#fff'}}> 
                 What is Sales Funnel?</Text> 
            </View>
            
            
            </View>
        <View style={styles.cardsWrapper}>
            <View style={styles.card}>
            <View style={styles.cardImageWrapper}>
            <Image 
            source={require('')}
                resizeMode="cover"
                style={styles.cardImg} />
            </View>
            <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>
                Creating Sales Funnel
                                </Text>
                <Text style={styles.cardDetails}>Here's the 
                top updates for Facebook, it's been own by Meta</Text>
            </View>
            </View>
            </View>
            <View style={styles.categoryBtn}>
            <View style={styles.catetogryIcon}>
             
              
            
                <MaterialCommunityIcons style={{marginLeft: 20}} name="lightbulb-on" size={30} color='#fee500'
                 />   
                 <Text style={{marginLeft: 60, marginTop: -28, fontStyle: 'italic', fontWeight: 'bold', fontSize: 20, color: '#fff'}}> 
                 Post Scheduling</Text> 
            </View>
            
            
            </View>
        <View style={styles.cardsWrapper}>
            <View style={styles.card}>
            <View style={styles.cardImageWrapper}>
            <Image 
            source={require('')}
                resizeMode="cover"
                style={styles.cardImg} />
            </View>
            <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>
                  Importance of Scheduling Post
                </Text>
                <Text style={styles.cardDetails}>Here's the 
                top updates for Facebook, it's been own by Meta</Text>
            </View>
            </View>
            </View>
            
            

           
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'

    },
    categoryBtn2: {
        
        width: '30%',
        marginHorizontal: 0,
        marginLeft: -20,
        marginTop: 0,
        
      

    },
    catetogryIcon2: {
        borderWidth: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        width: 500,
        height: 50,
        backgroundColor: '#3f0463',
        borderRadius: 20,
        borderColor: '#fee500'
        
    },
    categoryBtn: {
        
        width: '30%',
        marginHorizontal: 0,
        marginLeft: 20,
        marginTop: 10,
        
      

    },
    catetogryIcon: {
        borderWidth: 0,
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        width: 320,
        height: 50,
        backgroundColor: '#9d00c8',
        borderRadius: 20,
        
    },
    cardsWrapper: {
        marginTop: 0,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
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
        borderWidth: 0.3,
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
    },
    slideContainer: {
        height: 250,
        width: '95%',
        marginTop: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
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
    inputView: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'white',
        width: '100%',

        borderColor: '#db54ff',
        borderWidth: 1,
        borderRadius: 15,

        paddingHorizontal: 10,
        marginVertical: 10,
    },
    IconView: {
        padding: 10,

    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },

    root: {
        alignItems: 'center',
        padding: 20,
        height: 1200,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#051c60',
        margin: 10,
        alignSelf: 'center'
    },
    text: {
        color: 'gray',
        marginVertical: 5,

    },
    link: {
        color: '#db54ff',
    },





})


export default MarketerTips;