(function() {
  function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

        $stateProvider
          .state('old', {
                url: '/oldlists',
                controller: 'OldListCtrl as oldlists',
                templateUrl: '/templates/oldlists.html'
              })
            .state('list', {
                url: '/',
                controller: 'ListCtrl as list',
                templateUrl: '/templates/list.html'
            });
    }
     angular
      .module('BoomBoom', ['ui.router', 'firebase', 'ui.bootstrap'])
      .config(config);
 })();
