import { async } from '@firebase/util'
import Firebase from '../../firebase'
import { db } from '../../firebase';
import { getDatabase, ref, set, get, child } from 'firebase/database';
import { firebase } from '@react-native-firebase/auth';



export const AddUser = async (email, password, username, uid) => {
    try {
      
        console.log("DATA IS HERE" + email, password, username, uid)

        //let user = getAuth();
        //console.log('GET AUTH USER', user);

        set(ref(db, 'UserProfiles/' + uid ),
            {

                Email: email,
                Password: password,
                 Username: username,
                 uid: uid
                //Password: data.password
            }).then(() => {
                alert("Your account has been registered.");
            })


        // return await ().ref('/Database').
        // set({
        //     username: data.username,
        //     email: data.email,


        // })


    } catch (error) {
        return error;

    }

}