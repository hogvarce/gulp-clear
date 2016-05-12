'use strict';

app.controller('mainController', function ($scope, $mdDialog) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
  $scope.showMessage = function(message){
      var alert = $mdDialog.alert({
         title: 'Внимание',
         textContent: message,
         ok: 'Закрыть'
       });
       $mdDialog.show( alert );
  };
});
