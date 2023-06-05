import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { getDatabase, set, get, ref as Ref, child, update } from 'firebase/database';
import { db, auth } from '../../../firebase';
import { Dropdown } from 'react-native-element-dropdown';
import { Avatar } from "react-native-paper";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { getAuth } from 'firebase/auth';
import { ref, uploadBytes } from "firebase/storage";
import { storage } from '../../../firebase';
import { async } from '@firebase/util';
import CustomInput from '../../CustomInput';
import SweetAlert from 'react-native-sweet-alert';


const data = [
    { label: 'Facebook', value: '1', },
    { label: 'Instagram', value: '2' },
    { label: 'Youtube', value: '3' },

];






const UserProfile = () => {
    const [image, setimage] = useState('');
    const [Bio, setBio] = useState('');
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [SocialName, setSocialName] = useState('');
    const [SocialCredential, setCredential] = useState('');




    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();





    const navigation = useNavigation();

    const SubmitFile = async (value) => {
        const user = getAuth()
        const uuid = user.currentUser.uid
        const storageRef = ref(storage, 'UserProfiles/' + uuid)


        const img = await fetch(image);
        const bytes = await img.blob();
        uploadBytes(storageRef, bytes).then((snapshot) => {
            console.log("Uploaded")
            alert('Your image has been uploaded successfully!')

        }).catch((error) => {
            console.log(error)

        })




    }
    const updateUsername = (data) => {
        console.log("Bio" + data.username)
        const db = getDatabase()
        const user = getAuth()
        const uid = user.currentUser.uid
        update(Ref(db, 'UserProfiles/' + uid), {
            Username: data.username
        })
            .then(() => {
                alert("Username updated")
            })
            .catch((error) => {
                // The write failed...
            });


    }

    const ViewProf = () => {
        navigation.navigate('ViewProfileUser')
    }

    const SetNow = () => {

        console.log(Bio)
        const db = getDatabase()
        const user = getAuth()
        const uid = user.currentUser.uid
        update(Ref(db, 'UserProfiles/' + uid), {
            Bio: Bio
        })
            .then(() => {
                SweetAlert.showAlertWithOptions({
                    title: 'Account Registered',
                    message: 'Message',
                    imageUrl: '',
                    buttons: [
                        {
                            text: 'OK',
                            onPress: () => console.log('OK pressed'),
                        },
                    ],
                });
            })
            .catch((error) => {
                // The write failed...
            });
    }
    const SetCredentialMethod = () => {

        console.log(SocialCredential)
        const db = getDatabase()
        const user = getAuth()
        const uid = user.currentUser.uid
        
        if(value == 1) {
        update(Ref(db, 'UserProfiles/' + uid), {
            FacebookCredential: SocialCredential
        })
            .then(() => {
                SweetAlert.showAlertWithOptions({
                    title: 'Account Registered',
                    message: 'Message',
                    imageUrl: '',
                    buttons: [
                        {
                            text: 'OK',
                            onPress: () => console.log('OK pressed'),
                        },
                    ],
                });
            })
            .catch((error) => {
                // The write failed...
            });
        }
        if(value == 2) {
            update(Ref(db, 'UserProfiles/' + uid), {
                InstagramCredential: SocialCredential
            })
                .then(() => {
                    SweetAlert.showAlertWithOptions({
                        title: 'Account Registered',
                        message: 'Message',
                        imageUrl: '',
                        buttons: [
                            {
                                text: 'OK',
                                onPress: () => console.log('OK pressed'),
                            },
                        ],
                    });
                })
                .catch((error) => {
                    // The write failed...
                });
            }
            if(value == 3) {
                update(Ref(db, 'UserProfiles/' + uid), {
                    YoutubeCredential: SocialCredential
                })
                    .then(() => {
                        SweetAlert.showAlertWithOptions({
                            title: 'Account Registered',
                            message: 'Message',
                            imageUrl: '',
                            buttons: [
                                {
                                    text: 'OK',
                                    onPress: () => console.log('OK pressed'),
                                },
                            ],
                        });
                    })
                    .catch((error) => {
                        // The write failed...
                    });
                }
    }


    const UploadImage = (value) => {
        console.log(value)


        launchImageLibrary('photo', (response) => {
            console.log('res', response)
            setimage(response.assets[0].uri)


        })





    }





    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <View style={{ alignSelf: 'flex-end' }}>
                    <TouchableOpacity style={{ backgroundColor: '#DFDFDF', width: 80, height: 30, borderRadius: 10, borderColor: '#5271ff', borderWidth: 0.5 }} onPress={() => ViewProf()} >
                        <Ionicons name='eye' color='#5271ff' size={22} style={{ marginLeft: 5, marginTop: 2, }} />
                        <Text style={{ alignSelf: 'center', marginTop: -22, marginLeft: 22, fontSize: 16, color: '#5271ff' }}>View</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.catetogryContainer}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => UploadImage('1')} >

                        <Avatar.Image source={{ uri: image === '' ? 'https://as1.ftcdn.net/v2/jpg/02/25/63/26/1000_F_225632636_1YVaNrZsCkNYEAUeGXciCPm7xQCXibTa.jpg' : image }}
                            size={140}
                        />

                        <Text style={{ fontSize: 13, marginLeft: 8, fontFamily: "Cochin", color: '#818380' }}>Click Here</Text>
                        <Text style={{ marginRight: 0, marginTop: 5, fontWeight: 'bold', color: '#818380' }}>Upload your image here.</Text>

                    </TouchableOpacity>


                </View>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <TouchableOpacity style={{ backgroundColor: '#db54ff', width: 100, height: 30, borderRadius: 10, borderColor: '#9d00c8', borderWidth: 0.5 }} onPress={() => UploadImage('1')} >
                        <Text style={{ alignSelf: 'center', paddingTop: 3, fontSize: 16, color: '#fff' }}>Upload</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#db54ff', marginLeft: 20, width: 100, height: 30, borderRadius: 10, borderColor: '#9d00c8', borderWidth: 0.5 }} onPress={() => SubmitFile('1')} >
                        <Text style={{ alignSelf: 'center', paddingTop: 3, fontSize: 16, color: '#fff' }}>Submit</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ alignItems: 'flex-start', marginTop: 0 }}>
                    <Text style={{ marginRight: 0, marginLeft: 20, marginTop: 30, fontWeight: 'bold', color: '#818380' }}>Update your Username </Text>
                    <CustomInput name='username' placeholder="Username" control={control} iconName="email"
                        rules={{ required: '*Username is required' }} />
                    <TouchableOpacity style={{ backgroundColor: '#db54ff', marginTop: 5, marginBottom: 5, width: 100, height: 30, borderRadius: 10, borderColor: '#9d00c8', borderWidth: 0.5 }} onPress={handleSubmit(updateUsername)} >
                        <Text style={{ alignSelf: 'center', paddingTop: 3, fontSize: 16, color: '#fff' }}>Update</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ marginRight: 0, marginLeft: -180, marginTop: 20, fontWeight: 'bold', color: '#818380' }}>Setup Your Bio Here </Text>
                <View style={{ alignItems: 'flex-start', marginTop: 20 }}>

                    <View style={styles.inputView}>

                        <TextInput
                            style={styles.input}
                            //value={dispHashtag}
                            onChangeText={(text) => setBio(text)}
                            value={Bio}
                            multiline={true}
                            numberOfLines={40}

                        />

                        <TouchableOpacity style={{ backgroundColor: '#db54ff', marginTop: 200, marginBottom: 10, width: 100, height: 30, borderRadius: 10, borderColor: '#9d00c8', borderWidth: 0.5, }} onPress={(SetNow)} >
                            <Text style={{ alignSelf: 'center', paddingTop: 3, fontSize: 16, color: '#fff', }}>Set Now</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 20, marginTop: 25, flexDirection: 'row' }}>
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: '#9d00c8' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            iconColor='#9d00c8'
                            activeColor='#bbbb'
                            showsVerticalScrollIndicator
                            containerStyle={styles.DropdownContainer}
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select' : 'Select your Account'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                                setSocialName(item.label);
                            }}
                            renderLeftIcon={() => (
                                <Fontisto
                                    style={styles.icon}
                                    color={isFocus ? '#9d00c8' : 'black'}
                                    name="webpack"
                                    size={15}
                                />
                            )}
                        />
                     <View style={styles.inputView2}>
                        <TextInput
                            style={styles.input2}
                            //value={dispHashtag}
                            onChangeText={(text) => setCredential(text)}
                            value={SocialCredential}
                            multiline={true}
                        //numberOfLines={40}
                        />
                        </View>
                       
                
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#5271ff', marginTop: 10, marginLeft: 10, width: 100, height: 30, borderRadius: 10, borderColor: '#5271ff', borderWidth: 0.5, }} onPress={(SetCredentialMethod)} >
                            <Text style={{ alignSelf: 'center', paddingTop: 3, fontSize: 16, color: '#fff', }}>Submit</Text>
                        </TouchableOpacity>



                </View>






            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({

    root: {
        alignItems: 'center',
        padding: 20,
        height: 1200,
    },
    DropdownContainer: {
        backgroundColor: '#bbb'
    },

    dropdown: {
        height: 25,
        width: 150,
        borderColor: '#9d00c8',
        color: '#000',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        paddingTop: 90,
        position: 'absolute',
        backgroundColor: '#9d00c8',
        left: 22,
        color: 'red',
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,

    },
    placeholderStyle: {
        fontSize: 16,
        color: '#ccc'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#000'
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: '#000',

    },
    catetogryContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,

    },
    categoryImage: {
        flex: 1,
        marginHorizontal: 0,
        alignSelf: 'center'

    },
    catetogryIcon: {

        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#DFDFDF'
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
        alignSelf: 'center',
        alignItems: 'center'

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
    inputView: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'white',
        width: '100%',
        height: '40%',

        borderColor: '#db54ff',
        borderWidth: 0,
        borderRadius: 0,
        borderColor: '#9d00c8',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginVertical: -15,

    },
    input: {
        flex: 1,
        paddingTop: 0,
        paddingRight: 10,
        paddingBottom: 120,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    inputView2: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0.2,
        marginLeft: 20,

        backgroundColor: 'white',
        width: '50%',
        height: '110%',
        

        borderColor: '#db54ff',
        borderWidth: 0,
        borderRadius: 0,
        borderColor: '#9d00c8',
        borderWidth: 0.7,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: -15,

    },
    input2: {
        flex: 1,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },





})


export default UserProfile;