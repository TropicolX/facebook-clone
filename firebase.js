import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDbayYtid7HIVGd6tlxtl_XcB7LZEn7KZk",
	authDomain: "facebook-clone-779f4.firebaseapp.com",
	projectId: "facebook-clone-779f4",
	storageBucket: "facebook-clone-779f4.appspot.com",
	messagingSenderId: "400556001742",
	appId: "1:400556001742:web:5e0c0bf24e5ce93f04439f",
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
