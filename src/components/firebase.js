import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBrXUkI8JLi7frpHiIRj08mXDWdNs_YYBw",
  authDomain: "tododa-3974c.firebaseapp.com",
  projectId: "tododa-3974c",
  storageBucket: "tododa-3974c.appspot.com",
  messagingSenderId: "509327840776",
  appId: "1:509327840776:web:976c8b802aa298f41ee3bd",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default fire;
export { db };
