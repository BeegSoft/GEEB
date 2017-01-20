/**
 * Created by Toshiba on 19/01/2017.
 */
geebSoft
  .controller('agregarMaestroCtrl', ['$firebaseArray', '$scope', '$rootScope', 'alertService'
    , function ($firebaseArray, $scope, $rootScope, alertService) {

      //public var
      var vm = this;
      vm.maestroNombre = '';

      //public functions
      vm.agregarMaestro = agregarMaestro;

      //private functions
      function activate() {

      }

      activate();

      function agregarMaestro() {
        firebase.database().ref('Maestros/' + vm.maestroNombre).set({
          maestroNombre: vm.maestroNombre,
          maestroComentariosTotal: 1,
          maestroComentarios: {
            0: {
              usuarioComentario: "Ejemplo como se vería tu comentario...",
              usuarioFechaPublicacion: "20/01/2017",
              usuarioFotoPerfil: "",
              usuarioLike: 0,
              usuarioNombre: "Ejemplo de comentario"
            }
          }
        });
        vm.maestroNombre = '';
        $('#botonNotificar').click();

      }

      //----------------------P E L I G R O----------------------------
      //Peligroso puede borrar toda la informacion de la base de datos
      //preferible usar update cuando la base de datos contenga mucha informacion

      // function cambiarEstructuraBaseDatos() {
      //   var ref = firebase.database().ref('Maestros');
      //   ref.on('value', function (snapshot) {
      //     for(var i in snapshot.val()){
      //       firebase.database().ref('Maestros/' + i).set({
      //         maestroNombre: i,
      //         maestroComentariosTotal: 1,
      //         maestroComentarios: {
      //           0: {
      //             usuarioComentario: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae dolor dolorum eius esse harum illo itaque, iure maiores nostrum officiis, omnis perspiciatis sequi, sint sit suscipit tenetur vitae voluptas.",
      //             usuarioFechaPublicacion: "20/01/2017",
      //             usuarioFotoPerfil: "",
      //             usuarioLike: 0,
      //             usuarioNombre: "Ejemplo de comentario"
      //           }
      //         }
      //       })
      //     }
      //   })
      // }
      //----------------------P E L I G R O----------------------------

    }]);
