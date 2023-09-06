var currentUser;


function createLogin(){
    var email = document.getElementById('email').value; 
    var password = document.getElementById('password').value;

    firebaseConfig.auth().createUserWithEmailAndPassword(email,password).then(user=>{
        console.log('Usuario',user)
        alert('Usuário criado e feito o login')
    }).catch(error =>{
        console.log('erro', error);
    });

}

function loginEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebaseConfig.auth().signInWithEmailAndPassword(email,password).then(()=>{
        alert('Usuário logado!!!');
       }) .catch(err =>{
            console.error('Error', err)
        
    });
}

currentUser = firebase.auth().currentUser;

function deletaUsuario(){
    if(currentUser){
        currentUser.delete().then(() =>{
             alert('Usuario excluido');
        })
    }
}
