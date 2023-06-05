import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import { getAuth } from 'firebase/auth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { getDatabase, onValue } from 'firebase/database';
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SendMessages, ReceiveMessages } from '../Firebase/ChatMessage';
import { ref, set, get, child, update } from 'firebase/database';
import { async } from '@firebase/util';



const ChatScreen = () => {
  const [messages,setMessages] = useState('');
  const [currentUid,setCurrentuid] = useState('');
  const [guestUid,setguestUid] = useState('');
  const user = getAuth()
  const uid = user.currentUser.uid

  useEffect(()=> {
  
    setguestUid(param2)
    setCurrentuid(uid)
  })
  console.log("Guest UID "+ guestUid)
  console.log("Current UID "+ currentUid)



  // const param = navigation.getParams('UserName');
  const route = useRoute();
  const param = route.params.UserName
  const param2 = route.params.guestUid
  

  const sendMessage=async() =>{
    if (messages) {
      console.log(messages)

      SendMessages(currentUid, guestUid, messages)
      .then(()=> {
        setMessages(messages)
      }).catch((err)=>{
        alert(err)
      })


      ReceiveMessages(currentUid, guestUid, messages)
      .then(()=> {
        console.log("RECEIVER", messages)
        setMessages(messages)
      }).catch((err)=>{
        alert(err)
      })
      
    }

  }

  return (

    <View style={{flex: 1}}>
      <View style={{ flexDirection: 'row', marginRight: 0, backgroundColor: '#f57fbc', shadowColor: '#ccc', marginBottom: 20, height: '13%' }}>
        <Ionicons name="chatbubbles-sharp" size={45}
          backgroundColor="#9d00c8" color={'#fff'} style={{ alignSelf: 'center', marginLeft: 15 }}></Ionicons>

        <Text style={{ alignSelf: 'center', marginLeft: 40, fontSize: 25, fontStyle: 'italic', fontWeight: '700', color: '#fff' }}>{param}</Text>


      </View>

      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={styles.inputView}>
        <Ionicons name="chatbubble-ellipses-outline" color='#ccc' size={20} style={styles.IconView} />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setMessages(text)}
          placeholder="Enter text here"
          placeholderTextColor='#ccc'
        />
      </View>

    <TouchableOpacity onPress={()=>sendMessage()}>
      
    <MaterialCommunityIcons style={{marginTop: 620, marginLeft: 10}} name="send-circle" color='#9d00c8' size={55}  />
    </TouchableOpacity>
      </View>



    </View>

  )

}

const styles = StyleSheet.create({
  inputView: {
  

    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

    backgroundColor: 'white',
    width: '75%',
    height: '8%',
    marginLeft: 20,

    borderColor: '#db54ff',
    borderWidth: 1,
    borderRadius: 30,

    paddingHorizontal: 10,
    marginTop: 620,
  
  },
  input: {
    color: '#000'

  },

  IconView: {
    padding: 10,
    alignItems: 'flex-start'

  },
})

export default ChatScreen;