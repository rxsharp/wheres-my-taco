(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('page1', {
        url: '/1',
        templateUrl: 'app/pages/page.1.html'
      })
      .state('page2', {
        url: '/2',
        templateUrl: 'app/pages/page.2.html'
      })
      .state('page3', {
        url: '/3',
        templateUrl: 'app/pages/page.3.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
