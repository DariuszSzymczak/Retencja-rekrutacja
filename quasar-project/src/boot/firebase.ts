import { boot } from 'quasar/wrappers'
import { initializeApp } from "firebase/app";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {

  const firebaseConfig = {
    apiKey: "AIzaSyCtrIvy2Xp4s_QQpS5JNyHfFrfJk0zLAqA",
    authDomain: "retencja-user-list.firebaseapp.com",
    projectId: "retencja-user-list",
    storageBucket: "retencja-user-list.appspot.com",
    messagingSenderId: "670585638560",
    appId: "1:670585638560:web:09885b0a087cfe946f83c5"
  };
  const app = initializeApp(firebaseConfig);

})
