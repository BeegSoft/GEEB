geebSoft
	.controller('perfilMestroCtrl', ['$firebaseArray', '$scope',
	    function($firebaseArray, $scope, $sessionStorage, $localStorage ){
	    	var vm = this;

            vm.limit = 5;

            //Obteniendo los json de Firebase
	    	var refTodosMaestros = new Firebase('https://geeb-e2f11.firebaseio.com/Maestros/TodosMaestros/');
            vm.arrayTodosMaestros = $firebaseArray(refTodosMaestros);

            var refMaestros = new Firebase('https://geeb-e2f11.firebaseio.com/Maestros/');
            var arrayMaestros = $firebaseArray(refMaestros);


            vm.nombreLocal = localStorage.getItem("nombre");
            vm.lengthComentarios = localStorage.getItem("comentario");

            var childMa = refMaestros.child(vm.nombreLocal + '/Comentarios/');
            vm.arrayComentarios = $firebaseArray(childMa);

            //Contar los comentarios
            vm.arrayComentarios.$loaded().then(function() {
               vm.conta = vm.arrayComentarios.length;
            });

            //Promediar la calificacion
            var childCalificacion = refMaestros.child(vm.nombreLocal + '/Calificacion/');
            vm.arrayCalificaciones = $firebaseArray(childCalificacion);

            vm.arrayCalificaciones.$loaded().then(function() {
                var sumaCalificacion = 0;
                for (var i = 0; i < vm.arrayCalificaciones.length; i++) {
                    sumaCalificacion = sumaCalificacion + vm.arrayCalificaciones[i].calificacion;
                };

                vm.promedioCalificacion = (sumaCalificacion / vm.arrayCalificaciones.length).toFixed(1);
            });

            vm.bol = false;

            vm.anadirComentario = function(){
                var childMaestro = refMaestros.child(vm.nombreLocal + '/Comentarios/');
                vm.Comentarios =  $firebaseArray(childMaestro);

                vm.Comentarios.$add({
                    titulo: vm.titulo,
                    cuerpo: vm.cuerpo
                });

                //checar si ya existe el maestro
                for (var i = 0; i < vm.arrayTodosMaestros.length; i++) {
                    if(vm.arrayTodosMaestros[i].nombre === vm.nombreLocal){
                        vm.bol = true;
                    };
                };
                    
                if(vm.bol === false){
                    vm.arrayTodosMaestros.$add({
                        nombre: vm.nombreLocal
                    });
                };

                //Para contar los comentarios
                vm.arrayComentarios.$loaded().then(function() {
                   vm.conta = vm.arrayComentarios.length;
                });

                vm.titulo = '';
                vm.cuerpo = '';
                vm.bol = false;
            }
            
            

            vm.rating =function(rating){
                vm.star = rating;
            }

            vm.enviarCalificacion = function(){
                var childCalificacion = refMaestros.child(vm.nombreLocal + '/Calificacion/');
                vm.arrayCalificaciones = $firebaseArray(childCalificacion);

                vm.arrayCalificaciones.$add({
                    calificacion: vm.star
                })
                
                vm.arrayCalificaciones.$loaded().then(function() {
                    var sumaCalificacion = 0;
                    for (var i = 0; i < vm.arrayCalificaciones.length; i++) {
                        sumaCalificacion = sumaCalificacion + vm.arrayCalificaciones[i].calificacion;
                    };

                    vm.promedioCalificacion = sumaCalificacion / vm.arrayCalificaciones.length;
                });
                alert('Gracias por calificar a este maestro!');
            }

            vm.masComentarios = function(){
                vm.limit += 5;
            }

	    }]);