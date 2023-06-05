import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
//import { db } from '../firebase';
//import { ref, set } from "firebase/database";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Navigation from '../navigation';
import {useForm, Controller} from 'react-hook-form';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Firebase from '../firebase'











const SignUpScreen = () => {
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
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    alert("SignUp Succesfully")
    var userUID=Firebase.auth().currentUser.uid;
    console.log(userUID)
   //navigation.navigate("AccountSelection");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = 'Invalid Credentials';
    alert(errorMessage);
    // ..
  });
       
       
    }
    const onForgotPasswordPressed = () => {
        console.warn("Forget Password")
    }
    const onSignInPressed = () => {
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
            Create an account </Text>

            <View style={styles.inputView}>
             <Fontisto name="user-secret" size={20} style={styles.IconView}/>
             <TextInput 
             style={styles.input}
             onChangeText={(text)=> setUsername(text)}
             placeholder="Username"
             name="username"
             control={control}
             rules={{
                required: 'Username is required',
                minLength: {
                    value: 6,
                    message: 'Username should be minimum 6 Characters Long'
                },
                maxLength: {
                    value: 24,
                    message: 'Username should be maximum 24 Characters Long'

                }
             }}
             
             />
             </View>

             <View style={styles.inputView}>
             <Fontisto name="email" size={20} style={styles.IconView}/>
              <TextInput
              style={styles.input}
              onChangeText={(text)=> setEmail(text)}
               placeholder="Email" 
             value={email} setValue={setEmail}
             name="email"
             control={control}
             rules={{pattern: {value: EMAIL_REGEX, message: 'Enter a correct email'}}} />
             </View>


             <View style={styles.inputView}>
             <Ionicons name="eye-off" size={20} style={styles.IconView}/>
             <TextInput
             style={styles.input}
             onChangeText={(text)=> setPassword(text)}
             placeholder="Password" 
             value={password} 
             setValue={setPassword}
             name="password"
             control={control}
             rules={{pattern: {value: PASS_REGEX, message: 'Password must contain 8 characters including one number'}}} 
             secureTextEntry />
             </View>

             <View style={styles.inputView}>
             <Ionicons name="eye" size={20} style={styles.IconView}/>
             <TextInput 
             style={styles.input}
             onChangeText={(text)=> setPasswordRepeat(text)}
             placeholder="Repeat Password" 
             value={passwordRepeat} 
             setValue={setPasswordRepeat}
             name="password-repeat"
             control={control}
             
             rules={{
                validate: value => value === pwd || 'Password do not match'
             }} />
             </View>

             <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)} />
             
             <Text style={styles.text}>
                By registering, you confirm that you accept our  
                <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use </Text>and 
                <Text style={styles.link} onPress={onPrivacyPressed}> Privacy Policy</Text>
             </Text>
             
             <Text style={{
                    fontSize: 15,
                    paddingTop: 150,
                    color: '#999'
                }}>Already have an Account?
                </Text>
             <TouchableOpacity onPress={()=>onSignInPressed(navigation)}  hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
                    <Text style={{
                        fontSize: 15,
                        color: '#9d00c8',
                        fontWeight: 'bold'

                    }}> Sign In Here</Text>

                </TouchableOpacity>
             
             
             
            </View>
            </ScrollView>
    )
};
const styles = StyleSheet.create({
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


export default SignUpScreen;