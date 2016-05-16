module app {
    export class formCtrl {
        static $inject = ['$mdDialog', '$mdToast'];
        constructor(
            private $mdDialog,
            private $mdToast
        ) {}
        contact: {} = {
            name: '' as string,
            phone: '' as number
        };
        reset():void {
            this.contact.name = '';
            this.contact.phone = '';
        };
        submit():void {
            var toast = this.$mdToast.simple()
             .content( 'Форма отправлена' )
             .position('top right');
            this.$mdToast.show(toast);
            this.reset();
        }
    }
}
