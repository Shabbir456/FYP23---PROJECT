import Firebase from '../../firebase'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from '../firebase';
import { firebase } from '@react-native-firebase/auth';
import { AddUser } from './Marketers';


export const UserSign = async (email, password, username) => {

  const auth = getAuth()

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {

      let user = getAuth();
      console.log('Singup UID ' + user.currentUser.uid)


      console.log("SignUp Succesfully")
      AddUser(email, password, username, user.currentUser.uid).then(() => {
        console.log('Data sent')

      }).catch((error) => {
        console.log(error)

      })

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = 'Invalid Credentials';
      alert(errorMessage);
      // ..
    });
}