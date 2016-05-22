module app {
    export class MainController {
        static $inject = [ '$mdSidenav', '$mdDialog', '$mdMedia', '$location', '$http'];
        constructor(
             private $mdSidenav,
             private $mdDialog,
             private $mdMedia,
             private $location,
             private $http
        ){
            var self = this;
        }
        cities: [] = [];
        loadCity(): [] {
            var self = this;
            var city = {};
            this.$http.get("//api.openweathermap.org/data/2.5/weather?q="+this.request+"&appid=15806d6db53ac3fa3eea6e2d05724e8a")
               .then(function(response) {
                   city = response.data;
                   console.log(city);
                   self.cities.push(city);
                   return  self.cities;
               }
        }
    }
}
