import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqKAxB6t8HCLR7zUWtgMDATh_yc4krYik",
    authDomain: "demand-forecasting-a0ea9.firebaseapp.com",
    databaseURL: "https://demand-forecasting-a0ea9-default-rtdb.firebaseio.com",
    projectId: "demand-forecasting-a0ea9",
    storageBucket: "demand-forecasting-a0ea9.appspot.com",
    messagingSenderId: "17631893511",
    appId: "1:17631893511:web:7cf7fe2722d46cd78832a2",
    measurementId: "G-8GF74Q2G5M"
  };

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;