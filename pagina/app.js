
function registrar(){
    alert("diste click")
    let email=document.getElementById('email').value;
    let contra=document.getElementById('pass').value;

    firebase.auth().createUserWithEmailAndPassword(email, contra)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}