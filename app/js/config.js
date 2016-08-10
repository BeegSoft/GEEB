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
            .state ('sistemas', {
                url: '/sistemas',
                templateUrl: 'views/PreHorarios/sistemas.html'
            })
            .state ('electrica', {
                url: '/electrica',
                templateUrl: 'views/PreHorarios/electrica.html'
            })
            .state ('electronica', {
                url: '/electronica',
                templateUrl: 'views/PreHorarios/electronica.html'
            })
            .state ('mecanica', {
                url: '/mecanica',
                templateUrl: 'views/PreHorarios/mecanica.html'
            })
            .state ('mecatronica', {
                url: '/mecatronica',
                templateUrl: 'views/PreHorarios/mecatronica.html'
            })
            .state ('administracion', {
                url: '/administracion',
                templateUrl: 'views/PreHorarios/administracion.html'
            })
            .state ('gestion', {
                url: '/gestion',
                templateUrl: 'views/PreHorarios/gestion.html'
            })
            .state ('informatica', {
                url: '/informatica',
                templateUrl: 'views/PreHorarios/informatica.html'
            })
            .state ('industrial', {
                url: '/industrial',
                templateUrl: 'views/PreHorarios/industrial.html'
            })
            .state ('biomedica', {
                url: '/biomedica',
                templateUrl: 'views/PreHorarios/biomedica.html'
            })
    });