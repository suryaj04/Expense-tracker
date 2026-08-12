import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyALXBQkWzhPK6BssJwA5ZqLy97XfKNxP3I",
  authDomain: "spendly-76ad4.firebaseapp.com",
  databaseURL: "https://spendly-76ad4-default-rtdb.firebaseio.com",
  projectId: "spendly-76ad4",
  storageBucket: "spendly-76ad4.firebasestorage.app",
  messagingSenderId: "950320056753",
  appId: "1:950320056753:web:3fdbb60315b2440c889590",
  measurementId: "G-2N8LQWSCC6",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };