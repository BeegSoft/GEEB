/**
 * Created by Toshiba on 20/01/2017.
 */
geebSoft
  .controller('buscadorGeneralCtrl', ['$firebaseArray', '$scope', '$rootScope', 'settings', '$location'
    , function ($firebaseArray, $scope, $rootScope, settings, $location) {

      //public var
      var vm = this;


      //public functions
      vm.buscarMaestro = buscarMaestro;

      //private functions
      function activate() {

      }

      activate();

      function buscarMaestro(maestro) {
        localStorage.setItem('buscarMaestro', maestro);
        $location.path('maestros');
        // $rootScope.$apply();
      }

    }]);
