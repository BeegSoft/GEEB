geebSoft
	.controller('buscarMaestroCtrl', ['$firebaseArray', '$scope', '$rootScope', 'settings'
    ,function($firebaseArray, $scope, $rootScope, settings, $sessionStorage, $localStorage ){

      //public var
      var vm = this;
      vm.settings = settings;
      vm.searchFilter = '';
      vm.search = '';
      vm.loading = true;
      vm.maestros = {};

      //public functions
      vm.filterToSearch = filterToSearch;
      vm.guardarMaestro = guardarMaestro;

      //private functions
      function activate() {
        var ref = firebase.database().ref('Maestros');
        ref.on('value', function (snapshot) {
          vm.maestros = snapshot.val();
          vm.loading = false;
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
