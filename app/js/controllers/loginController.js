/**
 * Created by Toshiba on 18/12/2016.
 */

geebSoft
  .controller('loginCtrl', ['$firebaseArray', '$location', '$scope', '$rootScope', 'alertService',
    function($firebaseArray, $location, $scope, $rootScope, alertService, $sessionStorage, $localStorage ){

      //firebase reference
      var refGeeb = new Firebase('https://geeb-e2f11.firebaseio.com/');

      //public var
      var vm = this;
      vm.email = '';
      vm.password = '';
      vm.checkUser = false;
      vm.resetEmail = '';

      //public functions
      vm.activate = activate;
      vm.login = login;
      vm.resetPassword = resetPassword;

      //private functions
      function activate() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            $location.path('/maestros');
            $rootScope.$apply();
          }
        });
      }

      activate();

      function login(accountType) {
        switch (accountType){

          case 'FACEBOOK':
            var provider = new firebase.auth.FacebookAuthProvider();

            firebase.auth().signInWithPopup(provider).then(function(result) {
              var token = result.credential.accessToken;
              var user = result.user;
              firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                  location.href = '#/maestros';
                }
              });
            }).catch(function(error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              var email = error.email;
              var credential = error.credential;
              switch (errorCode){
                case 'auth/account-exists-with-different-credential':
                  alertService.error('Cuenta ya en uso', 'Ya tienes una cuenta con este correo electronico!');
                  break;
              }
            });

            break;

          case 'GOOGLE':
            var provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then(function(result) {
              var token = result.credential.accessToken;
              var user = result.user;
              firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                  location.href = '#/maestros';
                }
              });
            }).catch(function(error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              var email = error.email;
              var credential = error.credential;
            });
            break;

          case 'EMAIL':
            //Iniciamos sesion
            firebase.auth().signInWithEmailAndPassword(vm.email, vm.password).then(function () {
              //Comprobamos si está autenticado
              firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                  location.href = '#/maestros';
                }
              });
              //En caso de error lo cachamos aqui y mostramos el error en pantalla
            }).catch(function(error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(error);
              switch (errorCode){
                case 'auth/wrong-password':
                  alertService.error('Contraseña incorrecta', 'Verifica que tu contraseña este corretamente escrita');
                  break;
                case 'auth/user-not-found':
                  alertService.error('Usuario no encontrado', 'Verifica que el usuario que escribiste sea correcto');
                  break;
                case 'auth/invalid-email':
                  alertService.error('Email no valido', 'Escribe un email valido');
                  break;
                case 'auth/user-disabled':
                  alertService.error('Usuario baneado', 'Ponte en contacto con los administradores de la pagina para una solución');
                  break;
              }
            });
            break;
        }
      }

      function resetPassword() {
        var auth = firebase.auth();

        auth.sendPasswordResetEmail(vm.resetEmail).then(function() {
          alertService.complete('Correcto', 'Consulta tu bandeja de correo eletronico').then(function () {
            location.href = '#/login';
          })
        }, function(error) {
          switch (error.code){
            case 'auth/user-not-found':
              alertService.error('Usuario no encontrado', 'Verifica que el usuario que escribiste sea correcto');
              break;
            case 'auth/user-disabled':
              alertService.error('Usuario baneado', 'Ponte en contacto con los administradores de la pagina para una solución');
              break;
          }
        });
      }
    }
  ]);
