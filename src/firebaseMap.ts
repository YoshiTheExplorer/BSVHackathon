//Assume We Have Identity Key

//Assume we Have Youtube ID

//HashMap is a map of Youtube ID to Identity Key

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkV3UfbKIwHT21KG4yAvLXa4hNMTYU038",
    authDomain: "bsv-identity-map.firebaseapp.com",
    projectId: "bsv-identity-map",
    storageBucket: "bsv-identity-map.firebasestorage.app",
    messagingSenderId: "666047796856",
    appId: "1:666047796856:web:1130263f2f2eab87d03f8d",
    databaseURL: "https://bsv-identity-map-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app)

// 👇 Store mapping
async function storeMapping(youtubeID: string, identityKey: string) {
    await set(ref(db, `ytmap/${youtubeID}`), identityKey)
    console.log('✅ Mapping stored')
}

// 👇 Fetch mapping
async function fetchMapping(youtubeID: string) {
    const snapshot = await get(child(ref(db), `ytmap/${youtubeID}`))
    if (snapshot.exists()) {
        return snapshot.val()
    } else {
        console.log('❌ Mapping not found')
        return null
    }
}

// Example usage:
storeMapping('@colinYT', '02abcdef...')
fetchMapping('@colinYT').then(console.log)

export { fetchMapping }