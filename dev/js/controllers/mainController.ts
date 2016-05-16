module app {
    export class MainController {
        static $inject = ['$mdSidenav', '$mdDialog', '$mdMedia', '$location'];
        constructor(
             private $mdSidenav,
             private $mdDialog,
             private $mdMedia,
             private $location
        ){
            var self = this;
        }
        phones: [] = [
          {'name': 'Nexus S',
           'snippet': 'Fast just got faster with Nexus S.'},
          {'name': 'Motorola XOOM™ with Wi-Fi',
           'snippet': 'The Next, Next Generation tablet.'},
          {'name': 'MOTOROLA XOOM™',
           'snippet': 'The Next, Next Generation tablet.'}
        ];
        showMessage(message: string) : void {
            var dialog = this.$mdDialog.alert({
               title: 'Внимание',
               textContent: message,
               templateUrl: '/element/jade-blocks/dialog.html',
               controller: dialogCtrl,
               controllerAs: 'dc'
             });
             this.$mdDialog.show( dialog );
        };
        toogleSideNav() : void {
           this.$mdSidenav('left').toggle();
        };
        menuLink(link: string) : void {
          this.$location.path(link);
          this.$mdSidenav('left').toggle();
        };
    }
}
