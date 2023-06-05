import React from "react";
import { View, Text, StyleSheet, Button, StatusBar, Image, TouchableOpacity} from "react-native";
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
import Logo from '../../../assets/images/logo.png';

const AccountSelection = ({navigation}) => {
    const onPressBusiness = () => {

        navigation.navigate("UserSignUp")
    }
    const onPressMarketer = () => {
        navigation.navigate("MarketerSignUp")
        
    }
    
    return (
        
        
            
        <ScrollView style={styles.container}>
            
                <Image style={{
                    height: 300,
                    width: 300,
                    alignSelf: 'center'
                    
                }} source={require('../../../assets/images/logo.png')}
                
                 />
               
            
            
            <Text style={{
                flex: 1,
                fontSize: 25,
                fontWeight: 'bold',
                alignSelf: 'center',
                paddingTop: 5,
                color: '#9d00c8'
            }}>Select Your Account Type</Text>
            <Text style={{
                flex: 1,
                fontSize: 15,
                alignSelf: 'center',
            }}>You are just a step away.</Text>
        <View style={styles.catetogryContainer}>
            
            <TouchableOpacity style={styles.categoryBtn} onPress={()=>onPressBusiness(navigation)}>
            <View style={styles.catetogryIcon}>
                <MaterialCommunityIcons name="google-my-business" size={50} color='#9d00c8' />
            </View>
            <Text style={styles.categoryBtnTxt}>Business Owner</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryBtn} onPress={()=>onPressMarketer(navigation)}>
            <View style={styles.catetogryIcon}>
                <Ionicons name="person-add-sharp" size={50} color='#9d00c8' />
            </View>
            <Text style={styles.categoryBtnTxt}>Marketing Expert</Text>
            </TouchableOpacity>
            
             </View>
        
           
        
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        backgroundColor: '#fff'
    
    },
   
    
  
    catetogryContainer: {
        
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 10,
        paddingTop: 15,
        
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
        
        

    },
    catetogryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 150,
        height: 100,
        backgroundColor: '#f3c6ff',
        borderRadius: 30,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#9d00c8'
    },
   
})
export default AccountSelection;