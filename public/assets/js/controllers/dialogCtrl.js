var app;
(function (app) {
    var dialogCtrl = (function () {
        function dialogCtrl($mdDialog) {
            this.$mdDialog = $mdDialog;
            this.items = [1, 2, 3];
        }
        dialogCtrl.prototype.closeDialog = function () {
            this.$mdDialog.hide();
        };
        ;
        dialogCtrl.prototype.selectItem = function (item) {
            this.$mdDialog.hide();
            console.log(item);
        };
        ;
        dialogCtrl.$inject = ['$mdDialog'];
        return dialogCtrl;
    })();
    app.dialogCtrl = dialogCtrl;
})(app || (app = {}));
