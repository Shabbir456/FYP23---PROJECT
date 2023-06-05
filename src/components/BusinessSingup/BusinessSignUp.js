import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity} from 'react-native';
// import CustomInput from '../components/CustomInput';

import CustomButton from '../CustomButton';

import { useNavigation, NavigationContainer } from '@react-navigation/native';
//import { db } from '../firebase';
//import { ref, set } from "firebase/database";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Navigation from '../../navigation';
import {useForm, Controller} from 'react-hook-form';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import Voice from '@react-native-community/voice';
import { async } from '@firebase/util';









const BusinessSignUp = () => {
    useEffect(()=> {
        Voice.onSpeechStart = this.onSpeechStartHandler;
        Voice.onSpeechEnd = this.onSpeechEndHandler;
        Voice.onSpeechResults = this.onSpeechResultsHandler;
        
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        }

    }, [])
    const onSpeechStartHandler = (e) => {
        console.log("start handler",e)

    }
    const onSpeechEndHandler = (e) => {
        console.log("end handler",e)

    }
    const onSpeechResultsHandler = (e) => {
        let text = e.value[0]
        setUsername(text)
        console.log("start handler",e)

    }

    const startRecording = async()=> {
        try {
            await Voice.start('en-Us')
            
        } catch (error) {
            console.log("error raised",error)
            
        }
    }
    const [username, setUsername] =  useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const {control, 
        handleSubmit,
        formState: {errors},
        watch
    } = useForm();
    
    console.log(errors);

const pwd = watch('password');
    
const EMAIL_REGEX = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const PASS_REGEX = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
//const auth = getAuth();
const navigation = useNavigation();
    const onRegisterPressed = () => {
//         createUserWithEmailAndPassword(auth, email, password, username)
//   .then((userCredential) => {
//     alert("SignUp Succesfully")
   navigation.navigate("AccountSelection");
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = 'Invalid Credentials';
//     alert(errorMessage);
//     // ..
//   });
       
       
    }
    const onForgotPasswordPressed = () => {
        console.warn("Forget Password")
    }
    const onSignUpPressed = () => {
        navigation.navigate('SignIn');
    }
    const onPrivacyPressed = () => {
        console.warn("Privacy")
    }
    const onTermsOfUsePressed = () => {
        console.warn("Terms")
    }

    
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            
            <Text style={styles.title}> 
            Business Details Form </Text>
            
            <Text style={{
                    fontSize: 15,
                     alignSelf: 'center',
                }}>All your informations are strictly kept private.</Text>

                
            
            <View style={styles.textinputstyle}>
             <TextInput 
             value={username}
             onChangeText={(text)=> setUsername(text)}
             placeholder="Business Name"
             name="username"
             
             />
             <TouchableOpacity onPress={()=>startRecording()}>
             <Image source={{ uri: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'}} 
             style={{width: 25, height: 25}}
             />
             </TouchableOpacity>
             </View>

              <TextInput
              style={styles.textinputstyle}
              onChangeText={(text)=> setEmail(text)}
               placeholder="Business Genre" 
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

             <TextInput 
             style={styles.textinputstyle}
             onChangeText={(text)=> setPasswordRepeat(text)}
             placeholder="Repeat Password" 
             value={passwordRepeat} 
             setValue={setPasswordRepeat}
             name="password-repeat"
             control={control}
             secureTextEntry
             rules={{
                validate: value => value === pwd || 'Password do not match'
             }} />

             <CustomButton text="Submit" onPress={handleSubmit(onRegisterPressed)} />
             
             <Text style={styles.text}>
                By registering, you confirm that you accept our  
                <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use </Text>and 
                <Text style={styles.link} onPress={onPrivacyPressed}> Privacy Policy</Text>
             </Text>
             
             <Text style={{paddingTop: 100}}>Have a account? Sign In</Text>
             <CustomButton text="Sign In" onPress={onSignUpPressed} />
             
             
             
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
        height: 1200,
    },
    
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051c60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 5,
        
    },
    link: {
        color: '#db54ff',
    },
    

    


})


export default BusinessSignUp;