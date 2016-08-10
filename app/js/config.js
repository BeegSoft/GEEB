materialAdmin
    .config(function ($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/maestros");

        $stateProvider
            
            .state ('maestros', {
                url: '/maestros',
                templateUrl: 'views/maestros.html',
            })

            .state ('materias', {
                url: '/materias',
                templateUrl: 'views/materias.html'
            })
            .state ('sugerencias', {
                url: '/sugerencias',
                templateUrl: 'views/sugerencias.html',
            })
            .state ('preHorarios', {
                url: '/preHorarios',
                templateUrl: 'views/preHorarios.html'
            })
    });