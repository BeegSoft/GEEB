'use strict';

var app = angular.module('app', ['firebase', 'ngRoute'])
	.config(function ($routeProvider) {
		// Aqui agreguen todas las vistas que tendra la pagina
		$routeProvider
		.when('/',{
			templateUrl: 'views/agregarMaestro.html',
			controller: 'agregarMaestroController',
			controllerAs: 'am'
		});
	});

//Factory para obtener el array y agregar a los maestros en firebase
app.factory('agregarMaestro',['$firebaseArray',
	function($firebaseArray){
		var ref = new Firebase('https://geeb-e2f11.firebaseio.com/Maestros/')
		return $firebaseArray(ref);
	}]);

app.controller('agregarMaestroController', ['agregarMaestro',
	function(agregarMaestro){
		var am = this;

		am.Maestros = agregarMaestro;

		am.añadirMaestro = function(){
			am.Maestros.$add({
				am.nombreMaestro;
			});
			am.nombreMaestro = '';
		};
	}]);
app.controller('agregarMateriaController',['$firebaseArray',
	function($firebaseArray){
		var ama = this;
		
	}])