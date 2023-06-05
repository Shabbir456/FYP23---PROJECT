import { async } from '@firebase/util'
import Firebase from '../../firebase'
import { db } from '../../firebase';
import { getDatabase, ref, set, get, child, update } from 'firebase/database';
import { firebase } from '@react-native-firebase/auth';
import SweetAlert from 'react-native-sweet-alert';



export const AddUser = async (email, password, username, uid) => {
    try {
      
        console.log("DATA IS HERE" + email, password, username, uid)

        //let user = getAuth();
        //console.log('GET AUTH USER', user);

        set(ref(db, 'MarketersProfiles/' + uid ),
            {

                Email: email,
                Password: password,
                 Username: username,
                 uid: uid
                //Password: data.password
            }).then(() => {
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


        // return await ().ref('/Database').
        // set({
        //     username: data.username,
        //     email: data.email,


        // })


    } catch (error) {
        return error;

    }

}
