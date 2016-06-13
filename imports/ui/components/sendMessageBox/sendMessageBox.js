import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './sendMessageBox.html';
import usernameToastTemplate from './usernameToast.html';
 
class SendMessageBox {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

    this.text = "";
  }
 
  send() {
    console.log('Sending: ' + this.text);

    console.log(fireapp.auth().currentUser);
    if(fireapp.auth().currentUser == null){
        //console.log("Authentication error! You have to login first!");
        //make a toast "Touch to login ^^"
        toastr.options = {
          "closeButton": true,
          "debug": false,
          "newestOnTop": true,
          "progressBar": false,
          "positionClass": "toast-bottom-full-width",
          "preventDuplicates": true,
          "showDuration": "300",
          "hideDuration": "1000",
          "timeOut": "5000",
          "extendedTimeOut": "1000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut",
          onclick: this.fbLoginToggle
        };

        toastr["info"]("Facebook ile giriş yapmak için bana tıkla", "Hey, Daha kayıt olamadın.");

    }else{
      //TODO this
        console.log("Will send to "+ _curChannel);
    }

    this.reset();
  }

  reset(){
      this.text = "";
  }

  fbLoginToggle() {
    console.log('toggle Login!');
    if (!firebase.auth().currentUser) {
        var provider = new firebase.auth.FacebookAuthProvider();
        
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          
          //if user exists, login | else get username
          if(false){


          }else{

            toastr.options = {
              "closeButton": false,
              "debug": false,
              "newestOnTop": false,
              "progressBar": false,
              "positionClass": "toast-top-right",
              "preventDuplicates": false,
              "onclick": null,
              "showDuration": "9999999999",
              "hideDuration": "9999999",
              "timeOut": "999999",
              "extendedTimeOut": "9999999",
              "showEasing": "swing",
              "hideEasing": "linear",
              "showMethod": "fadeIn",
              "hideMethod": "fadeOut"
            }

            toastr["success"](usernameToastTemplate);

          }


          //toastr.options = {
          //  "closeButton": true,
          //  "debug": false,
          //  "newestOnTop": false,
          //  "progressBar": false,
          //  "positionClass": "toast-bottom-full-width",
          //  "preventDuplicates": true,
          //  "onclick": null,
          //  "showDuration": "300",
          //  "hideDuration": "1000",
          //  "timeOut": "5000",
          //  "extendedTimeOut": "1000",
          //  "showEasing": "swing",
          //  "hideEasing": "linear",
          //  "showMethod": "fadeIn",
          //  "hideMethod": "fadeOut"
          //}
          //
          //toastr["success"](" ", "Kayıt tamamlandı!")

        }).catch(function(error) {

          //Push Log to Firebase

          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
            // If you are using multiple auth providers on your app you should handle linking
            // the user's accounts here.
          } else {
            console.error(error);
          }
        });
      } else {
        firebase.auth().signOut();
      }
  
  }
  
}
 
const name = 'sendMessageBox';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: SendMessageBox
});