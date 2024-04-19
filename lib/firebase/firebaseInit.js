import {initializeApp} from 'firebase/app'
import {getDatabase} from 'firebase/database'
import {getAuth} from 'firebase/auth'
import {firebaseConfig} from './config/firebaseConfig'

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);
const auth = getAuth(app)
export {auth, db}