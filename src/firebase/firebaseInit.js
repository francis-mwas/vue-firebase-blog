import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCNTsSdXiTMkGXoQaxWG4iIvSdtcYin_qI',
  authDomain: 'vue-firebase-blog-6dc52.firebaseapp.com',
  projectId: 'vue-firebase-blog-6dc52',
  storageBucket: 'vue-firebase-blog-6dc52.appspot.com',
  messagingSenderId: '724461662695',
  appId: '1:724461662695:web:e2b163c6f85e3a1644cd42',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
