import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBozBJDhErsze0IJgygOky2hplt-rhhlB8",
  authDomain: "panier-achat-fsj.firebaseapp.com",
  databaseURL: "https://panier-achat-fsj-default-rtdb.firebaseio.com",
  projectId: "panier-achat-fsj",
  storageBucket: "panier-achat-fsj.appspot.com",
  messagingSenderId: "827452650180",
  appId: "1:827452650180:web:7c8928380ddc7d8a844f91",
  measurementId: "G-7SJNXY6SXX"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;