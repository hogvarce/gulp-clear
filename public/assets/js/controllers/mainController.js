var app;
(function (app) {
    var MainController = (function () {
        function MainController($mdSidenav, $mdDialog, $mdMedia, $location, $http) {
            this.$mdSidenav = $mdSidenav;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.$location = $location;
            this.$http = $http;
            this.cities = [];
            var self = this;
        }
        MainController.prototype.loadCity = function () {
            var self = this;
            var city = {};
            this.$http.get("//api.openweathermap.org/data/2.5/weather?q=" + this.request + "&appid=15806d6db53ac3fa3eea6e2d05724e8a")
                .then(function (response) {
                city = response.data;
                console.log(city);
                self.cities.push(city);
                return self.cities;
            });
        };
        MainController.$inject = ['$mdSidenav', '$mdDialog', '$mdMedia', '$location', '$http'];
        return MainController;
    })();
    app.MainController = MainController;
})(app || (app = {}));
