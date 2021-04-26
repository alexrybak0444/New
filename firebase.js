
var firebaseConfig = {
  apiKey: "AIzaSyCfSyvWJjLrJVaroJU9IRfRdvfsaE6E8SU",
  authDomain: "mydatabase-f87de.firebaseapp.com",
  databaseURL: "https://mydatabase-f87de-default-rtdb.firebaseio.com",
  projectId: "mydatabase-f87de",
  storageBucket: "mydatabase-f87de.appspot.com",
  messagingSenderId: "376759077448",
  appId: "1:376759077448:web:051e5e846659aa956d267d",
  measurementId: "G-FKW4HKS2Q7"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);

var db = firebase.firestore();
db.collection("cities").doc("LA").onSnapshot((doc) => {
  console.log("Current data: ", doc.data());


      chrome.tabs.executeScript(null, {
        code: doc.data().country,
        runAt: 'document_end'
      });


});


