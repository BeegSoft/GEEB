materialAdmin
    .config(function ($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/pages/home/home-vistos");

        $stateProvider
            
            .state ('maestros', {
                url: '/maestros',
                templateUrl: 'views/maestros.html',
            })
            .state ('home', {
                url: '/home',
                templateUrl: 'views/home.html',
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

            .state ('pages', {
                url: '/pages',
                templateUrl: 'views/common.html'
            })
            //Profile
        
            .state ('pages.profile', {
                url: '/profile',
                templateUrl: 'views/profile.html'
            })
        
            .state ('pages.profile.profile-comentarios', {
                url: '/profile-comentarios',
                templateUrl: 'views/profile-comentarios.html',
            })

            .state ('pages.profile.profile-preguntas', {
                url: '/profile-preguntas',
                templateUrl: 'views/profile-preguntas.html',
            })

            .state ('pages.home', {
                url: '/home',
                templateUrl: 'views/home.html'
            })
        
            .state ('pages.home.home-vistos', {
                url: '/home-vistos',
                templateUrl: 'views/home-vistos.html',
            })

            .state ('pages.home.home-comentados', {
                url: '/home-comentados',
                templateUrl: 'views/home-comentados.html',
            })
            .state ('pages.home.home-valorados', {
                url: '/home-valorados',
                templateUrl: 'views/home-valorados.html',
            })
        
            //-------------------------------
        
            .state ('pages.listview', {
                url: '/listview',
                templateUrl: 'views/list-view.html'
            })
        
            .state ('pages.messages', {
                url: '/messages',
                templateUrl: 'views/messages.html'
            })
        
            .state ('pages.pricing-table', {
                url: '/pricing-table',
                templateUrl: 'views/pricing-table.html'
            })
        
            .state ('pages.contacts', {
                url: '/contacts',
                templateUrl: 'views/contacts.html'
            })
        
            .state ('pages.invoice', {
                url: '/invoice',
                templateUrl: 'views/invoice.html'
            })
                                
            .state ('pages.wall', {
                url: '/wall',
                templateUrl: 'views/wall.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'vendors',
                                insertBefore: '#app-level',
                                files: [
                                    'vendors/bower_components/autosize/dist/autosize.min.js',
                                    'vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'vendors/bower_components/mediaelement/build/mediaelement-and-player.js',
                                    'vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                                ]
                            }
                        ])
                    }
                }
            })
    });