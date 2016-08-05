'use strict';

var app = angular.module('app', ['firebase', 'ngRoute', 'ngMaterial'])
.config(function ($routeProvider) {
		// Aqui agreguen todas las vistas que tendra la pagina
		$routeProvider
		.when('/agregarMaestro',{
			templateUrl: 'views/formMaestros.html',
			controller: 'agregarMaestroController',
			controllerAs: 'vm'
		})
		.when('/agregarMateria',{
			templateUrl: 'views/formMaterias.html',
			controller: 'agregarMateriaController',
			controllerAs: 'vm'
		})
		.when('/perfilMaestro',{
			templateUrl: 'views/perfil-maestro.html',
			controller: 'agregarMateriaController',
			controllerAs: 'vm'
		})
		.when('/buscarMaterias',{
			templateUrl: 'views/Card.html',
			controller: 'agregarMateriaController',
			controllerAs: 'vm'
		})
		.when('/carreras',{
			templateUrl: 'views/Carreras.html',
			controller: 'agregarMateriaController',
			controllerAs: 'vm'
		});
	}); 

//Inicio del controlador para agregar nombre de los profesores
app.controller('agregarMaestroController', ['$firebaseArray',
	function($firebaseArray){
		var vm = this;
		var ref = new Firebase('https://geeb-e2f11.firebaseio.com/Maestros/');

		//conexion para saber si existe el mismo maestro
		var refBuscar = new Firebase('https://geeb-e2f11.firebaseio.com/Maestros/TodosMaestros/');
		vm.bol = false;
		var buscarTodos = $firebaseArray(refBuscar);
		vm.buscarMaestro = buscarTodos;


		vm.anadirMaestro = function(){
			
			//Buscamos si ya existe el maestro
			for (var i = 0; i < vm.buscarMaestro.length; i++) {
				if(vm.buscarMaestro[i].nombre === vm.nombreMaestro){
					vm.bol = true;
					alert("Ya esta agregado ese Maestro!");
				};
			};

			if(vm.bol === false){
				var ja = ref.child(vm.nombreMaestro);

				//Agregamos nombres de los maestros
				var agregar = $firebaseArray(ja);
				vm.Maestros = agregar;

				vm.Maestros.$add({
					nombre: vm.nombreMaestro
				});

				//Aqui agregamos maestros a otro Array para de ahi sacar los nombres
				var ja2 = ref.child("TodosMaestros");
				var agregar2 = $firebaseArray(ja2);
				vm.Maestros2 = agregar2;
				vm.Maestros2.$add({
					nombre: vm.nombreMaestro
				});
				vm.nombreMaestro = '';
			};
			vm.bol = false;
		};
	}]);
//Fin del controlador de agregar nombres de profesores


//Aqui agregamos materias a los profesores
app.controller('materiaController',['$firebaseArray',
	function($firebaseArray){
		var vm = this;
		var ref = new Firebase('https://geeb-e2f11.firebaseio.com/Maestros/');
		var refMa = new Firebase('https://geeb-e2f11.firebaseio.com/Materias/');
		var mostrarMa = $firebaseArray(refMa);

		vm.moMateria = mostrarMa;

		var child = ref.child("TodosMaestros");
		var moMaestros = $firebaseArray(child);
		vm.mostrarNombres = moMaestros;
		vm.comentarios= "Materias";
		vm.bol = false;
		var refCompara = new Firebase('https://geeb-e2f11.firebaseio.com/Maestros/MARTINEZ%20CHAVEZ%20GABRIEL/Materias/');
			var conex = $firebaseArray(refCompara);
		vm.agregarMateria = function(){
			var maestroEscogido = ref.child(vm.maestro);
			var coment = maestroEscogido.child(vm.comentarios);
			var materias = $firebaseArray(coment);
			vm.Materias = materias;

			
			vm.Materias2 = conex;
			//Buscamos si ya tiene la materia ese maestro
			for (var i = 0; i < vm.Materias2.length; i++) {
				if(vm.Materias2[i].materia === vm.materia){
					vm.bol = true;
					alert("Este maestro ya tiene esa materia!");
				};
			};
			if(vm.bol === false){
				vm.Materias.$add({
					materia: vm.materia
				});
				vm.materia = '';
			};
			vm.bol = false;
		};
	}]);
//Fin de agregar materia a los profesores

//Aqui añadimos las materias existentes
app.controller('agregarMateriaController', ['$firebaseArray',
	function($firebaseArray, $mdDialog, $mdMedia){
		var vm = this;
		var ref = new Firebase('https://geeb-e2f11.firebaseio.com/Materias/');
		vm.Materias = $firebaseArray(ref);
		vm.bol = false;
		vm.anadirMateria = function(){
			for (var i = 0; i < vm.Materias.length; i++) {
				if(vm.Materias[i].materia === vm.materia){
					vm.bol = true;
					alert("Ya existe esa materia!");
				};
			};
				
			if(vm.bol === false){
				vm.Materias.$add({
					materia: vm.materia
				});
			};
			vm.materia = '';
			vm.bol = false;
		};

		vm.alert = function(ev){
			if(vm.bol === false){
				$mdDialog.show(
		      	$mdDialog.alert()
			        .parent(angular.element(document.querySelector('#popupContainer')))
			        .clickOutsideToClose(true)
			        .title('This is an alert title')
			        .textContent('You can specify some description text in here.')
			        .ariaLabel('Alert Dialog Demo')
			        .ok('Got it!')
			        .targetEvent(ev)
	    		);
			};
		};
	}]);
