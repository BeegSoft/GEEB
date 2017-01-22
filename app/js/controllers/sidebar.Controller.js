/**
 * Created by Toshiba on 20/01/2017.
 */
geebSoft
  .controller('sidebarCtrl', ['$firebaseArray', '$scope', '$rootScope', 'settings'
    , function ($firebaseArray, $scope, $rootScope, settings) {

      //public var
      var vm = this;
      vm.usuarioNombre = '';

      //public functions
      vm.cerrarSesion = cerrarSesion;

      //private functions
      function activate() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            vm.usuarioNombre = user.displayName;
          }
        });
      }

      activate();

      function cerrarSesion() {
        firebase.auth().signOut().then(function() {
          // Exito
        }, function(error) {
          //TODO: crear las notificaciones para los errores esperados
        });
      }

    }]);
