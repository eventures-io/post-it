'use strict';

angular.module('evtrsScrollApp')
    .controller('NavbarCtrl', function ($scope, $location, Auth, $rootScope) {

        if($location.path() === '/') {
            $scope.navbarHidden = 'navbar-hidden';
        }

        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                if (toState.name === 'base.home.intro') {
                    $scope.navbarHidden = 'navbar-hidden';
                }
                else {
                    $scope.navbarHidden = '';
                }
            })

        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.logout = function () {
            Auth.logout();
            $location.path('/login');
        };

        $scope.isActive = function (route) {
            return route === $location.path();
        };


    });