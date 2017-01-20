geebSoft

  .controller('perfilMaestroCtrl', ['$firebaseArray', '$scope', '$rootScope',
    function ($firebaseArray, $scope, $rootScope, $sessionStorage, $localStorage) {

      //public var
      var vm = this;
      vm.maestroNombre = localStorage.getItem("maestroNombre");
      vm.maestro = {};
      vm.maestroComentarios = {};
      vm.maestroComentariosTotal = 0;
      vm.maestroMateriasImpartidas = {};
      vm.loading = true;

      // public function
      vm.funcionMeGusta = funcionMeGusta;

      // private function
      function activate() {
        var ref = firebase.database().ref('Maestros/' + vm.maestroNombre);
        ref.on('value', function (snapshot) {
          vm.maestro = snapshot.val();
          vm.maestroComentarios = vm.maestro.maestroComentarios;
          vm.maestroComentariosTotal = vm.maestro.maestroComentariosTotal;
          vm.maestroMateriasImpartidas = vm.maestro.materiasImpartidasPorMaestro;
          vm.loading = false;
          $rootScope.$apply();
        })
      }

      activate();

      function funcionMeGusta(numeroDeLikes) {

      }

      // //checar si ya existe el maestro
      // for (var i = 0; i < vm.arrayTodosMaestros.length; i++) {
      //   if (vm.arrayTodosMaestros[i].nombre === vm.nombreLocal) {
      //     vm.bol = true;
      //   }
      // }
      // if (vm.bol === false) {
      //   vm.arrayTodosMaestros.$add({
      //     nombre: vm.nombreLocal
      //   });
      // }
    }]);
