var app;
(function (app) {
    var formCtrl = (function () {
        function formCtrl($mdDialog, $mdToast) {
            this.$mdDialog = $mdDialog;
            this.$mdToast = $mdToast;
            this.contact = {
                name: '',
                phone: ''
            };
        }
        formCtrl.prototype.reset = function () {
            this.contact.name = '';
            this.contact.phone = '';
        };
        ;
        formCtrl.prototype.submit = function () {
            var toast = this.$mdToast.simple()
                .content('Форма отправлена')
                .position('top right');
            this.$mdToast.show(toast);
            this.reset();
        };
        formCtrl.$inject = ['$mdDialog', '$mdToast'];
        return formCtrl;
    }());
    app.formCtrl = formCtrl;
})(app || (app = {}));
