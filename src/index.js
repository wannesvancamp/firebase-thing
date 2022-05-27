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

function writeData(value) {
    const db = getDatabase();
    set(ref(db, 'mouse'), {
        active: value
    });
}


const dbRef = ref(getDatabase());
get(child(dbRef, `mouse`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});




writeData(false)


document.querySelector("button").addEventListener("click", function() {
    if (this.getAttribute("data-value") == "false") {
        this.setAttribute("data-value", "true")
    } else {
        this.setAttribute("data-value", "false")
    }
    console.log(document.querySelector("button").getAttribute("data-value"))
    writeData(this.getAttribute('data-value'))
})