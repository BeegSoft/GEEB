geebSoft
	.controller('buscarMaestroCtrl', ['$firebaseArray', '$scope',
	    function($firebaseArray, $scope, $sessionStorage, $localStorage ){
	    	var vm = this;

            vm.limit = 5;
            
	    	var refTodosMaestros = new Firebase('https://geeb-e2f11.firebaseio.com/Maestros/TodosMaestros/');
            vm.arrayTodosMaestros = $firebaseArray(refTodosMaestros);

            var refMaestros = new Firebase('https://geeb-e2f11.firebaseio.com/Maestros/');
            var arrayMaestros = $firebaseArray(refMaestros);

            vm.Gnombre = function(maestro){
                localStorage.setItem("nombre", maestro);

                var childVisitas = refMaestros.child(maestro + '/visitas');
                vm.arrayVisitas = $firebaseArray(childVisitas);
                
                // refMaestros.child(maestro + '/visitas').set({ visitas: 1});
            }
            vm.busqueda = function(buscar){
                vm.buscarMaestro = buscar;
            }

            vm.masComentarios = function(){
                vm.limit += 5;
            }

	    }]);