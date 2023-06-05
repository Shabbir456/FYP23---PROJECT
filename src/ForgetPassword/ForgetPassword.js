import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput} from 'react-native';
import Logo from '../../assets/images/digi.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { db } from '../firebase';
import { ref, set, update } from "firebase/database";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {useForm, Controller} from 'react-hook-form';






const FogetPassword = () => {
    const EMAIL_REGEX = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const PASS_REGEX = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    const [email, setEmail] =  useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {control, 
        handleSubmit,
        formState: {errors},
        watch
    } = useForm();
    
    console.log(errors);
    
    const onUpdatePassword = () => {
        
    
     }
    
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
        
            <Image source={Logo} 
            style={[styles.Logo, 
                {height: height * 1}]}
             />
             <Text style={styles.title}> 
            Change Your Password </Text>


            <TextInput
              style={styles.textinputstyle}
              onChangeText={(text)=> setEmail(text)}
               placeholder="Email" 
             value={email} setValue={setEmail}
             name="email"
             control={control}
             rules={{pattern: {value: EMAIL_REGEX, message: 'Enter a correct email'}}} />


            <TextInput
             style={styles.textinputstyle}
             onChangeText={(text)=> setPassword(text)}
             placeholder="Password" 
             value={password} 
             setValue={setPassword}
             name="password"
             control={control}
             rules={{pattern: {value: PASS_REGEX, message: 'Password must contain 8 characters including one number'}}} 
             secureTextEntry />


             <CustomButton text="Update Password" onPress={onUpdatePassword} />
             
            
             
            </View>
            </ScrollView>
    )
};
const styles = StyleSheet.create({
    textinputstyle: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#db54ff',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 10,
        
        
        
    },
    root: {
        alignItems: 'center',
        padding: 20,
    },
    Logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 300,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051c60',
        margin: 10,
    },


})


export default FogetPassword;