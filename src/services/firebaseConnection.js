import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'


let firebaseConfig = {
    apiKey: "AIzaSyCdaDX_JlbfM3vwY16qb1FCTjsY9FmEq4Q",
    authDomain: "chamadosrs.firebaseapp.com",
    projectId: "chamadosrs",
    storageBucket: "chamadosrs.appspot.com",
    messagingSenderId: "693698819582",
    appId: "1:693698819582:web:cb2a5a09722e9c0206fcaf",
    measurementId: "G-1NRJY3QLPC"
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
  }

  export default firebase;
  