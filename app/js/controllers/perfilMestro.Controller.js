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
      vm.comentario = '';
      vm.loading = true;
      vm.usuarioNombre = '';
      vm.usuarioFotoPerfil = '';

      // public function
      vm.funcionMeGusta = funcionMeGusta;
      vm.enviarComentario = enviarComentario;
      vm.activate = activate;

      // private function
      function activate() {

        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            var ref = firebase.database().ref('Maestros/' + vm.maestroNombre);
            ref.on('value', function (snapshot) {
              vm.maestro = snapshot.val();
              vm.maestroComentarios = vm.maestro.maestroComentarios;
              vm.maestroComentariosTotal = vm.maestro.maestroComentariosTotal;
              vm.maestroMateriasImpartidas = vm.maestro.materiasImpartidasPorMaestro;
              vm.loading = false;
              $rootScope.$apply();
            });

            if(user.providerData[0].providerId == 'email'){

            }else{
              vm.usuarioNombre = user.displayName;
              vm.usuarioFotoPerfil = user.photoURL;
            }
          }else{
            $location.path('/login');
            $rootScope.$apply();
          }
        });
      }

      function funcionMeGusta(objComentarioLike, comentarioLike) {
        for (var keyObjComentario in vm.maestroComentarios){
          if(vm.maestroComentarios[keyObjComentario] == objComentarioLike){
            firebase.database().ref('Maestros/' + vm.maestroNombre + '/maestroComentarios/' + keyObjComentario).update({
              usuarioLike: (comentarioLike + 1)
            })
          }
        }
      }

      function enviarComentario() {
        var date = new Date();
        var fechaPublicacion = date.getDate() + '/' + (date.getUTCMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getUTCMinutes();

        firebase.database().ref('Maestros/' + vm.maestroNombre + '/maestroComentarios').push({
          usuarioComentario: vm.comentario,
          usuarioFechaPublicacion: fechaPublicacion,
          usuarioFotoPerfil: vm.usuarioFotoPerfil,
          usuarioLike: 0,
          usuarioNombre: vm.usuarioNombre
        })

        vm.comentario = '';
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
