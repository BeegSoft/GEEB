geebSoft
	.controller('buscarMaestroCtrl', ['$firebaseArray', '$scope', '$rootScope', 'settings', '$location', '$scope', '$stateParams'
    ,function($firebaseArray, $scope, $rootScope, settings, $location, $scope, $stateParams){

      //public var
      var vm = this;
      vm.settings = settings;
      vm.searchFilter = '';
      vm.search = '';
      vm.loading = true;
      vm.maestros = {};

      // hay_cambio = function(e) {
      //   console.log("Dentro de la clave " + e.key + " el valor anterior era " + e.oldValue + ' y el nuevo es ' + e.newValue);
      // }
      // $window.onload = function () {
      //   $window.addEventListener('storage', hay_cambio, false);
      // }
      //
      function buscarMaestro(maestro) {
        vm.search = maestro;
        $location.path('maestros');
        console.log(vm.searchFilter);
        // $scope.$apply();
      }

      //public functions
      vm.filterToSearch = filterToSearch;
      vm.guardarMaestro = guardarMaestro;
      vm.buscarMaestro = buscarMaestro;

      //private functions
      function activate() {
        var ref = firebase.database().ref('Maestros');
        ref.on('value', function (snapshot) {
          vm.maestros = snapshot.val();
          vm.loading = false;
          vm.searchFilter = $stateParams.contactId;

          // sessionStorage.clear();
          $rootScope.$apply();
        });
      }
      activate();

      function filterToSearch(filter) {
        vm.searchFilter = filter;
      }

      function guardarMaestro(maestroNombre) {
        localStorage.setItem('maestroNombre', maestroNombre);
      }

    }]);
