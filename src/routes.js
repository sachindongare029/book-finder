var App = App || {};

App.Router = Backbone.Router.extend({

	routes: {
		'/': 'homeView', // #/
  },

	initialize: function(options) {
	},

  homeView: function() {
    new App.views.HomeView();
  },

});

