import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, ScrollView, TextInput,
     TouchableOpacity, ActivityIndicator,
    Linking} from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { getDatabase, set, get, child, ref, onValue } from 'firebase/database';
import { db, auth } from '../../../firebase';
import { useEffect } from "react";
import { Avatar } from "react-native-paper";
import ImgToBase64 from 'react-native-image-base64';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { getAuth } from 'firebase/auth';
import { storage } from '../../../firebase';
import { async } from '@firebase/util';
import { getDownloadURL, ref as Ref, uploadBytes } from "firebase/storage";









const MarketerView = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [imageUrl, setimageUrl] = useState([]);
    const [UserName, setUserName] = useState([]);
    const [epaisa, setEpaisa] = useState([]);
    const [JazzCash, setJazz] = useState([]);

    const [temp1, settemp1] = useState('');
    const [temp2, settemp2] = useState('');
    const [temp3, settemp3] = useState('');
    const user = getAuth()
    const uuid = user.currentUser.uid
    const db = getDatabase()
    const starCountRef = ref(db, 'MarketersProfiles/' + uuid);

    const ePaisaPress = () => {
        const url = 'https://easypaisa.com.pk/bill-payments/'

        Linking.openURL(url)



    }

    const jaazPress = () => {
        const url = 'https://www.jazzcash.com.pk/'

        Linking.openURL(url)
    }


    useEffect(() => {
        getDownloadURL(Ref(storage, 'MarketersProfiles/' + uuid)).then((url) => {
            setimageUrl(url)
            console.log("Image URL NEW" + imageUrl)

        })
        getDownloadURL(Ref(storage, 'MarketerTemplates/' + uuid + '/temp1')).then((url) => {
            settemp1(url)
            console.log("Image URL NEW TEMP" + temp1)

        })
        getDownloadURL(Ref(storage, 'MarketerTemplates/' + uuid + '/temp2')).then((url) => {
            settemp2(url)
            console.log("Image URL NEW TEMP" + temp1)

        })
        getDownloadURL(Ref(storage, 'MarketerTemplates/' + uuid + '/temp3')).then((url) => {
            settemp3(url)
            console.log("Image URL NEW TEMP" + temp1)

        })

        onValue(starCountRef, (snapshot) => {
            snapshot.forEach((child) => {
                const data = snapshot.val()
                console.log(data.Username)
                setUserName(data.Username)
                setEpaisa(data.Epaisa)
                setJazz(data.JaazCash)


            });
        })
        // simulating a long-running task
        setTimeout(() => {
            setIsLoading(false);



        }, 2000);
    }, []);





    const navigation = useNavigation();


    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                <ActivityIndicator size="large" color="#9d00c8" style={styles.indicator} animating />
                <Text style={{ paddingTop: 10 }}>Welcome to Digio Marketers</Text>
            </View>
        );
    }



    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>


                <View style={styles.catetogryContainer}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => UploadImage('1')} >

                        <Avatar.Image source={{ uri: imageUrl === '' ? 'https://as1.ftcdn.net/v2/jpg/02/25/63/26/1000_F_225632636_1YVaNrZsCkNYEAUeGXciCPm7xQCXibTa.jpg' : imageUrl }} style={{ backgroundColor: '#9d00c8', borderWidth: 1, borderColor: '#db54ff', borderRadius: 80, borderWidth: 73.5, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
                            size={140}
                        />

                    </TouchableOpacity>





                </View>
                <View style={{ flexDirection: 'row', marginTop: 5, width: '50%', height: '3.5%', backgroundColor: '#db54ff', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>

                    <Text style={{ fontSize: 20, color: '#fff' }}> {UserName} </Text>

                </View>


                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    automaticallyAdjustContentInsets={true}>
                    <View style={{ borderColor: '#767676', borderWidth: 0.5, alignItems: 'flex-start', marginTop: 30, backgroundColor: '#fff', width: '110%', height: '47%', borderRadius: 25 }}>
                        <Text style={{ color: '#767676',alignSelf: 'flex-start', fontSize: 18, marginTop: 5, marginLeft: 30, fontWeight: 'bold' }}>Your Portfolio Display: </Text>
                        <Text style={{ color: '#767676', alignSelf: 'flex-start', fontSize: 12, marginTop: 2, marginLeft: 30, }}>Swipe to preview your templates. </Text>
                        <View style={styles.catetogryContainer}>
                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: -150, }} >
                                <View style={{}}>
                                    <Image source={{ uri: temp1 === '' ? 'https://t3.ftcdn.net/jpg/02/18/21/86/360_F_218218632_jF6XAkcrlBjv1mAg9Ow0UBMLBaJrhygH.jpg' : temp1 }}
                                        style={{ height: 250, width: 250, borderRadius: 20, marginLeft: 10, marginTop: 155 }}></Image>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: -150, }}  >
                                <View >
                                    <Image source={{ uri: temp2 === '' ? 'https://t3.ftcdn.net/jpg/02/18/21/86/360_F_218218632_jF6XAkcrlBjv1mAg9Ow0UBMLBaJrhygH.jpg' : temp2 }}
                                        style={{ height: 250, width: 250, borderRadius: 20, marginLeft: 20, marginTop: 155, }}></Image>
                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: -150, }} >
                                <View >
                                    <Image source={{ uri: temp3 === '' ? 'https://t3.ftcdn.net/jpg/02/18/21/86/360_F_218218632_jF6XAkcrlBjv1mAg9Ow0UBMLBaJrhygH.jpg' : temp3 }}
                                        style={{ height: 250, width: 250, borderRadius: 20, marginLeft: 20, marginTop: 155 }}></Image>
                                
                                </View>

                               

                            </TouchableOpacity>

                            
                        
                        </View>
                        <View style={{flexDirection: 'row'}}>
                        <Image source={require('../MarketerList/easypaisa.png')}
                            
                            style={{resizeMode: 'cover', height: 40, width: 100, marginTop: 40, marginLeft: 15}}
                             />
                             <Image source={require('../MarketerList/jazzcashlogo.jpg')}
                            
                            style={{resizeMode: 'cover', height: 40, width: 100, marginTop: 40, marginLeft: 40}}
                             />
                             </View>
                             <View style={{flexDirection: 'row', marginLeft: 20}}>
                                <TouchableOpacity onPress={ePaisaPress}>
                                <Text style={{color: '#5A5A5A'}}>{epaisa}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={jaazPress}>
                                <Text style={{color: '#5A5A5A', marginLeft: 20}}>{JazzCash}</Text>
                                </TouchableOpacity>
                             </View>




                    </View>
                </ScrollView>
            </View>

         
                <Text>Icon</Text>
            
            <View style={{ marginTop: -500, marginLeft: 20, marginRight: 30 }}>
                <Text style={styles.text}>
                    Your profile credentials are kept fully secured within our policy, for more check our
                    <Text style={styles.link} > Terms of Use </Text>and
                    <Text style={styles.link} > Privacy Policy</Text>
                </Text>
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
    text: {
        color: 'gray',
        marginVertical: 5,


    },
    link: {
        color: '#db54ff',
    },
    indicator: {
        width: 80,
        height: 80,
        backgroundColor: '#f3c6ff',
        borderRadius: 15

    },
    catetogryContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,

    },
    categoryImage: {
        flex: 1,
        marginHorizontal: 10,
        alignSelf: 'center'

    },
    catetogryIcon: {


        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
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





})


export default MarketerView;