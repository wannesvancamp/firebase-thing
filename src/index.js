import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js';
import { getDatabase, ref, child, get, set } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxx2DeNb6hcsxvAloCEdts-8pJGaWf_eI",
    authDomain: "cat-game-97c9b.firebaseapp.com",
    databaseURL: "https://cat-game-97c9b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cat-game-97c9b",
    storageBucket: "cat-game-97c9b.appspot.com",
    messagingSenderId: "1051068092521",
    appId: "1:1051068092521:web:0187cd16dc541347ea52f8",
    measurementId: "G-34LK3R1KNF"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);


function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}

writeUserData(2, "wannes", "wannes.van.camp@student.howest.be", "picture.jpg")
    //THIS IS TO WRITE DATA TO DB


// userId needs to be replaced with number for some reason
const dbRef = ref(getDatabase());
get(child(dbRef, `users/${2}`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});