const App = new Marionette.Application();

App.addRegions({
    "mainRegion": "#main"
});

App.start();

var model = new Backbone.Model({
  "id": 2965621,
  "name": "backbone.marionette",
  "full_name": "marionettejs/backbone.marionette",
  "watchers_count": 3844,
  "forks_count": 652,
  "language": "JavaScript"
});

var view = new VideoItemView({model:model}).render();

 App.mainRegion.show(view);
