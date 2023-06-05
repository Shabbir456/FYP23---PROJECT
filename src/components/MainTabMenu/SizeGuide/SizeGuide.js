import React from "react";
import { View, Text, StyleSheet, Button, StatusBar, Image, TouchableOpacity} from "react-native";
import { useTheme } from "@react-navigation/native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { ScrollView } from "react-native";
import Logo from '../SizeGuide/sizeguide.png'
const SizeGuide = ({navigation}) => {
    const onPressFbPress = () => {

        navigation.navigate("Fbsize")
    }
    const onPressInstagram= () => {
        navigation.navigate("instagramsize")
        
    }
    
    return (
        
        
            
        <ScrollView style={styles.container}>
            
                <Image style={{
                    height: 300,
                    width: 300,
                    alignSelf: 'center',
                    
                    
                }} source={require('../SizeGuide/sizeguide.png')}
                
                 />
               
            
            
            <Text style={{
                flex: 1,
                fontSize: 25,
                fontWeight: 'bold',
                alignSelf: 'center',
                color: '#9d00c8'
            }}>Select Your Size Guider</Text>
            <Text style={{
                flex: 1,
                fontSize: 15,
                alignSelf: 'center',
            }}>You are just a step away.</Text>
        <View style={styles.catetogryContainer}>
            
            <TouchableOpacity style={styles.categoryBtn} onPress={()=>onPressFbPress(navigation)}>
            <View style={styles.catetogryIcon}>
                <MaterialCommunityIcons name="facebook" size={70} color='#fff' />
            </View>
            <Text style={styles.categoryBtnTxt}> Facebook Guide </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryBtn} onPress={()=>onPressInstagram(navigation)}>
            <View style={styles.catetogryIcon}>
                <Ionicons name="logo-instagram" size={60} color='#fff' />
            </View>
            <Text style={styles.categoryBtnTxt}>Instagram Guide</Text>
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
        backgroundColor: '#d1cfcf',
        borderRadius: 30,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#9d00c8'
    },
   
})
export default SizeGuide;