import React, { useState } from 'react'
import {
    View, Text, Image, StyleSheet,
    useWindowDimensions, ScrollView,
    TextInput, Button,
    RefreshControl,
    TouchableHighlight
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import Logo from '../../assets/images/logo.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import CustomButton from '../components/CustomButton';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form'
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth, db } from '../firebase';
import { ref, set, onValue, get, getDatabase, child } from 'firebase/database'
import CustomInput from '../components/CustomInput';
import { Alert } from 'react-native';
import UserSignUp from '../UserSignUp/UserSignUp';
import MarketerSignUp from '../components/MarketerSignUp/MarketerSignUp';




const SignInScreen = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [checkValidEmail, setCheckValidEmail] = useState(false);
    const [checkValidPass, setCheckValidPass] = useState(false);


    const PASS_REGEX = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    const EMAIL_REGEX = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


    const { height } = useWindowDimensions();
    const navigation = useNavigation();



    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    console.log(errors);

   

    const onSignInPressed =  (data) => {


        // Passing value to Firebase Auth To Verify its Credentials
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = getAuth()
                const uuid = user.currentUser.uid;
                console.log(uuid)
                const db = getDatabase();
                const starCountRef = ref(db, 'UserProfiles/' + uuid);
                const starCountRef1 = ref(db, 'MarketersProfiles/' + uuid);
                onValue(starCountRef, (snapshot) => {
                    if (snapshot.exists()) {
                        
                        const data = snapshot.val();
                        console.log(data, 'yes')
                        navigation.navigate("HomeScreen");

                    }
                    
                    else {
                        console.log('Not found')
                    }


                })
                 onValue(starCountRef1, (snapshot) => {
                    if (snapshot.exists()) {
                       console.log("SignIn")
                        
                        const data = snapshot.val();
                        console.log(data.Username, 'yes')
                        navigation.navigate("HomeScreenMarketer");

                    }
                    
                    else {
                        console.log('Not found')
                    }


                })
                

            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = 'Invalid Credentials';
                alert(error);
                // ..
            });

       


       



    }
    const onForgotPasswordPressed = () => {

        navigation.navigate("ForgetPass")
    }
    const onSignUpPressed = () => {

        //validate user 
        navigation.navigate('AccountSelection');
    }

    const handleData = () => {
        console.log(data)
    }

    return (

        <View style={styles.container}>

            <View style={styles.root}>
                <Image source={Logo}
                    style={[styles.Logo,
                    { height: height * 1 }, { width: 1000 }]}
                />







                //IMPORTING CUSTOM INPUT TO MAKE RESUEABLITY OF CODE
                <CustomInput name='email' placeholder="Email" control={control} iconName="email"
                    rules={{ required: '*Email is required', pattern: { value: EMAIL_REGEX, message: 'Enter a correct email' } }} />

                <CustomInput name='password' placeholder="Password" control={control} iconName="locked" secureTextEntry
                    rules={{ required: '*Password is required', pattern: { value: PASS_REGEX, message: 'Password must contain a number & 6 character long' } }} />




                <TouchableOpacity onPress={() => onForgotPasswordPressed(navigation)} >
                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: '#9d00c8',
                        paddingTop: 5,
                        alignSelf: 'center'
                    }}>Forgot Password</Text>
                </TouchableOpacity>

               
                    
                <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />
                
                


                <Text style={{
                    fontSize: 15,
                    paddingTop: 60,
                    color: '#999'
                }}>Don't have an account?
                </Text>
                <TouchableOpacity onPress={() => onSignUpPressed(navigation)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
                    <Text style={{
                        fontSize: 15,
                        color: '#9d00c8',
                        fontWeight: 'bold'

                    }}> Sign Up Here</Text>

                </TouchableOpacity>


            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    categoryBtn: {

        width: '30%',
        marginHorizontal: 0,



    },
    catetogryIcon: {
        borderWidth: 0.3,
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        width: 120,
        height: 35,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: 'black',
        marginLeft: 80

    },
    container: {
        flex: 1

    },
    root: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingRight: 20,
        paddingLeft: 20,


    },
    Logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 300,
        alignSelf: "center",



    }


})


export default SignInScreen
