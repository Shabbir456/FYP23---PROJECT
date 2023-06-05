import React, { useEffect, useState } from 'react'
import { View, Image, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity,Modal } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Avatar } from "react-native-paper";
import { UserSign } from '../../Firebase/MarketerSign';
import ImgToBase64 from 'react-native-image-base64';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { UpdateUserProfile } from '../../Firebase/Marketers';
import { getAuth } from 'firebase/auth';
import { ref, uploadBytes } from "firebase/storage";
import { storage } from '../../../firebase';
import { useForm, Controller } from 'react-hook-form';
import { getDatabase, set, get, ref as Ref, child, update } from 'firebase/database';
import { async } from '@firebase/util';
import CustomInput from '../../CustomInput';
import MarketerSignUp from '../../MarketerSignUp/MarketerSignUp';
import SweetAlert from 'react-native-sweet-alert';








const MarketerProfileSetUp = () => {
    const [image, setimage] = useState('');
    const [temp1, settemp1] = useState('');
    const [temp2, settemp2] = useState('');
    const [temp3, settemp3] = useState('');
    const navigation = useNavigation();

    const { control,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();

    const NUM_REGEX = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/

    const [showModal, setModal] = useState(false)
    const [ePaisa, setEpaisa] = useState()
    const [jazzNum, setJazz] = useState()
    

    const SubmitFile = async (value) => {
        const user = getAuth()
        const uuid = user.currentUser.uid
        const storageRef = ref(storage, 'MarketersProfiles/' + uuid)
        const Temp1Ref = ref(storage, 'MarketerTemplates/' + uuid + '/temp1')
        const Temp2Ref = ref(storage, 'MarketerTemplates/' + uuid + '/temp2')
        const Temp3Ref = ref(storage, 'MarketerTemplates/' + uuid + '/temp3')

        if (value === '1') {
            const img = await fetch(image);
            const bytes = await img.blob();
            uploadBytes(storageRef, bytes).then((snapshot) => {
                console.log("Uploaded")
                alert('Your image has been uploaded successfully!')
    
            }).catch((error) => {
                console.log(error)
    
            })
            
        } if (value === '2') {
            const tmp1 = await fetch(temp1);
            const tmp2 = await fetch(temp2);
            const tmp3 = await fetch(temp3);
            const bytes = await tmp1.blob();
            const bytes2 = await tmp2.blob();
            const bytes3 = await tmp3.blob();
            uploadBytes(Temp1Ref, bytes).then((snapshot) => {
                console.log("Uploaded")
                alert('Your image has been uploaded successfully!')
    
            }).catch((error) => {
                console.log(error)
    
            })
            uploadBytes(Temp2Ref, bytes2).then((snapshot) => {
                console.log("Uploaded")
                alert('Your image has been uploaded successfully!')
    
            }).catch((error) => {
                console.log(error)
    
            })
            uploadBytes(Temp3Ref, bytes3).then((snapshot) => {
                console.log("Uploaded")
                alert('Your image has been uploaded successfully!')
    
            }).catch((error) => {
                console.log(error)
    
            })

           
                
            }
           
       
    }
    const openModal = () => {
        <Modal>
            
            <Text style={{fontSize: 100, color: '#000'}}>HI</Text>
        </Modal>
        console.log('Hi')
        
            
    }
    const setNumber = (data) => {
        console.log('yess', ePaisa)
        console.log(data)
        const db = getDatabase()
        const user = getAuth()
        const uid = user.currentUser.uid
        update(Ref(db, 'MarketersProfiles/' + uid), {
            Epaisa: ePaisa,
            JaazCash: jazzNum
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
        

    
    const updateUsername = () => {
        alert("updated")
    }

    const ViewProf =() => {
        navigation.navigate('ViewProfile')
    }


    const UploadImage = (value) => {
        console.log(value)
        
        if (value === '1') {
            launchImageLibrary('photo', (response) => {
                console.log('res', response)
                setimage(response.assets[0].uri)
    
    
            })
            
        } if (value === '2') {
            launchImageLibrary('photo', (response) => {
                console.log('res', response)
                settemp1(response.assets[0].uri)
                console.log('res', temp1)
    
    
            })
        }
        if (value === '3') {
            launchImageLibrary('photo', (response) => {
                console.log('res', response)
                settemp2(response.assets[0].uri)
    
    
            })
        }
        if (value === '4') {
            launchImageLibrary('photo', (response) => {
                console.log('res', response)
                settemp3(response.assets[0].uri)
    
    
            })
        }
        else {
            console.log(errors)
        }
        
       



    }





    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Modal
             transparent={true}
             visible={showModal}>
                <View style={{backgroundColor: '#000000aa', flex: 1}} >
                <View style={{backgroundColor: '#fff', margin: 50, padding: 20, paddingTop: 40, borderRadius: 30, flex: 0.7}}>
                <Text style={{fontSize: 14, color: '#000', textAlign: 'center'}}>ADD YOUR PAYMENT METHOD</Text>

                
                <Image source={require('../MarketerProfile/easypaisa.png')}
                            
                            style={{resizeMode: 'cover', height: 80, width: 180, marginTop: 40, marginLeft: 15}}
                             />
                             <View style={styles.inputView2}>
                                <TextInput
                            control={control}
                            style={styles.input2}
                            onChangeText={(text) => setEpaisa(text)}
                            value={ePaisa}
                            multiline={true}
                            rules={{
                                
                                pattern: { value: NUM_REGEX, message: 'Enter a correct number' }
                            }}

                        />
                        </View>
                 <Image source={require('../MarketerProfile/jazzcashlogo.jpg')}
                            
                            style={{resizeMode: 'cover', height: 80, width: 180, marginTop: 30, marginLeft: 10}}
                             />
                        <View style={styles.inputView2}>
                                <TextInput
                            control={control}
                            style={styles.input2}
                            onChangeText={(text) => setJazz(text)}
                            value={jazzNum}
                            multiline={true}
                            rules={{
                                
                                pattern: { value: NUM_REGEX, message: 'Enter a correct number' }
                            }}
                        //numberOfLines={40}
                        />
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#5271ff', alignSelf: 'center', marginTop: 35, width: 150, height: 40, borderRadius: 30, borderColor: '#004aad', borderWidth: 0.5 }}  onPress={() => setNumber()} >
                        <Text style={{ alignSelf: 'center', paddingTop: 7, fontSize: 15, color: '#fff' }}>SET</Text>
                    </TouchableOpacity>
                <TouchableOpacity style={{  alignSelf: 'center', marginTop: 35,  }} onPress={() => openModal(setModal(false))} >
                        <Text style={{ alignSelf: 'center', paddingTop: 7, fontSize: 15, color: '#5A5A5A' }}>Close</Text>
                    </TouchableOpacity>
                </View>
                </View>
            
            
        </Modal>
            <View style={styles.root}>
                <View style={{alignSelf: 'flex-end'}}>
                <TouchableOpacity style={{ backgroundColor: '#DFDFDF', width: 80, height: 30, borderRadius: 10, borderColor: '#5271ff', borderWidth: 0.5 }} onPress={() => ViewProf()} >
                    <Ionicons name='eye' color='#5271ff' size={22} style={{marginLeft: 5, marginTop: 2,}}/>
                        <Text style={{ alignSelf: 'center', marginTop: -22, marginLeft: 22, fontSize: 16, color: '#5271ff' }}>View</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.catetogryContainer}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => UploadImage('1')} >

                        <Avatar.Image source={{ uri: image === '' ? 'https://as1.ftcdn.net/v2/jpg/02/25/63/26/1000_F_225632636_1YVaNrZsCkNYEAUeGXciCPm7xQCXibTa.jpg' : image }}
                            size={140}
                        />

                        <Text style={{ color: '#B0B3B8', fontSize: 13, marginLeft: 8, fontFamily: "Cochin" }}>Click Here</Text>
                        <Text style={{color: '#B0B3B8', marginRight: 0, marginTop: 5, fontWeight: 'bold' }}>Upload your image here.</Text>

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


                <View style={{ alignItems: 'flex-start', marginTop: 10 }}>
                    <Text style={{ color: '#B0B3B8', marginRight: 0, marginLeft: 10, marginTop: 5, fontWeight: 'bold' }}>Update your Username </Text>
                    <CustomInput name='email' placeholder="Username" control={control} iconName="email"
                        rules={{ required: '*Username is required' }} />
                    <TouchableOpacity style={{ backgroundColor: '#db54ff', marginTop: 5, marginBottom:5, width: 100, height: 30, borderRadius: 10, borderColor: '#9d00c8', borderWidth: 0.5 }} onPress={handleSubmit(updateUsername)} >
                        <Text style={{ alignSelf: 'center', paddingTop: 3, fontSize: 16, color: '#fff' }}>Update</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'flex-start', marginTop: 20, backgroundColor: '#DFDFDF', width: '105%', height: '20%', borderRadius: 25 }}>
                    <Text style={{ color: '#B0B3B8', alignSelf: 'center', fontSize: 18, marginTop: 5, fontWeight: 'bold' }}>Setup Your Portfolio Here</Text>
                    <Text style={{ color: '#B0B3B8', alignSelf: 'center', fontSize: 12, marginTop: 0 }}>Note: You can upload upto max 3 templates</Text>
                    <View style={styles.catetogryContainer}>
                        <TouchableOpacity style={styles.categoryImage} onPress={() => UploadImage('2')} >
                            <View style={styles.catetogryIcon}>
                                <Image source={{ uri: temp1 === '' ? 'https://t3.ftcdn.net/jpg/02/18/21/86/360_F_218218632_jF6XAkcrlBjv1mAg9Ow0UBMLBaJrhygH.jpg' : temp1 }}
                                    style={{ height: 100, width: 100, borderRadius: 20, marginLeft: 35, marginTop: 30 }}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryImage} onPress={() => UploadImage('3')}>
                            <View style={styles.catetogryIcon}>
                                <Image source={{ uri: temp2 === '' ? 'https://t3.ftcdn.net/jpg/02/18/21/86/360_F_218218632_jF6XAkcrlBjv1mAg9Ow0UBMLBaJrhygH.jpg' : temp2 }}
                                    style={{ height: 100, width: 100, borderRadius: 20, marginLeft: 35, marginTop: 30 }}></Image>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryImage} onPress={() => UploadImage('4')}>
                            <View style={styles.catetogryIcon}>
                                <Image source={{ uri: temp3 === '' ? 'https://t3.ftcdn.net/jpg/02/18/21/86/360_F_218218632_jF6XAkcrlBjv1mAg9Ow0UBMLBaJrhygH.jpg' : temp3 }}
                                    style={{ height: 100, width: 100, borderRadius: 20, marginLeft: 30, marginTop: 30 }}></Image>
                            </View>

                        </TouchableOpacity>
                        
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#5271ff', alignSelf: 'center', marginTop: 35, width: 150, height: 40, borderRadius: 30, borderColor: '#004aad', borderWidth: 0.5 }} onPress={() => SubmitFile('2')} >
                        <Text style={{ alignSelf: 'center', paddingTop: 7, fontSize: 15, color: '#fff' }}>Upload Now</Text>
                    </TouchableOpacity>
                    

                </View>
                <Text style={{ alignContent: 'flex-start', marginLeft: -70, paddingTop: 7, fontSize: 18, color: '#5A5A5A', fontWeight: 'bold' }}>Set your payment method below:</Text>
                <Text style={{ alignContent: 'flex-start', marginLeft: -120, fontSize: 12, color: '#5A5A5A' }}>All your details are stricly kept secured.</Text>
                <TouchableOpacity style={{ backgroundColor: '#DFDFDF', alignSelf: 'center', marginTop: 10, width: 190, height: 40, borderRadius: 15, borderColor: '#5A5A5A', borderWidth: 0.8 }} onPress={() => openModal(setModal(true))} >
                        <Text style={{ alignSelf: 'center', paddingTop: 7, fontSize: 15, color: '#5A5A5A' }}>Set Payment Method</Text>
                    </TouchableOpacity>
                




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
        backgroundColor: '#DFDFDF',
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
    inputView2: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0.2,
        marginLeft: 10,
        height: 45,
        width: 240,

        backgroundColor: 'white',
      
        

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


export default MarketerProfileSetUp;