import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { getDatabase, set, get, child, ref, onValue } from 'firebase/database';
import { db, auth } from '../../../firebase';
import { useEffect } from "react";
import { Avatar } from "react-native-paper";
import { getAuth } from 'firebase/auth';
import { storage } from '../../../firebase';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { async } from '@firebase/util';
import { getDownloadURL, ref as Ref, uploadBytes } from "firebase/storage";









const ViewProfileUser = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [imageUrl, setimageUrl] = useState('');
    const [UserName, setUserName] = useState();

    const [Bio, setBio] = useState();
    const [Email, setEmail] = useState();
    const [FacebookName, setFacebookName] = useState();
    const [InstagramName, setInstagramName] = useState();
    const [YoutubeName, setYoutubeName] = useState();

    



    const user = getAuth()
    const uuid = user.currentUser.uid
    const db = getDatabase()
    const starCountRef = ref(db, 'UserProfiles/' + uuid);




    useEffect(() => {
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setBio(data.Bio)

      })
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setEmail(data.Email)
        setFacebookName(data.FacebookCredential)
        setInstagramName(data.InstagramCredential)
        setYoutubeName(data.YoutubeCredential)

      })

        
        getDownloadURL(Ref(storage, 'UserProfiles/' + uuid)).then((url) => {
            setimageUrl(url)
            console.log("Image URL NEW" + imageUrl)

        })
     
        onValue(starCountRef, (snapshot) => {
            snapshot.forEach((child) => {
                const data = snapshot.val()
                console.log(data.Username)
                setUserName(data.Username)


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
            <View style={{flexDirection: 'row', marginTop: 5, width: '50%', height: '3.2%', backgroundColor: '#db54ff', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>

                <Text style={{ fontSize: 20, color: '#fff' }}> {UserName} </Text>

            </View>



            <View style={{ alignItems: 'flex-start', marginTop: 30, backgroundColor: '#DFDFDF', width: '100%', height: '40%', borderRadius: 25, borderWidth: 1, borderColor: '#C4C4C4' }}>
                <Text style={{ alignSelf: 'flex-start', fontSize: 18, marginTop: 20, marginLeft: 30, fontWeight: 'bold', color: '#818380' }}>{UserName} Portfolio Display: </Text>
                <Text style={{ alignSelf: 'flex-start', marginTop: 20, marginLeft: 15, color: '#818380' }}>{UserName} Business Bio: </Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        value={Bio}
                        onChangeText={text => this.setState({ value: text })}
                        multiline={true}
                        numberOfLines={40}

                        editable={false} selectTextOnFocus={false}
                    />
                </View>
                <Text style={{ marginTop: 30, marginLeft: 10, color: '#818380' }}>{UserName} Social Media Handles:</Text>
                <View style={{marginLeft: 10, flexDirection: 'row', marginTop: 5}}>
                <MaterialCommunityIcons name='instagram' size={35} color='#818380' />
                <Text style={{color: 'blue', marginTop: 5}}>{InstagramName}</Text>
                <MaterialCommunityIcons name='facebook' size={35} color='#818380' style={{marginLeft: 10}} />
                <Text style={{color: 'blue', marginTop: 5}}>{FacebookName}</Text>
               
                </View>
                <View style={{ flexDirection: 'row'}}>
                <MaterialCommunityIcons name='youtube' size={35} color='#818380'style={{marginLeft: 10}} />
                <Text style={{color: 'blue', marginTop: 5}}>{YoutubeName}</Text>
                </View>

                <Text style={{ marginTop: 20, marginLeft: 10, color: '#818380' }}>{UserName} business email:</Text>
                <Text style={{ color: 'blue', marginLeft: 10 }}>{Email}</Text>








            </View>







        </View>
        <View style={{ marginTop: -450, marginLeft: 20, marginRight: 30 }}>
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
    input: {
        flex: 1,
        paddingTop: 0,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#E4E4E4',
        color: '#424242',
       
      },
      inputView: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    
        backgroundColor: '#E4E4E4',
        width: '95%',
        height: '40%',
        marginTop: 2,
        alignSelf: 'center',
    
        borderColor: '#db54ff',
        borderWidth: 0,
        borderRadius: 0,
        borderColor: '#C4C4C4',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginVertical: -15,
    
      },





})


export default ViewProfileUser;