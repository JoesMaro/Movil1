// Importa las funciones necesarias
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth"; 
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configuración de tu app de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_yu9xYy_zSzUDJHOBJki0JC3dpF4NnMY",
  authDomain: "productos-baa37.firebaseapp.com",
  projectId: "productos-baa37",
  storageBucket: "productos-baa37.appspot.com",
  messagingSenderId: "76361401786",
  appId: "1:76361401786:web:0224d85ab896d51a0fc983",
  measurementId: "G-DP21NYB2E6"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa la autenticación
const auth = getAuth(app);

// Establece la persistencia
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistencia establecida");
  })
  .catch((error) => {
    console.error("Error al establecer la persistencia: ", error);
  });

export { app, auth };
