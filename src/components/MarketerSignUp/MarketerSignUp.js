import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import CustomButton from '../CustomButton';
import { getDatabase, ref, set, get, child } from 'firebase/database';
import { db, auth } from '../../firebase';
import CustomInput from '../CustomInput';
import { Avatar } from "react-native-paper";
import { UserSign } from '../Firebase/MarketerSign';
import SweetAlert from 'react-native-sweet-alert';
import ImgToBase64 from 'react-native-image-base64';
import withReactContent from 'sweetalert2-react-content';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';









const MarketerSignUp = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [imageUrl, setimageUrl] = useState('');


    const { control,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();

    console.log(errors);

    //IT IS USED TO MAP PASSWORD ACCURACY
    const pwd = watch('password');

    const EMAIL_REGEX = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const PASS_REGEX = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    const navigation = useNavigation();
    const onProceedPressed = async (data) => {
        console.log(data)




        //!! ----------------- REALTIME DATABSE CODE ----------------!!
        // const dbRef = ref(getDatabase());
        // get(child(dbRef, `MarketerProfiles/${email}`)).then((snapshot) => {
        //     if (snapshot.exists()) {

        //         alert('Select a different email, it has been used already')
        //     } else {
        // set(ref(db, 'MarketerProfiles/' + data.email),
        //     {

        //         Username: data.username,
        //         Email: data.email,
        //         Password: data.password
        //     }).then(() => {
        //         alert("Your account has been registered.");
        //     })

        //     }
        //  })
        //!! ----------------- REALTIME DATABSE CODE ----------------!!
        
        
        // DATA IS SENT TO USERSIGN TO GET REGISTRY
        UserSign(data.email, data.password, data.username)
            .then((res) => {

                console.log('res', res)
                console.log('resunique ID')
                let user = getAuth();
                console.log("user id    : " + user.currentUser.uid)

            }).catch((err) => {
                console.log(err);

            });



    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }
    const onPrivacyPressed = () => {
        console.warn("Privacy")
    }
    const onTermsOfUsePressed = () => {
    }   



    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>

                <Text style={styles.title}>
                    Create an Marketer account </Text>


                <CustomInput name='username' placeholder="Username" iconName='user-secret'
                    control={control}
                    rules={{
                        required: "Username is required", minLength: {
                            value: 4,
                            message: 'Username must be atleast 4 Characters long'
                        }
                    }} />


                <CustomInput name='email' placeholder="Email" iconName='email'
                    control={control}
                    rules={{ required: '*Email is required', pattern: { value: EMAIL_REGEX, message: 'Enter a correct email' } }} />




                <CustomInput name='password' placeholder="Password" iconName='unlocked'
                    control={control}
                    rules={{
                        required: '*Password is required',
                        pattern: { value: PASS_REGEX, message: 'Password must contain a number' }
                    }} />


                <CustomInput name='passwordRepeat' placeholder="Repeat Password" iconName='locked'
                    control={control}
                    secureTextEntry
                    rules={{ validate: value => value == pwd || 'Password do not match', }} />
                <View style={styles.catetogryContainer}>
                   

                </View>




                <CustomButton text="Register" onPress={handleSubmit(onProceedPressed)} />

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
                <TouchableOpacity onPress={() => onSignInPressed(navigation)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
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
    catetogryContainer: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    categoryBtn: {
        flex: 1,
        width: '80%',
        marginHorizontal: 0,
        alignSelf: 'center'

    },
    catetogryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        width: 80,
        height: 80,
        backgroundColor: '#D3D3D3',
        borderRadius: 20,

    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#fff'
    },





})


export default MarketerSignUp;
