module app {
    angular.module('myApp', ['ngMaterial', 'ngMdIcons', 'ngRoute'])
    .controller('mainController', MainController)
    .config(($mdIconProvider: angular.material.IIconProvider,
         $mdThemingProvider: angular.material.IThemingProvider,
         $routeProvider: angular.routeProvider) => {
                $mdThemingProvider.definePalette('paletteNord', {
                  '50': '4b4b4b',
                  '100': 'ffebee',
                  '200': 'ef9a9a',
                  '300': 'e57373',
                  '400': 'ef5350',
                  '500': 'f44336',
                  '600': 'e53935',
                  '700': 'd32f2f',
                  '800': 'c62828',
                  '900': 'b71c1c',
                  'A100': 'ff8a80',
                  'A200': 'ff5252',
                  'A400': 'ff1744',
                  'A700': 'd50000',
              });

            $mdThemingProvider.theme('default')
                  .accentPalette('indigo', {
                      'default': '400',
                      'hue-1': 'A400'
                  });

            $mdIconProvider.icon('menu', '/bower_components/material-design-icons/navigation/svg/design/ic_menu_48px.svg', 48)
                  .icon('check', '/bower_components/material-design-icons/navigation/svg/design/ic_check_48px.svg', 48);

            $routeProvider.
                when('/', {
                templateUrl: 'element/jade-blocks/main.html',
                    controller: 'mainController'
                }).
                when('/photo', {
                templateUrl: 'element/jade-blocks/photos.html',
                    controller: 'mainController'
                })
    });
}
