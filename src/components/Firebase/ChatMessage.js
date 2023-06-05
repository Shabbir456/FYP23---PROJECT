import { db } from '../../firebase';
import { getDatabase, ref, set, get, child, update } from 'firebase/database';
import { firebase } from '@react-native-firebase/database';
//import firebase from 'firebase';


export const SendMessages = async (currentUid, guestUid, message ) => {
    try {
        
    
      
        console.log("DATA IS HERE" + currentUid, guestUid, message)
        set(ref(db, "messages/" + currentUid + "/" + guestUid),
        {
            currentUid: currentUid,
            guestUid: guestUid,
            message: message
        }).then(() => {
                alert("Your account has been registered.");
            })




    } catch (error) {
        return error;

    }

}

export const ReceiveMessages = async (currentUid, guestUid, message ) => {
    try {
      
        console.log("DATA IS HERE RECEIVER" +  currentUid, guestUid, message)

        set(ref(db, "messages/" + guestUid + "/" + currentUid),
        {
            currentUid: currentUid,
            guestUid: guestUid,
            message: message

        }).then(() => {
                alert("Your account has been registered.");
            })




    } catch (error) {
        return error;

    }

}