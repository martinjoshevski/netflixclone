import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-TbtYOrO_rbOk0PAN7f1BST7h_0WXIl0",
  authDomain: "netflix-v1-a8b91.firebaseapp.com",
  projectId: "netflix-v1-a8b91",
  storageBucket: "netflix-v1-a8b91.appspot.com",
  messagingSenderId: "749080414994",
  appId: "1:749080414994:web:58a20fbea93b1e46f941cb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
