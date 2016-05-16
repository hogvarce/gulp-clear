var app;
(function (app) {
    var MainController = (function () {
        function MainController($mdSidenav, $mdDialog, $mdMedia) {
            this.$mdSidenav = $mdSidenav;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.phones = [
                { 'name': 'Nexus S',
                    'snippet': 'Fast just got faster with Nexus S.' },
                { 'name': 'Motorola XOOM™ with Wi-Fi',
                    'snippet': 'The Next, Next Generation tablet.' },
                { 'name': 'MOTOROLA XOOM™',
                    'snippet': 'The Next, Next Generation tablet.' }
            ];
            var self = this;
        }
        MainController.prototype.showMessage = function (message) {
            var dialog = this.$mdDialog.alert({
                title: 'Внимание',
                textContent: message,
                templateUrl: '/element/jade-blocks/dialog.html',
                controller: app.dialogCtrl,
                controllerAs: 'dc'
            });
            this.$mdDialog.show(dialog);
        };
        ;
        MainController.prototype.toogleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        ;
        MainController.prototype.menuLink = function (link) {
            console.log(link);
            this.$mdSidenav('left').toggle();
        };
        ;
        MainController.$inject = ['$mdSidenav', '$mdDialog', '$mdMedia'];
        return MainController;
    })();
    app.MainController = MainController;
})(app || (app = {}));
