import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBWP6L6EVxfAEuRUmXiIY0hRi5cwsJbRMo",
  authDomain: "recontrer-218420.firebaseapp.com",
  databaseURL: "https://recontrer-218420.firebaseio.com",
  projectId: "recontrer-218420",
  storageBucket: "",
  messagingSenderId: "725429960947"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)

export default firebase;