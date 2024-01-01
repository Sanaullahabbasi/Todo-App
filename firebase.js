 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
 import {getFirestore, collection, addDoc, serverTimestamp  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";



 const firebaseConfig = {
   apiKey: "AIzaSyDU7Z91x1Myxa60RfA0XN9oOH6NFWgwaOc",
   authDomain: "namaz-app-e0a9e.firebaseapp.com",
   databaseURL: "https://namaz-app-e0a9e-default-rtdb.firebaseio.com",
   projectId: "namaz-app-e0a9e",
   storageBucket: "namaz-app-e0a9e.appspot.com",
   messagingSenderId: "950791269720",
   appId: "1:950791269720:web:3a0bba21fc33f342a4492d"
 };


 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);


 export{
    collection, 
    addDoc,
    db,
    serverTimestamp
 }