//Fin de agregar materias existentes

//Aqui para controlar el menu y sus focus
app.controller('menusController', [
	function(){
		var ck = this;


		ck.ponerLink = function(){
			if(document.getElementById("men1").classList.contains('acti')){
				document.getElementById("men1").classList.remove('acti');
			};
			if(document.getElementById("men2").classList.contains('acti')){
				document.getElementById("men2").classList.remove('acti');
			};
			if(document.getElementById("men3").classList.contains('acti')){
				document.getElementById("men3").classList.remove('acti');
			};
			if(document.getElementById("men4").classList.contains('acti')){
				document.getElementById("men4").classList.remove('acti');
			};
			if(document.getElementById("men5").classList.contains('acti')){
				document.getElementById("men5").classList.remove('acti');
			};
			document.getElementById("men0").classList.add('acti');
		}

		ck.ponerLink1 = function(){
			if(document.getElementById("men0").classList.contains('acti')){
				document.getElementById("men0").classList.remove('acti');
			};
			if(document.getElementById("men2").classList.contains('acti')){
				document.getElementById("men2").classList.remove('acti');
			};
			if(document.getElementById("men3").classList.contains('acti')){
				document.getElementById("men3").classList.remove('acti');
			};
			if(document.getElementById("men4").classList.contains('acti')){
				document.getElementById("men4").classList.remove('acti');
			};
			if(document.getElementById("men5").classList.contains('acti')){
				document.getElementById("men5").classList.remove('acti');
			};
			document.getElementById("men1").classList.add('acti');
		}
		ck.ponerLink2 = function(){
			if(document.getElementById("men1").classList.contains('acti')){
				document.getElementById("men1").classList.remove('acti');
			};
			if(document.getElementById("men0").classList.contains('acti')){
				document.getElementById("men0").classList.remove('acti');
			};
			if(document.getElementById("men3").classList.contains('acti')){
				document.getElementById("men3").classList.remove('acti');
			};
			if(document.getElementById("men4").classList.contains('acti')){
				document.getElementById("men4").classList.remove('acti');
			};
			if(document.getElementById("men5").classList.contains('acti')){
				document.getElementById("men5").classList.remove('acti');
			};
			document.getElementById("men2").classList.add('acti');
		}
		ck.ponerLink3 = function(){
			if(document.getElementById("men1").classList.contains('acti')){
				document.getElementById("men1").classList.remove('acti');
			};
			if(document.getElementById("men2").classList.contains('acti')){
				document.getElementById("men2").classList.remove('acti');
			};
			if(document.getElementById("men0").classList.contains('acti')){
				document.getElementById("men0").classList.remove('acti');
			};
			if(document.getElementById("men4").classList.contains('acti')){
				document.getElementById("men4").classList.remove('acti');
			};
			if(document.getElementById("men5").classList.contains('acti')){
				document.getElementById("men5").classList.remove('acti');
			};
			document.getElementById("men3").classList.add('acti');
		}
		ck.ponerLink4 = function(){
			if(document.getElementById("men1").classList.contains('acti')){
				document.getElementById("men1").classList.remove('acti');
			};
			if(document.getElementById("men2").classList.contains('acti')){
				document.getElementById("men2").classList.remove('acti');
			};
			if(document.getElementById("men3").classList.contains('acti')){
				document.getElementById("men3").classList.remove('acti');
			};
			if(document.getElementById("men0").classList.contains('acti')){
				document.getElementById("men0").classList.remove('acti');
			};
			if(document.getElementById("men5").classList.contains('acti')){
				document.getElementById("men5").classList.remove('acti');
			};
			document.getElementById("men4").classList.add('acti');
		}
		ck.ponerLink5 = function(){
			if(document.getElementById("men1").classList.contains('acti')){
				document.getElementById("men1").classList.remove('acti');
			};
			if(document.getElementById("men2").classList.contains('acti')){
				document.getElementById("men2").classList.remove('acti');
			};
			if(document.getElementById("men3").classList.contains('acti')){
				document.getElementById("men3").classList.remove('acti');
			};
			if(document.getElementById("men4").classList.contains('acti')){
				document.getElementById("men4").classList.remove('acti');
			};
			if(document.getElementById("men0").classList.contains('acti')){
				document.getElementById("men0").classList.remove('acti');
			};
			document.getElementById("men5").classList.add('acti');
		}

	}]);
//Fin de modificar el menu

//Busqueda de materias
app.controller('busqueda_materias', ['$firebaseArray',
	function($firebaseArray){
		var vm = this;
		var ref = new Firebase('https://geeb-e2f11.firebaseio.com/Maestros/');
		vm.buscarMaterias = $firebaseArray(ref);


	}]);
//Fin de busqueda por materias