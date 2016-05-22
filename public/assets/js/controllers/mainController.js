var app;
(function (app) {
    var MainController = (function () {
        function MainController($mdSidenav, $mdDialog, $mdMedia, $http, $mdToast) {
            this.$mdSidenav = $mdSidenav;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.$http = $http;
            this.$mdToast = $mdToast;
            this.cities = [];
            var self = this;
            self.cities = (typeof localStorage['cities'] != "undefined") ? JSON.parse(localStorage.getItem('cities')) : [];
        }
        MainController.prototype.loadCity = function () {
            if (typeof this.request == "undefined")
                return false;
            var self = this;
            var city = {};
            this.$http.get("//api.openweathermap.org/data/2.5/weather?q=" + this.request + "&appid=15806d6db53ac3fa3eea6e2d05724e8a")
                .then(function (response) {
                if (response.data.cod == 404) {
                    self.showMessage("Город не найден!");
                    return false;
                }
                city = response.data;
                if (self.checkUniq(city.name, self.cities))
                    self.cities.push(city);
                return self.cities;
            });
        };
        MainController.prototype.showMessage = function (message) {
            this.$mdToast.show(this.$mdToast.simple()
                .textContent(message)
                .position('top right')
                .hideDelay(1500));
        };
        MainController.prototype.deleteItem = function (city) {
            var indexCity = this.cities.indexOf(city);
            var savedCity = (typeof localStorage['cities'] != "undefined") ? JSON.parse(localStorage.getItem('cities')) : [];
            this.cities.splice(indexCity, 1);
            for (c in savedCity) {
                if (savedCity[c].name == city.name)
                    savedCity.splice(c, 1);
            }
            localStorage.setItem('cities', JSON.stringify(savedCity));
            this.showMessage("Город удален.");
        };
        MainController.prototype.saveItem = function (city) {
            var savedCity = (typeof localStorage['cities'] != "undefined") ? JSON.parse(localStorage.getItem('cities')) : [];
            if (this.checkUniq(city.name, savedCity))
                savedCity.push(city);
            else {
                this.showMessage("Такой город уже сохранен");
                return false;
            }
            localStorage.setItem('cities', JSON.stringify(savedCity));
            this.showMessage("Город сохранен.");
        };
        MainController.prototype.toogleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        ;
        MainController.prototype.checkUniq = function (name, arr) {
            var result = true;
            for (city in arr) {
                if (arr[city].name == name)
                    result = false;
            }
            return result;
        };
        MainController.$inject = ['$mdSidenav', '$mdDialog', '$mdMedia', '$http', '$mdToast'];
        return MainController;
    }());
    app.MainController = MainController;
})(app || (app = {}));
