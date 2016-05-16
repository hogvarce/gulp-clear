module app {
    export class dialogCtrl {
        static $inject = ['$mdDialog'];
        constructor(private $mdDialog) {}
        items = [ 1, 2, 3 ];
        closeDialog():void {
            this.$mdDialog.hide();
        };
        selectItem(item: number): void {
            this.$mdDialog.hide();
            console.log(item);
        };
    }
}
