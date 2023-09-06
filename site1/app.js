const firebaseConfig = {
        apiKey: "AIzaSyDOilYKjE9cMJcG879uM9uEWUYrSEI1yOY",
        authDomain: "projeto2mibteste-620e9.firebaseapp.com",
        projectId: "projeto2mibteste-620e9",
        storageBucket: "projeto2mibteste-620e9.appspot.com",
        messagingSenderId: "946083101086",
        appId: "1:946083101086:web:47359c7b89931e1bd43e8f"
      };


  firebase.initializeApp(firebaseConfig);

const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
    const email = emailField.value;
    const password = passwordField.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Usuário logado com sucesso
            const user = userCredential.user;
            console.log('Usuário logado:', user);
        })
        .catch((error) => {
            // Tratar erros de autenticação
            const errorMessage = error.message;
            console.error('Erro de autenticação:', errorMessage);
        });
});