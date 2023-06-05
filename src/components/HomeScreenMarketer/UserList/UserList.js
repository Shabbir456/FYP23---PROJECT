import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, StatusBar, Image, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { ScrollView } from "react-native";
//import { firebase } from '../../firebase';
import { FlatList } from "react-native-gesture-handler";
import { async } from "@firebase/util";
import { getAuth } from "firebase/auth";
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';
import { Key } from "react";
import { child, getDatabase, ref, onValue, } from "firebase/database";
import { storage } from "../../firebase";
import { getDownloadURL, ref as Ref, uploadBytes } from "firebase/storage";








const UserList = () => {
    const user = getAuth()
    const [isLoading, setIsLoading] = useState(true);
    const [allUsers, setallusers] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        const db = getDatabase()
        const uuid = user.currentUser.uid;
        //console.log(uuid)
        let users = [];
        const starCountRef = ref(db, 'UserProfiles/');
        const starCountRef1 = ref(db, 'MarketersProfiles/');
        onValue(starCountRef, (snapshot) => {
            snapshot.forEach((child) => {

                users.push({

                    userName: child.val().Username,
                    userEmail: child.val().Email,
                    guestUid: child.val().uid

                })
                console.log(child.val().Username)
                console.log(child.val().uid)
                console.log('------------')





            });

            setallusers(users)



        })
        setTimeout(() => {
            setIsLoading(false);



        }, 2000);

    }, [])



    const list = () => {






    }





    const { colors } = useTheme();

    const theme = useTheme();
    return (



        <View style={styles.container}>




            <View style={styles.catetogryContainer}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => list()} >

                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, backgroundColor: '#ececec', borderColor: '#ececec', borderTopWidth: 2, borderStartWidth: 2, borderEndWidth: 2, borderRadius: 50, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
                <FlatList

                    alwaysBounceVertical={false}
                    data={allUsers}
                    style={{ padding: 5 }}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={{ marginLeft: 20, flexDirection: 'row' }} >
                            <View style={{ width: '22%', borderTopStartRadius: 20, borderBottomStartRadius: 20, alignItems: 'center', justifyContent: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, marginLeft: 8, marginTop: 20, backgroundColor: '#9d00c8', }}>
                                <Avatar.Image style={{ backgroundColor: '#9d00c8', borderWidth: 1, borderColor: '#fff', borderRadius: 40, borderWidth: 28.5, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }} source={{ uri: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' }}
                                    size={53}
                                />
                            </View>
                            <View style={{ width: '70%', alignItems: 'flex-start', borderBottomEndRadius: 20, borderTopEndRadius: 20, justifyContent: 'center', marginLeft: 2, marginTop: 20, backgroundColor: '#d7a1f9', }}>
                                <Text style={{ color: '#9d00c8', fontSize: 30, paddingTop: 20, fontStyle: 'italic', fontWeight: 'bold' }}> {item.userName}</Text>
                                <Text style={{ color: '#fff', fontSize: 14, marginTop: -8 }}>  {item.userEmail}</Text>
                                <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10, paddingLeft: 10 }}>
                                    <TouchableOpacity style={{ paddingLeft: 10, backgroundColor: '#9d00c8', width: 80, height: 25, borderRadius: 10, borderColor: '#fff', borderWidth: 0.5, paddingTop: 2 }} onPress={() => navigation.navigate("ChatScreen", { UserName: item.userName, Email: item.userEmail, guestUid: item.guestUid })} >
                                        <Ionicons name='chatbubble-ellipses' color='#fff' size={16} style={{ marginLeft: 0, marginTop: 2, }} />
                                        <Text style={{ alignSelf: 'center', marginTop: -22, marginLeft: 12, fontSize: 16, color: '#fff', }}>Chat</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: 5, paddingLeft: 10, backgroundColor: '#9d00c8', width: 80, height: 25, borderRadius: 10, paddingTop: 2, borderColor: '#fff', borderWidth: 0.5 }} onPress={() => navigation.navigate("UserProfileView", {guestUid: item.guestUid})} >
                                        <Ionicons name='eye' color='#fff' size={16} style={{ marginLeft: 2, marginTop: 2, }} />
                                        <Text style={{ alignSelf: 'center', marginTop: -22, marginLeft: 15, fontSize: 16, color: '#fff', }}>View</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    )}
                />
            </View>
        </View>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bbb'

    },
    slideContainer: {
        height: 300,
        width: '98%',
        marginTop: 3,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '80%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    catetogryContainer: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
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
        alignSelf: 'center',
        width: 320,
        height: 70,
        backgroundColor: '#f3c6ff',
        borderRadius: 20,
        borderColor: '#f57fcb',
        borderWidth: 1.5

    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#fff'
    },

})
export default UserList;