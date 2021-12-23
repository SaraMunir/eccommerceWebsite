import firebase from 'firebase/app';
// import 'firebase/database';
import'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyAn4r_UKrkfFV6NTXqeF8bXhpAy3cbUsNo",
    authDomain: "ecommercestitches.firebaseapp.com",
    projectId: "ecommercestitches",
    storageBucket: "ecommercestitches.appspot.com",
    messagingSenderId: "196277077095",
    appId: "1:196277077095:web:580c5e2457501d4fb680c2"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;