module app {
    export class MainController {
        static $inject = ['$mdSidenav', '$mdDialog', '$mdMedia', '$http', '$mdToast'];
        cities: [] = [];
        constructor(
             private $mdSidenav,
             private $mdDialog,
             private $mdMedia,
             private $http,
             private $mdToast
        ){
            var self = this;
            self.cities = (typeof localStorage['cities'] != "undefined") ?  JSON.parse(localStorage.getItem('cities')) : [];
        }



        loadCity(): [] {
            if (typeof this.request == "undefined") return false;
            var self = this;
            var city = {};

            this.$http.get("//api.openweathermap.org/data/2.5/weather?q="+this.request+"&appid=15806d6db53ac3fa3eea6e2d05724e8a")
               .then(function(response) {
                   if (response.data.cod == 404) {
                       self.showMessage("Город не найден!");
                       return false;
                   }
                   city = response.data;
                   console.log(city);
                   console.log(self.cities);
                   if (self.checkUniq(city.name, self.cities))
                        self.cities.push(city);
                   return  self.cities;
               }
        }

        showMessage(message: string): void {
            this.$mdToast.show(
                this.$mdToast.simple()
                .textContent(message)
                .position('top right')
                .hideDelay(1500)
            )
        }

        deleteItem(city: {}): void {
            let indexCity = this.cities.indexOf(city);
            let savedCity = (typeof localStorage['cities'] != "undefined") ?  JSON.parse(localStorage.getItem('cities')) : [];
            this.cities.splice(indexCity, 1);
            savedCity.splice(indexCity, 1);
            localStorage.setItem('cities', JSON.stringify(savedCity));
            this.showMessage("Город удален.");
        }

        saveItem(city: {}): void {
            let savedCity = (typeof localStorage['cities'] != "undefined") ?  JSON.parse(localStorage.getItem('cities')) : [];
            if (this.checkUniq(city.name, savedCity))
                savedCity.push(city);
            else {
                this.showMessage("Такой город уже сохранен");
                return false;
            }
            localStorage.setItem('cities', JSON.stringify(savedCity));
            this.showMessage("Город сохранен.");
        }

        toogleSideNav() : void {
           this.$mdSidenav('left').toggle();
        };

        checkUniq(name: string, arr: []): boolean {
            let result = true;
            for ( city in arr ) {
                if (arr[city].name == name)
                    result = false;
            }
            return result;
        }

    }
}
