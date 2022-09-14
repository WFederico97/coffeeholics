import { initializeApp, getFirestore } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC9K0xB4St0phITjGl3whSAvpmvqioS9cE",
    authDomain: "coffeeholics-87965.firebaseapp.com",
    projectId: "coffeeholics-87965",
    storageBucket: "coffeeholics-87965.appspot.com",
    messagingSenderId: "408822953552",
    appId: "1:408822953552:web:daada193941fbac37c4355",
    measurementId: "G-H70P5HKPD4"
  };

  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);