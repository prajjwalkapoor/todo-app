import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAhzeRlo0H9Fj4uhkPDxf2mwmbY5iCnFVM",
  authDomain: "todo-app-edc68.firebaseapp.com",
  projectId: "todo-app-edc68",
  storageBucket: "todo-app-edc68.appspot.com",
  messagingSenderId: "625172789185",
  appId: "1:625172789185:web:965ee88cb4e157b452a140",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default fire;
export { db };
