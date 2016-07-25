'use strict';

var app = angular.module('app', ['firebase', 'ngRoute'])
.config(function ($routeProvider) {
		// Aqui agreguen todas las vistas que tendra la pagina
		$routeProvider
		.when('/agregarMaestro',{
			templateUrl: 'views/formMaestros.html',
			controller: 'agregarMaestroController',
			controllerAs: 'am'
		});
	}); 

//Factory para obtener el array y agregar a los maestros en firebase
app.factory('agregarMaestro',['$firebaseArray',
	function($firebaseArray){
		var ref = new Firebase('https://geeb-e2f11.firebaseio.com/Maestros/');
		var re = ref.child('pepino/')
		return $firebaseArray(ref);
	}]);

app.factory('nombres',['$firebaseArray',
	function($firebaseArray){
		var ref = new Firebase('https://geeb-e2f11.firebaseio.com/Maestros');
		return $firebaseArray(ref);
	}]);

app.controller('agregarMaestroController', ['agregarMaestro','nombres',
	function(agregarMaestro, nombres){
		var am = this;

		am.Maestros = agregarMaestro;
		am.mostrarNombres = nombres;
		am.select = 'Rodriguez';

		am.anadirMaestro = function(){
			am.Maestros.$add({
				nombre: am.nombreMaestro
			});
			am.nombreMaestro = '';
		};

		
	}]);
app.controller('agregarMateriaController',['$firebaseArray',
	function($firebaseArray){
		var ama = this;

	}]);
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